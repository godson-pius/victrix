const galleryItems = [
  { title: "Community Workshops", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80" },
  { title: "Cooking Demonstrations", image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80" },
  { title: "Backyard Gardens", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80" },
  { title: "Health Education", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80" },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
      <div className="rounded-[2rem] border border-white/10 bg-black/25 p-8 shadow-2xl shadow-emerald-950/20 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-[#cba34e]">Gallery</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Stories of learning, care, and growth.</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {galleryItems.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 backdrop-blur">
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
