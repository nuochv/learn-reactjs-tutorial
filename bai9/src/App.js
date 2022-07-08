import './App.css';
import { useState } from 'react';

function App() {
  const initialValue = {
    username: 'aaa',
    password: '123',
    txtDescription: 'this is demo',
    sltGender: 0,
    rdLang: 'vn',
    chkStatus: false,
  };

  const [inputs, setInputs] = useState(initialValue);

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="container mt-30">
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Learn Form ReactJS</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={onHandleSubmit}>
                <legend>Form</legend>
                <div className="form-group">
                  <label>username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={handleOnchange}
                    value={inputs.username}
                  />
                </div>
                <div className="form-group">
                  <label>password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleOnchange}
                    value={inputs.password}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="txtDescription"
                    className="form-control"
                    rows="3"
                    onChange={handleOnchange}
                    value={inputs.txtDescription}
                  ></textarea>
                </div>
                <label>Gioi tinh</label>
                <select
                  name="sltGender"
                  className="form-control"
                  onChange={handleOnchange}
                  value={inputs.sltGender}
                >
                  <option value={0}>Male</option>
                  <option value={1}>Female</option>
                </select>
                <br />
                <label>Language</label>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="rdLang"
                      value="vn"
                      onChange={handleOnchange}
                      checked={inputs.rdLang === 'vn'}
                    />
                    VietName
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="rdLang"
                      value="en"
                      onChange={handleOnchange}
                      checked={inputs.rdLang === 'en'}
                    />
                    English
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value={true}
                      onChange={handleOnchange}
                      name="chkStatus"
                      checked={inputs.chkStatus === true}
                    />
                    Ao thu lạnh lẽo nước trong veo
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value={true}
                      onChange={handleOnchange}
                      name="chkStatus"
                      checked={inputs.chkStatus === true}
                    />
                    Một chiếc thuyền câu bé tẻo teo
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value={true}
                      onChange={handleOnchange}
                      name="chkStatus"
                      checked={inputs.chkStatus === true}
                    />
                    Sóng biếc theo làn hơi gợn tí
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value={true}
                      onChange={handleOnchange}
                      name="chkStatus"
                      checked={inputs.chkStatus === true}
                    />
                    Lá vàng trước gió khẽ đưa vèo
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value={true}
                      onChange={handleOnchange}
                      name="chkStatus"
                      checked={inputs.chkStatus === true}
                    />
                    Tầng mây lơ lững, trời xanh ngắt
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                &nbsp;
                <button type="reset" className="btn btn-danger">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
