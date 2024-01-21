import LogoLink from "../components/LogoLink";
import useRouter from "../hooks/useRouter"

const HomePage = () => {

  const router = useRouter();

  return (
    <main>
      <section className="flex justify-center h-screen items-center px-5">
        <div className="max-w-[800px] flex flex-col">
          <LogoLink/>
          <h1 className="text-4xl sm:text-5xl md:text-7xl">Read te reo Māori with ease</h1>
          <p className="p-3"></p>
          <div className="flex flex-col sm:flex-row">
          <button 
              onClick={()=>{router.navigate("/import")}} 
              className="text-xl border-black border-2 bg-black text-white py-3 px-6 rounded-[3px]"
              >
              Get Reading!
            </button>
            <p className="p-2"></p>
            <button 
              onClick={()=>{router.scrollTo("info-section")}} 
              className="text-xl border-black border-2 py-3 px-6 rounded-[3px]"
              >
              Learn more
            </button>
          </div>
        </div>
      </section>

      <InfoSection />
    </main>

  )
}

export default HomePage

const InfoSection = () => {
  return(
    <section id="info-section" className="flex justify-center w-full p-5 sm:p-16 py-16 bg-gray">
      <div className="flex flex-col sm:flex-row sm:items-center h-full">
        <div className="w-full">
          <h3 className="text-4xl font-bold">How it works</h3>
          <p className="p-1"></p>
          <p>Leo lang is designed to allow for an easy reading experience and translation experience.</p>
          <p className="p-2"></p>
          <p>Simply click on or highlight a phrase and view the translation in your dictionary. If you want to review the phrase for later, click save, view your phrase list and export it to a txt file on your device.</p>
        </div>

        <p className="p-2"></p>

        <div className="flex justify-center w-full overflow-hidden ">
            <img className="sm:w-[90%] rounded-[5px]" src="/images/demo.gif" alt="" />
        </div>
      </div>
    </section>
  );
};