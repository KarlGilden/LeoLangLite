import BtnNav from "../components/buttons/BtnNav";
import LogoLink from "../components/LogoLink";
import useRouter from "../hooks/useRouter"

const HomePage = () => {

  const router = useRouter();

  return (
    <main>
      <section className="bg-primary flex justify-center h-screen items-center px-5">
        <div className="text-center max-w-[700px] flex flex-col items-center">
          <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-7xl font-header">Read <span className="text-highlight font-header font-bold">te reo Māori</span> with ease</h1>
          <p className="p-3"></p>
          <div className="flex flex-col sm:flex-row">

            <BtnNav type="solid" size="large" btnFunction={()=>{router.navigate("/import")}}>
              Get Reading!
            </BtnNav>

            <p className="p-2"></p>

            <BtnNav type="ghost" size="large" btnFunction={()=>{router.scrollTo("info-section")}}>
              Learn more
            </BtnNav>

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
    <section id="info-section" className="flex justify-center w-full p-5 sm:p-16 py-16 bg-wash">
      <div className="flex flex-col sm:flex-row sm:items-center h-full">
        <div className="w-full">
          <h3 className="text-4xl font-bold font-header">How it works</h3>
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