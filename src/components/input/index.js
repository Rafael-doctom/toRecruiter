import { useState } from "react";

const Input = () => {

    let inputStyle = {
        border: '2px solid #007bff',
    };

    let bgSearch = {
        background: '#007bff',
        color: 'white',
        border: 0,
    };

    const [valueInput, setInput] = useState(false);


    return (
        <>
            <div className="mt-4 py-1 border-b-2 bg-gray-000">
                <div className="relative ">
                    <input
                        type="text"
                        name="price"
                        className="outline-0 h-10 block w-full pl-1 rounded-md"
                        placeholder="Digite algo..."
                        style={inputStyle}
                        onClick={() => setInput('Em desenvolvimento...')}
                    />

                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <button className=" h-10 w-40" style={bgSearch}>
                            Pesquisar
                        </button>
                    </div>
                </div>
                <p className="" style={{color:'rgb(0, 123, 255)', fontWeight:500, fontFamily:'monospace', paddingTop:'0.2rem'}}>
                    {valueInput}
                </p>
            </div>
        </>
    );
};

export default Input;