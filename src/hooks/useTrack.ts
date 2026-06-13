import { useNavigate, useRouterState } from "@tanstack/react-router";

export type Track = "main" | "pastors";

export function useTrack() {
  const search = useRouterState({ select: (s) => s.location.search as Record<string, unknown> });
  const track: Track = search?.track === "pastors" ? "pastors" : "main";
  const navigate = useNavigate();

  const setTrack = (t: Track) => {
    navigate({
      to: ".",
      search: (prev: Record<string, unknown>) => ({ ...(prev ?? {}), track: t }),
      replace: true,
      resetScroll: false,
    });
  };

  return { track, setTrack };
}
