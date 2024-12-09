import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from "@/components/admin/Loading";
import { Suspense } from "react";
async function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <div>Hey</div>
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <div>Hey</div>
      </Suspense>
    </>
  );
}
export default AdminPage;
