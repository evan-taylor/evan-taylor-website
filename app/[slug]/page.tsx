import { notFound } from "next/navigation";
import CardStack from "../../components/CardStack";
import { cards } from "../../lib/cards";

export async function generateStaticParams() {
  return cards.map((card) => ({
    slug: card.id,
  }));
}

export default async function CardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const isValidCard = cards.some((c) => c.id === slug);

  if (!isValidCard) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black">
      <CardStack initialActiveId={slug} />
    </main>
  );
}

