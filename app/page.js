import BoxForm from "./components/BoxForm/BoxForm";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl" style={{ userSelect: "none" }}>
        Acortador de Link
      </h1>
      <BoxForm />
      <div className="w-full flex flex-col items-center justify-center text-center mt-8 pt-8 pb-8 bg-slate-200 min-h-[50vh]">
        <h2 className="text-2xl md:text-4xl">¿Cómo funciona?</h2>
        <p className="font-thin mt-3 w-4/5 text-center">
          El Servicio para crear <strong>enlaces cortos</strong> es un sitio con
          el que puede acortar significativamente cualquier enlace, mientras que
          al mismo tiempo funcionará exactamente igual que el enlace largo
          original.Con solo un clic, puede acortar la URL larga. Simplemente
          pegue su enlace grande en el campo y haga clic en el botón CortarUrl.
          Su enlace corto está listo para usar. Cópielo y envíelo a sus amigos
          por mensaje o en las redes sociales. Nuestras URL cortas son
          completamente gratuitas.
        </p>
      </div>
    </>
  );
}
