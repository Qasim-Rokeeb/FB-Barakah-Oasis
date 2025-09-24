import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Skeleton className="h-80 w-full rounded-lg mb-8" />
            <Skeleton className="h-10 w-3/4 mb-6" />
            <div className="space-y-3">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-11/12" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>
          </div>

          {/* Donation Card */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 p-6 border rounded-lg shadow-sm bg-card">
              <Skeleton className="h-8 w-1/2 mb-4" />
              <Skeleton className="h-5 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              
              <Skeleton className="h-4 w-full mb-2" />

              <div className="space-y-4 mt-6">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
