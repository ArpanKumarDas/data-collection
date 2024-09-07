import React from "react";

const PersonalInfo = ({ nextStep, values, initData, setInitData }) => {
  const next = (e) => {
    e.preventDefault();

    console.log("body", JSON.stringify(initData));

    nextStep();
  };

  const handleChange = (e) => {
    setInitData({
      ...initData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="personal_info">
      <h1>Participant information form</h1>
      <i>All the fields are required</i>
      <br />
      <br />

      <form onSubmit={next}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={initData.name ?? ""}
            onChange={handleChange}
            required
          />
        </label>
        <div className="side-side">
          <label>
            Age:
            <input
              type="number"
              name="age"
              min={15}
              max={30}
              value={initData.age ?? ""}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={initData.gender ?? ""}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                --Select--
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non Binary</option>
              <option value="other">Other</option>
              <option value="pnos">Prefer not to say</option>
            </select>
          </label>
        </div>
        <div className="side-side">
          <label>
            Degree being pursued:
            <input
              type="text"
              name="degree"
              value={initData.degree ?? ""}
              onChange={handleChange}
              pattern="[a-zA-Z\s,]*"
              title="Only letters, spaces and commas allowed."
              required
            />
          </label>
          <label>
            Subject of Study:
            <input
              type="text"
              name="subject"
              value={initData.subject ?? ""}
              onChange={handleChange}
              pattern="[a-zA-Z\s,]*"
              title="Only letters, spaces and commas allowed."
              required
            />
          </label>
        </div>
        <div className="side-side">
          <label>
            Board of Education at school:
            <input
              type="text"
              name="board"
              value={initData.board ?? ""}
              onChange={handleChange}
              pattern="[a-zA-Z\s,]*"
              title="Only letters, spaces and commas allowed."
              required
            />
          </label>
          <label>
            Medium of instruction at school:
            <input
              type="text"
              name="school_inst"
              value={initData.school_inst ?? ""}
              onChange={handleChange}
              pattern="[a-zA-Z\s,]*"
              title="Only letters, spaces and commas allowed."
              required
            />
          </label>
        </div>
        <div className="side-side">
          <label>
            First language:
            <input
              type="text"
              name="first_lang"
              value={initData.first_lang ?? ""}
              onChange={handleChange}
              pattern="[a-zA-Z\s,]*"
              title="Only letters, spaces and commas allowed."
              required
            />
          </label>
          <label>
            Other languages known:
            <input
              type="text"
              name="other_lang"
              value={initData.other_lang ?? ""}
              onChange={handleChange}
              pattern="[a-zA-Z\s,]*"
              title="Only letters, spaces and commas allowed."
              required
            />
          </label>
        </div>
        <label>
          State of domicile:
          <select
            name="state"
            value={initData.state ?? ""}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              --Select--
            </option>
            <option value="andhrapradesh">Andhra Pradesh</option>
            <option value="arunachalpradesh">Arunachal Pradesh</option>
            <option value="assam">Assam</option>
            <option value="bihar">Bihar</option>
            <option value="chhattisgarh">Chhattisgarh</option>
            <option value="goa">Goa</option>
            <option value="gujarat">Gujarat</option>
            <option value="haryana">Haryana</option>
            <option value="himachalpradesh">Himachal Pradesh</option>
            <option value="jharkhand">Jharkhand</option>
            <option value="karnataka">Karnataka</option>
            <option value="kerala">Kerala</option>
            <option value="madhyapradesh">Madhya Pradesh</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="manipur">Manipur</option>
            <option value="meghalaya">Meghalaya</option>
            <option value="mizoram">Mizoram</option>
            <option value="nagaland">Nagaland</option>
            <option value="odisha">Odisha</option>
            <option value="punjab">Punjab</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="sikkim">Sikkim</option>
            <option value="tamilnadu">Tamil Nadu</option>
            <option value="telangana">Telangana</option>
            <option value="tripura">Tripura</option>
            <option value="uttarpradesh">Uttar Pradesh</option>
            <option value="uttarakhand">Uttarakhand</option>
            <option value="westbengal">West Bengal</option>
            <option value="andamanandnicobarislands">
              Andaman and Nicobar Islands
            </option>
            <option value="chandigarh">Chandigarh</option>
            <option value="dadhraandnagarhaveli">Dadra and Nagar Haveli</option>
            <option value="damananddiu">Daman and Diu</option>
            <option value="delhi">Delhi</option>
            <option value="lakshadweep">Lakshadweep</option>
            <option value="puducherry">Puducherry</option>
            <option value="ladakh">Ladakh</option>
          </select>
        </label>
        <label>
          Parents' level of education:
          <input
            type="text"
            name="parent_edu"
            value={initData.parent_edu ?? ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Annual family income:
          <select
            name="income"
            value={initData.income ?? ""}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              --Select--
            </option>
            <option value="low">Less than 5 LPA</option>
            <option value="medium">Between 5 LPA and 10 LPA</option>
            <option value="high">Above 10 LPA</option>
          </select>
        </label>
        <label>
          Phone number:
          <input
            type="tel"
            name="phno"
            value={initData.phno ?? ""}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Please enter 10 digits"
            required
          />
        </label>
        <label>
          Email ID:
          <input
            type="email"
            name="mail"
            value={initData.mail ?? ""}
            onChange={handleChange}
            placeholder="username@email.com"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            title="Please match the format: username@email.com (make sure all characters are in lowercase)"
            required
          />
        </label>

        {/* make this hidden: phno */}
        {/* <label>
                    Participant ID:
                    <input type="text" name="partID" required/>
                </label> */}

        <button
          type="submit"
          // onClick={next}
        >
          {" "}
          Proceed to Questionnaire 1
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
