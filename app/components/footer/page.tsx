export default function Footer() {
  const currentDate = new Date();
  return (
    <h1 className="fixed opacity-200 bottom-0 w-full py-2 bg-orange-300 text-xs text-black-400  text-center -z-1 max-[600px]:hidden">
      {`Kuisine229 © ${currentDate.getFullYear()} Let's Get Connected 🔃`}
    </h1>
  );
}
