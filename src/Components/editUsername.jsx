import { useState } from "react";
import { FiSave, FiX } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";   
import { updateUserName } from "../services/ApiHistory";

const EditUserName = ({ id, currentName, onUpdate }) => {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(currentName);

    const handleSave = async () => {
        if (!name.trim()) return;
        try {
            await updateUserName(id, name.trim());
            onUpdate(id, name.trim());   
            setEditing(false);
        } catch (err) {
            alert("Error al guardar el nombre");
        }
    };

    return (
        <div className="flex items-center gap-2">
            {editing ? (
                <>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-[#1f1f2e] text-white px-2 py-1 rounded"
                    />
                    <button onClick={handleSave} title="Guardar">
                        <FiSave className="w-5 h-5 text-green-300 hover:text-green-100" />
                    </button>
                    <button onClick={() => setEditing(false)} title="Cancelar">
                        <FiX className="w-5 h-5 text-red-300 hover:text-red-100" />
                    </button>
                </>
            ) : (
                <button
                    onClick={() => setEditing(true)}
                    title="Editar nombre"
                    className="text-[#FDDBA1] hover:text-white transition"
                >
                    <FaEdit className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

export default EditUserName;