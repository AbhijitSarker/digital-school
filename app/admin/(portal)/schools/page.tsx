'use client';


const schools = [
  { id: 'SCH001', name: 'ঢাকা মডেল স্কুল অ্যান্ড কলেজ', district: 'ঢাকা', students: '৮৮৪', plan: 'প্রিমিয়াম', activeRate: '৯৫%', joined: 'জানু ২০২৩', status: 'active' },
  { id: 'SCH002', name: 'চট্টগ্রাম পাবলিক স্কুল', district: 'চট্টগ্রাম', students: '৬৪৪', plan: 'স্ট্যান্ডার্ড', activeRate: '৮৮%', joined: 'ফেব ২০২৩', status: 'active' },
  { id: 'SCH003', name: 'রাজশাহী কলেজিয়েট স্কুল', district: 'রাজশাহী', students: '৫২২', plan: 'স্ট্যান্ডার্ড', activeRate: '৭৮%', joined: 'মার্চ ২০২৩', status: 'active' },
  { id: 'SCH004', name: 'সিলেট উইমেন্স কলেজ', district: 'সিলেট', students: '৩৮৮', plan: 'ফ্রি', activeRate: '৬৫%', joined: 'জুন ২০২৩', status: 'trial' },
  { id: 'SCH005', name: 'ময়মনসিংহ সরকারি বালক বিদ্যালয়', district: 'ময়মনসিংহ', students: '২৮৮', plan: 'ফ্রি', activeRate: '৫৮%', joined: 'আগস্ট ২০২৩', status: 'trial' },
  { id: 'SCH006', name: 'কুমিল্লা ভিক্টোরিয়া সরকারি কলেজ', district: 'কুমিল্লা', students: '৪৮৪', plan: 'প্রিমিয়াম', activeRate: '৯২%', joined: 'সেপ্টে ২০২৩', status: 'active' },
];

const planConfig: Record<string, string> = {
  'প্রিমিয়াম': 'bg-tertiary-fixed text-on-tertiary-fixed',
  'স্ট্যান্ডার্ড': 'bg-primary/10 text-primary',
  'ফ্রি': 'bg-surface-container-high text-on-surface dark:bg-surface-container-highest dark:border dark:border-green-900/30-variant',
};

export default function SchoolsPage() {
  return (
    <div className="flex flex-col">

      <div className="p-4 md:p-8 space-y-5 md:space-y-6">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="text-xs font-label text-outline uppercase tracking-widest font-bold mb-1">Management</p>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">স্কুল ব্যবস্থাপনা</h2>
          </div>
          <button className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-label font-bold text-sm shadow-lg hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add_business</span>
            স্কুল যোগ করুন
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: 'মোট স্কুল', value: '১২৫', icon: 'domain', color: 'text-primary bg-primary/10' },
            { label: 'প্রিমিয়াম', value: '৪৪', icon: 'star', color: 'text-on-tertiary-fixed-variant bg-tertiary-fixed/50' },
            { label: 'স্ট্যান্ডার্ড', value: '৫৮', icon: 'verified', color: 'text-primary bg-primary/5' },
            { label: 'ট্রায়াল', value: '২৩', icon: 'schedule', color: 'text-outline bg-surface-container-high' },
          ].map((c) => (
            <div key={c.label} className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 dark:border-green-900/10">
              <div className={`w-10 h-10 rounded-xl ${c.color.split(' ')[1]} flex items-center justify-center mb-3`}>
                <span className={`material-symbols-outlined fill-icon ${c.color.split(' ')[0]}`} style={{ fontSize: '22px' }}>{c.icon}</span>
              </div>
              <div className={`text-2xl font-headline font-bold ${c.color.split(' ')[0]}`}>{c.value}</div>
              <div className="text-xs font-label text-outline mt-0.5">{c.label}</div>
            </div>
          ))}
        </div>

        {/* School table */}
        <div className="bg-surface-container dark:border dark:border-green-900/10 rounded-2xl shadow-sm">
          <div className="p-5 border-b border-outline-variant/10 dark:border-green-900/10 flex flex-wrap gap-3 justify-between items-center">
            <div className="flex items-center gap-3 bg-surface-container px-4 py-2 rounded-xl flex-1 max-w-xs">
              <span className="material-symbols-outlined text-outline" style={{ fontSize: '18px' }}>search</span>
              <input type="text" placeholder="স্কুল খুঁজুন..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-outline/60" />
            </div>
            <select className="px-3 py-2 bg-surface-container rounded-xl text-sm font-label text-on-surface-variant outline-none border-0">
              <option>সব জেলা</option>
              <option>ঢাকা</option>
              <option>চট্টগ্রাম</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-container-low text-left">
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">স্কুল</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">জেলা</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">শিক্ষার্থী</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">প্ল্যান</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">সক্রিয়তা</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">যোগদান</th>
                  <th className="px-5 py-3 text-xs font-label font-bold text-outline uppercase tracking-wider">কাজ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {schools.map((s) => (
                  <tr key={s.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined fill-icon text-primary" style={{ fontSize: '18px' }}>domain</span>
                        </div>
                        <div>
                          <p className="font-semibold text-on-surface">{s.name}</p>
                          <p className="text-xs text-outline font-label">{s.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-on-surface-variant">{s.district}</td>
                    <td className="px-5 py-4 font-bold text-primary font-label">{s.students}</td>
                    <td className="px-5 py-4">
                      <span className={`text-[11px] font-label font-bold px-2.5 py-1 rounded-full ${planConfig[s.plan]}`}>{s.plan}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: s.activeRate }} />
                        </div>
                        <span className="font-bold text-primary text-xs font-label">{s.activeRate}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-on-surface-variant text-xs">{s.joined}</td>
                    <td className="px-5 py-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high dark:hover:bg-green-900/10 text-on-surface-variant transition-colors">
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high dark:hover:bg-green-900/10 text-on-surface-variant transition-colors">
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
