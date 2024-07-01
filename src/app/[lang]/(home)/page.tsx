"use client";
import { MenuAdmin } from "@/components/aside/menuAdmin";
import { CardMenu } from "@/components/card/cardMenu";
// import { useUserStore } from "../../store/store";

import { getDictionaryUseClient } from "@/dicionaries/default-useClient-dicionary";
import { Locale } from "@/config/i18n.config";
export default function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = getDictionaryUseClient(params.lang);

  // const { user } = useUserStore();
  console.log(dictionary, "aqui");

  const { site } = dictionary;

  return (
    <>
      <MenuAdmin />
      <h1 className="text-center text-4xl font-bold">{site.title}</h1>
      <main className="m-auto mt-20 max-w-6xl w-11/12 py-8 flex justify-center flex-wrap">
        <CardMenu />
      </main>
    </>
  );
}
