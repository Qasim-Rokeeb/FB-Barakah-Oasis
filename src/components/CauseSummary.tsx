
import { getSummary } from '@/lib/actions';

type CauseSummaryProps = {
  details: string;
};

export default async function CauseSummary({ details }: CauseSummaryProps) {
  const summary = await getSummary(details);

  return (
    <p className="text-sm text-muted-foreground">
      {summary}
    </p>
  );
}
