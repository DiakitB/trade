import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  return (
    <>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCompany">Company</label>
            <input
              type="email"
              class="form-control"
              id="inputCompany"
              placeholder="Company Name"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputDivision">Division</label>
            <input
              type="password"
              class="form-control"
              id="inputDivision"
              placeholder="Division"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputContact">Contact</label>
          <input
            type="text"
            class="form-control"
            id="inputContact"
            placeholder="Contact"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </form>

      <div className="text-end">
        <button className="btn btn-primary px-4" onClick={() => navigate(-1)}>
          Go back to contact list
        </button>
      </div>
    </>
  );
}

// {
//   id: 1,
//   company: "ARBEC",
//   division: "PARENT",
//   message: [
//     "obj 1",
//     " Lorem ipsum dolor sit, amet consectetur adipisicing elit",
//     "Laborevoluptatum delectus dolorum consectetur eum minima rem, sed, in itaque",
//     "soluta expedita quas ipsum cumque quos suscipit quo doloremque iste aperiam",
//   ],
//   contact: [
//     {
//       name: "Marc",
//       lastName: "lapage",
//       email: "marc@gmail.com",
//       phone: "123 456 78910",
//       title: "buyer",
//     },
//     {
//       name: "David",
//       lastName: "Marion",
//       email: "davidc@gmail.com",
//       phone: "123 456 78910",
//       title: "mecanic",
//     },
//     {
//       name: "Babacar",
//       lastName: "Diakite",
//       email: "babacar@gmail.com",
//       phone: "123 456 78910",
//       title: "it",
//     },
//   ],
// },
