import { routes } from "@/constants/routes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      {routes.map(({ name, children }) => (
        <div key={name}>
          <div className="py-4 pt-8 text-lg font-semibold">{name}</div>
          <div className="flex gap-6">
            {children.map(({ link, disabled, name }) => (
              <div
                className="hover:underline-offset-8 underline underline-offset-4 transition-all"
                key={link}
              >
                <a
                  className={
                    disabled
                      ? "pointer-events-none cursor-default opacity-50"
                      : ""
                  }
                  href={link}
                >
                  {name}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
