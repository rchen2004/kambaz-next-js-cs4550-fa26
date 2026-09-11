"use client";

// Just to be honest, I'm not sure if I'm supposed to use AI to scaffold first then replace
// with my own value. Or if I am supposed to build it on my own first then prompt AI. 
// I prompted AI first then filled with my own details.
/* SAMPLE placeholder details throughout - replace with your own. */
export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Account</h5>
      <label htmlFor="wd-your-first-name">First name: </label>
      <input
        type="text"
        placeholder="Ryan"
        defaultValue="Ryan"
        id="wd-your-first-name"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last name: </label>
      <input
        type="text"
        placeholder="Chen"
        defaultValue="Chen"
        id="wd-your-last-name"
      />
      <br />
      <label htmlFor="wd-your-username">Username: </label>
      <input type="text" placeholder="rchen" id="wd-your-username" />
      <br />
      <label htmlFor="wd-your-password">Password: </label>
      <input
        type="password"
        defaultValue="qwerty123"
        id="wd-your-password"
      />
      <br />
      <label htmlFor="wd-your-email">Email: </label>
      <input
        type="email"
        placeholder="chen.rya@northeastern.edu"
        defaultValue="chen.rya@northeastern.edu"
        id="wd-your-email"
      />

      <h5>Biography</h5>
      <label htmlFor="wd-your-bio">Tell us about yourself:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={30}
        rows={6}
        defaultValue="Ryan Chen is a student at Northeastern University who majors in Computer Science. He enjoys cooking, coding, and playing videogames. He is a current student of CS4550 and eager to learn more about web development."
      />

      <h5>Class Standing</h5>
      <label>What is your class standing?</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-standing-freshman"
      />
      <label htmlFor="wd-your-standing-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-standing-sophomore"
      />
      <label htmlFor="wd-your-standing-sophomore">Sophomore</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-standing-junior"
      />
      <label htmlFor="wd-your-standing-junior">Junior</label>
      <br />
      <input type="radio" name="wd-your-standing" id="wd-your-standing-senior" defaultChecked/>
      <label htmlFor="wd-your-standing-senior">Senior</label>

      <h5>Enrollment Status</h5>
      <label>Are you enrolled full-time or part-time?</label>
      <br />
      <input
        type="radio"
        name="wd-your-enrollment"
        id="wd-your-enrollment-full"
        defaultChecked
      />
      <label htmlFor="wd-your-enrollment-full">Full-time</label>
      <br />
      <input
        type="radio"
        name="wd-your-enrollment"
        id="wd-your-enrollment-part"
      />
      <label htmlFor="wd-your-enrollment-part">Part-time</label>

      <h5>Interests</h5>
      <label>Which topics interest you? (check all that apply)</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-web"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-web">Web Development</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-mobile"
      />
      <label htmlFor="wd-your-interest-mobile">Mobile Apps</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-data"
      />
      <label htmlFor="wd-your-interest-data">Data Science</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-security"
      />
      <label htmlFor="wd-your-interest-security">Cybersecurity</label>

      <h5>Major</h5>
      <label htmlFor="wd-your-major">Select your major: </label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Science</option>
        <option value="CE">Computer Engineering</option>
        <option value="OTHER">Other</option>
      </select>

      <h5>Courses Taken</h5>
      <label htmlFor="wd-your-courses">
        Select every course you have completed:{" "}
      </label>
      <br />
      <select
        multiple
        id="wd-your-courses"
        defaultValue={["CS2500", "CS3200"]}
      >
        <option value="CS2500">CS2500 Fundamentals of CS 1</option>
        <option value="CS2510">CS2510 Fundamentals of CS 2</option>
        <option value="CS3200">CS3200 Database Design</option>
        <option value="CS3500">CS3500 Object-Oriented Design</option>
        <option value="CS4400">CS4400 Programming Languages</option>
        <option value="CS4550">CS4550 Web Development</option>
      </select>

      <h5>Other Details</h5>
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        defaultValue="2027"
        placeholder="2027"
        min={2024}
        max={2032}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-start-date">Date you started college: </label>
      <input
        type="date"
        defaultValue="2024-09-04"
        min="1980-01-01"
        max="2035-12-31"
        id="wd-your-start-date"
      />
      <br />
      <label htmlFor="wd-your-experience">
        Web development experience (0&ndash;10):{" "}
      </label>
      <input
        type="range"
        defaultValue="5"
        min="0"
        max="10"
        id="wd-your-experience"
      />

      <h5>Save Your Profile</h5>
      <button id="wd-your-form-save" type="submit">
        Save
      </button>
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
