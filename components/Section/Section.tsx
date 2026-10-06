import type { ReactNode } from "react";
import type { GuideKey } from "@/content/guide";
import GuideBand from "./GuideBand";

type Props = {
  guideKey: GuideKey;
  id?: string;
  className?: string;
  /** Cor do header quando esta seção está atrás dele. */
  header: "ink" | "cream";
  children: ReactNode;
};

/** Toda seção do template passa por aqui: âncora, cor do header e faixa do modo guia. */
export default function Section({ guideKey, id, className, header, children }: Props) {
  return (
    <section id={id} className={className} data-header={header} data-section={guideKey}>
      <GuideBand k={guideKey} />
      {children}
    </section>
  );
}
