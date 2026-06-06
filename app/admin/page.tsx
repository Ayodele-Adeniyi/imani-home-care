"use client";
import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, XCircle, Clock, Trash2, RefreshCw, LogOut, Calendar, Mail, Phone, MessageSquare, ExternalLink } from "lucide-react";

type Booking = {
  id: string; createdAt: string; firstName: string; lastName: string;
  email: string; phone?: string; service?: string; message?: string;
  date?: string; time?: string; type: string; status: string; notes?: string;
};

type Filter = "all" | "pending" | "confirmed" | "cancelled";

const STATUS_STYLES: Record<string, string> = {
  pending:   "bg-amber-100 text-amber-800 border border-amber-200",
  confirmed: "bg-green-100 text-green-800 border border-green-200",
  cancelled: "bg-red-100 text-red-800 border border-red-200",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Booking | null>(null);
  const [noteInput, setNoteInput] = useState("");
  const [saving, setSaving] = useState(false);

  const fetchBookings = useCallback(async (pw: string) => {
    setLoading(true);
    const res = await fetch("/api/admin/bookings", { headers: { "x-admin-password": pw } });
    if (res.ok) { setBookings(await res.json()); }
    setLoading(false);
  }, []);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/admin/bookings", { headers: { "x-admin-password": password } });
    if (res.ok) { setAuthed(true); setBookings(await res.json()); setError(""); }
    else setError("Incorrect password");
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    setSaving(true);
    const res = await fetch(`/api/admin/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ status, notes: noteInput }),
    });
    if (res.ok) {
      const updated = await res.json();
      setBookings((b) => b.map((bk) => bk.id === id ? updated : bk));
      setSelected(updated);
    }
    setSaving(false);
  };

  const deleteBooking = async (id: string) => {
    if (!confirm("Delete this booking permanently?")) return;
    await fetch(`/api/admin/bookings/${id}`, { method: "DELETE", headers: { "x-admin-password": password } });
    setBookings((b) => b.filter((bk) => bk.id !== id));
    setSelected(null);
  };

  useEffect(() => { if (selected) setNoteInput(selected.notes || ""); }, [selected]);

  const filtered = bookings.filter((b) => filter === "all" || b.status === filter);
  const counts = {
    all: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0f2440] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-10 w-full max-w-sm shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-[#e8f2ec] flex items-center justify-center text-2xl mx-auto mb-5">🔐</div>
          <h1 className="text-2xl font-bold text-[#1a3c5e] text-center mb-1">Admin Dashboard</h1>
          <p className="text-[#4a5568] text-sm text-center mb-7">Imani Home Care — Bookings & Enquiries</p>
          <form onSubmit={login} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6a9c7f] focus:outline-none text-[#1a202c]"
              required
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1a3c5e] hover:bg-[#2a5580] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {loading ? <RefreshCw size={16} className="animate-spin" /> : null}
              Sign In
            </button>
          </form>
          <p className="text-xs text-center text-[#4a5568] mt-4">Default password: <code className="bg-gray-100 px-1 py-0.5 rounded">imani2024</code></p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a3c5e] text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Imani Home Care — Admin</h1>
          <p className="text-white/70 text-sm">{counts.all} total submissions</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => fetchBookings(password)} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors">
            <RefreshCw size={14} /> Refresh
          </button>
          <a href="/studio" target="_blank" className="bg-[#6a9c7f] hover:bg-[#558a6a] px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors">
            <ExternalLink size={14} /> CMS Studio
          </a>
          <button onClick={() => { setAuthed(false); setPassword(""); }} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {(["all", "pending", "confirmed", "cancelled"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`bg-white rounded-2xl p-5 text-left shadow-sm border-2 transition-all ${filter === f ? "border-[#1a3c5e]" : "border-transparent hover:border-gray-200"}`}
            >
              <div className="text-3xl font-extrabold text-[#1a3c5e]">{counts[f]}</div>
              <div className="text-sm text-[#4a5568] capitalize mt-0.5">{f === "all" ? "Total" : f}</div>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Booking list */}
          <div className="lg:col-span-2 space-y-3">
            {loading && <p className="text-center text-[#4a5568] py-8">Loading...</p>}
            {!loading && filtered.length === 0 && (
              <div className="bg-white rounded-2xl p-8 text-center text-[#4a5568] shadow-sm">No {filter === "all" ? "" : filter} bookings yet.</div>
            )}
            {filtered.map((b) => (
              <div
                key={b.id}
                onClick={() => setSelected(b)}
                className={`bg-white rounded-2xl p-4 shadow-sm cursor-pointer border-2 transition-all hover:border-[#6a9c7f] ${selected?.id === b.id ? "border-[#1a3c5e]" : "border-transparent"}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-bold text-[#1a3c5e]">{b.firstName} {b.lastName}</p>
                    <p className="text-sm text-[#4a5568]">{b.service || "General enquiry"}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[b.status]}`}>{b.status}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#4a5568]">
                  <span className={`px-2 py-0.5 rounded-full font-medium ${b.type === "booking" ? "bg-blue-50 text-blue-700" : "bg-gray-100 text-gray-600"}`}>
                    {b.type === "booking" ? "Booking" : "Enquiry"}
                  </span>
                  <span>{new Date(b.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            {!selected ? (
              <div className="bg-white rounded-2xl p-10 text-center text-[#4a5568] shadow-sm h-full flex items-center justify-center">
                <div>
                  <MessageSquare size={36} className="mx-auto mb-3 text-gray-300" />
                  <p>Select a booking to view details</p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Detail header */}
                <div className="bg-[#1a3c5e] text-white px-6 py-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">{selected.firstName} {selected.lastName}</h2>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full mt-1 inline-block ${STATUS_STYLES[selected.status]}`}>{selected.status}</span>
                  </div>
                  <button onClick={() => deleteBooking(selected.id)} className="bg-red-500/20 hover:bg-red-500/40 text-white p-2 rounded-xl transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="p-6 space-y-5">
                  {/* Contact info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#6a9c7f] mb-2"><Mail size={14} /><span className="text-xs font-semibold uppercase tracking-wide">Email</span></div>
                      <a href={`mailto:${selected.email}`} className="text-[#1a3c5e] font-semibold text-sm hover:underline break-all">{selected.email}</a>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#6a9c7f] mb-2"><Phone size={14} /><span className="text-xs font-semibold uppercase tracking-wide">Phone</span></div>
                      <a href={`tel:${selected.phone}`} className="text-[#1a3c5e] font-semibold text-sm hover:underline">{selected.phone || "—"}</a>
                    </div>
                    {selected.date && (
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-[#6a9c7f] mb-2"><Calendar size={14} /><span className="text-xs font-semibold uppercase tracking-wide">Requested Date</span></div>
                        <p className="text-[#1a3c5e] font-semibold text-sm">{selected.date} {selected.time ? `at ${selected.time}` : ""}</p>
                      </div>
                    )}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#6a9c7f] mb-2"><Clock size={14} /><span className="text-xs font-semibold uppercase tracking-wide">Received</span></div>
                      <p className="text-[#1a3c5e] font-semibold text-sm">{new Date(selected.createdAt).toLocaleString("en-GB")}</p>
                    </div>
                  </div>

                  {selected.service && (
                    <div className="bg-[#e8f2ec] rounded-xl p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#6a9c7f] mb-1">Service Requested</p>
                      <p className="text-[#1a3c5e] font-semibold">{selected.service}</p>
                    </div>
                  )}

                  {selected.message && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#4a5568] mb-2">Message</p>
                      <p className="text-[#1a202c] text-sm leading-relaxed">{selected.message}</p>
                    </div>
                  )}

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#4a5568] mb-2">Internal Notes</label>
                    <textarea
                      rows={3}
                      value={noteInput}
                      onChange={(e) => setNoteInput(e.target.value)}
                      placeholder="Add private notes about this booking..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-[#6a9c7f] focus:outline-none resize-none text-[#1a202c]"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 flex-wrap">
                    <button onClick={() => updateStatus(selected.id, "confirmed")} disabled={saving || selected.status === "confirmed"}
                      className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                      <CheckCircle2 size={15} /> Confirm
                    </button>
                    <button onClick={() => updateStatus(selected.id, "pending")} disabled={saving || selected.status === "pending"}
                      className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                      <Clock size={15} /> Mark Pending
                    </button>
                    <button onClick={() => updateStatus(selected.id, "cancelled")} disabled={saving || selected.status === "cancelled"}
                      className="flex-1 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                      <XCircle size={15} /> Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
