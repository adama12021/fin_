import { Section } from "./Section";

export const Achivement = ()=>{
    return(
        <Section >
 <div className="bg-green-500 py-5 sm:py-10 m-auto rounded-lg">
  <div className="mx-auto max-w-7xl px-2 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base/7 text-black">Francais / Anglais</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Lingustique</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base/7 text-black">Altruiste, Généreux, ouvert</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Social</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base/7 text-black">Honneteté, rigeur, serieux & Discipline</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Principe</dd>
      </div>
    </dl>
  </div>
</div>
        </Section>
    )
}