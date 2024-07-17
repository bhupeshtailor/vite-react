import useFetch from "./useFetch";

const RenderUseFetch = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div className="p-5">
            {data &&
                data.map((item) => {
                    return <p className="text-indigo-600 text-lg font-medium" key={item.id}>{item.id}. {item.title}</p>;
                })}
        </div>
    );
};

export default RenderUseFetch;