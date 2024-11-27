import Link from "next/link";
import Image from "next/image";
import { db } from "../server/db";

const mockUrls = [
  "https://utfs.io/f/pglkKhbB4exf63dz6tU9OID8npAgiq1BYh4VQ5CmRKNZSlvF",
  "https://utfs.io/f/pglkKhbB4exfkZLu3SJZsquUEJwdKbHkiypIcaolVSYNtmjW",
  "https://utfs.io/f/pglkKhbB4exf1sQMI5ykJAqDQo3EVa0I5HurS7myX92kbx6F",
  "https://utfs.io/f/pglkKhbB4exfS0AC7nPwVihREHfmOMqsZCnax2e5PK04yb9T",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  const posts = db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index + 1} className="w-48">
            <Link href={image.url}>
              <img src={image.url} alt={image.url} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
