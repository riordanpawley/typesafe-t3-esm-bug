import { z } from "zod";
import { type DynamicRoute } from "next-typesafe-url";
import { useRouteParams } from "next-typesafe-url/pages";

const Route = {
  routeParams: z.object({
    id: z.string(),
  }),
} satisfies DynamicRoute;
export type RouteType = typeof Route;

const Page = () => {
  const res = useRouteParams(Route.routeParams);
  return (
    <div>
      {res.isError} {res.isLoading} {res.data?.id}
    </div>
  );
};

export default Page;
