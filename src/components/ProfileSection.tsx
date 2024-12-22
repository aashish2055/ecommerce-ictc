import { Avatar } from '@/components/ui/avatar';

const profiles = [
  { id: 1, name: "John Doe", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" },
  { id: 2, name: "Jane Smith", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" },
  { id: 3, name: "Mike Johnson", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" },
];

export function ProfileSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Top Officers</h2>
          <button className="text-sm text-gray-500 hover:text-gray-700">View All</button>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {profiles.map((profile) => (
            <div key={profile.id} className="flex flex-col items-center">
              <Avatar className="w-16 h-16 mb-2">
                <img src={profile.image} alt={profile.name} className="object-cover" />
              </Avatar>
              <span className="text-sm text-gray-600">{profile.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}