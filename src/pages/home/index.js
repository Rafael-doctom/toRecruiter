import Input from "../../components/input";
import ScrollTop from "../../components/scrollTop";
import Table from "../../components/table";

export default function Home() {

  const removeModal = () => {

    let modal = document.getElementById("modal");

    if (modal.style.display === 'block') {
      modal.style.display = 'none'
    } {
      modal.style.display = 'none'
    };
  };

  return (
    <>
      <div className="relative">
        <div className="max-w-8xl mx-auto  mx-5 mt-4 " >
          <Input />
          <Table />
        </div>
      </div>
      <div id="modal">
        <div class="teste2">
          <button type="button" class="close" onClick={removeModal}>
            <span aria-hidden="true">&times;</span>
          </button>
          <span>Projetos mais recentes estão no topo! 🤯 </span>
        </div>
      </div>
      <ScrollTop />
    </>
  )
};

