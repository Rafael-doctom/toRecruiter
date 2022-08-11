import { useEffect, useState } from "react";

const Table = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch('https://api.github.com/users/Rafael-doctom/starred?per_page=100')
        const dados = await response.json()
        return setData(dados);
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <table className="text-left table mt-1 table-hover w-full">
                <thead className=" border-t-2 ">
                    <tr className="">
                        <th className="py-2 pl-1">Tecnologias</th>
                        <th className="py-2 pl-1">Ver Projeto</th>
                        <th className="py-2 pl-1">Repositório</th>
                        <th className="py-2 pl-1">Descrição</th>
                    </tr>
                </thead>
                {
                    data && (
                        data.map((item) => {
                            return (
                                <>
                                    <tbody className="">
                                        <tr className="hover:bg-gray-100  border-y-2">
                                            <td className="">{item.topics.join(',  ')}</td>
                                            <td className="py-3 pl-1">
                                                <a href={item.homepage} target="_blank"  rel="noopener" >
                                                    {item.name}
                                                </a>
                                            </td>
                                            <td className="py-3  pl-1">
                                                <a href={item.html_url}  target="_blank"  rel="noopener" >
                                                    {item.name}
                                                </a>
                                            </td>
                                            <td className="py-3  pl-1">{item.description}</td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    )
                }

            </table>
        </>
    )
};

export default Table;