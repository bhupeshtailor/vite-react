import { useState } from "react";
import styles from "../my-style.module.css";

function Forms(props: any) {
  const [inputs, setInputs] = useState({
    description: "",
  });

  // setInputs({username:"", age: "", description: ""})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const myStyle = { color: "blue", fontSize: "18px" };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel
        pariatur harum repellat exercitationem in cumque excepturi voluptate
        deleniti optio provident repellendus quod temporibus velit ab, ea,
        autem, cum nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Tempora repellat nostrum necessitatibus possimus quidem qui eius
        deserunt dolor laborum est? Temporibus aspernatur illo voluptate ducimus
        soluta, minima ipsa modi expedita? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorum ab cumque aliquam quod dolores,
        possimus voluptatibus deserunt voluptas voluptate minima neque ipsum,
        dicta ducimus pariatur natus quisquam atque a voluptates!
      </div>

      <h1 className={`${styles.bigblue} mt-5 mb-3`}>
        This is {props.formTitle}!
      </h1>
      <label className="block my-3" style={myStyle}>
        Enter your name:
        <input
          className="ml-3 rounded-md"
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label className="block my-3" style={myStyle}>
        Enter your age:
        <input
          className="ml-3 rounded-md"
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label className="block my-3" style={myStyle}>
        Enter description:
        <textarea
          className="ml-3 rounded-md resize-none"
          name="description"
          value={inputs.description || ""}
          onChange={handleChange}
          required
        />
      </label>
      <p>
        {inputs && inputs.description ? (
          `${inputs.description.trim().split(" ").length} Word, ${
            inputs.description.length
          } Characters`
        ) : (
          <i>Description is not available</i>
        )}
      </p>

      <p>{inputs.description || ""}</p>

      <label className="block my-3" style={myStyle}>
        Select Car:
        <select
          className="ml-3 rounded-md"
          name="car"
          value={inputs.car || ""}
          onChange={handleChange}
          required
        >
          <option value="">--Select--</option>
          <option value="ford">Ford</option>
          <option value="volvo">Volvo</option>
          <option value="fiat">Fiat</option>
        </select>
      </label>

      <button className="block my-3 bg-blue-500 text-white" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Forms;
