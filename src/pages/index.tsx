import Main from "./components/Sections/Main";
import Projects from "./components/Sections/Projects";
export default function Home() {
  return (
    <>
      <Main />
      <Projects />
      <footer className="flex justify-center py-3">
        <span> &copy; {new Date().getFullYear()} Otwumasi</span>
      </footer>
    </>
  );
}
