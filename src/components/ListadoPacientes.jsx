import Paciente from "./Paciente";
function ListadoPacientes({
  pacientes,
  setPaciente,
  eliminarPaciente,
}) {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">
              Listado de Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
              Administra tus{" "}
              <span className="font-bold text-azulSwear-100 ">
                Pacientes y Citas
              </span>
            </p>
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes agregados
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
              Comienza a agregar pacientes y{" "}
              <span className="font-bold text-azulSwear-100">
                serán visualizados aquí
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default ListadoPacientes;
