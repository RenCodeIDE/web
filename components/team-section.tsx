import Image from "next/image";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Ishaan Goyal",
      role: "Co-founder",
      bio: "Building the future of developer tools with AI-powered IDE solutions",
      image: "/ishaan.jpg",
    },
    {
      name: "Rahil Mittal",
      role: "Co-founder",
      bio: "Engineering innovative solutions for developer productivity and team collaboration",
      image: "/rahil.png",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
            Built by Engineers, for Engineers
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            We've felt the pain of broken workflows and misaligned teams. That's
            why we're building Ren.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-xl"
            >
              {/* Profile image */}
              <div className="mb-6 h-24 w-24 overflow-hidden rounded-full ring-2 ring-accent/20 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>

              <h3 className="mb-1 text-2xl font-bold text-foreground">
                {member.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-accent">
                {member.role}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
