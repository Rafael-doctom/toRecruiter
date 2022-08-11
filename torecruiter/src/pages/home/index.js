import Input from "../../components/input";
import ScrollTop from "../../components/scrollTop";
import Table from "../../components/table";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="max-w-8xl mx-auto  mx-5 mt-4 " >
          <Input />
          <Table />
        </div>
      </div>
      <ScrollTop />
    </>
  )
};

