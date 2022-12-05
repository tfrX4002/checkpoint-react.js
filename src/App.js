import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="form group">
    <h1>AS ROSIER ACADEMY</h1>
         <form>
      <div class="form-group">
           <div class="form-row">
           <label for="">Name :</label>
          <div class="col-md-9">
              <input id="nom" type="text" class="form-control" name="" placeholder="Entrer votre nom"></input>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
        <label for="">Age :</label>
          <div class="col-md-9">
          <input id="Age" type="text" class="form-control" name="" placeholder="Enter your age" ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
           <div class="form-row">
           <label for="">Position :</label>
          <div class="col-md-9">
          <input id="Position" type="text" class="form-control" name="" placeholder="Enter your Position" ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
           <div class="form-row">
           <label for="">Nationality :</label>
          <div class="col-md-9">
          <input id="Nationality" type="text" class="form-control" name="" placeholder="Enter your nationality" ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
           <div class="form-row">
           <label for="">Father name:</label>
          <div class="col-md-9">
          <input id="Fn" type="text" class="form-control" name="" placeholder="Enter your father name" ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
           <div class="form-row">
           <label for="">Mother name:</label>
          <div class="col-md-9">
          <input id="Mn" type="text" class="form-control" name="" placeholder= "Enter your mother name"></input>
          </div>
        </div>
      </div>
      <div class="form-group">
           <div class="form-row">
           <label for="">Father job:</label>
          <div class="col-md-9">
          <input id="Fj" type="text" class="form-control" name="" placeholder= "Enter your father job"></input>
          </div>
        </div>
      </div>
      <div class="form-group">
           <div class="form-row">
           <label for="">Mother job:</label>
          <div class="col-md-9">
          <input id="Mj" type="text" class="form-control" name="" placeholder= "Enter your mother job"></input>
          </div>
        </div>
      </div>
      <div class="form-group">
           <div class="form-row">
           <label for="">Contact :</label>
          <div class="col-md-9">
          <input id="contact" type="text" class="form-control" name="" placeholder= "Enter your contact"></input>
          </div>
        </div>
      </div>
      <div class="form-group">
           <div class="form-row">
           <label for="">Email :</label>
          <div class="col-md-9">
          <input type="text" id="mail"  class="form-control" name="" placeholder= "Enter your email"></input>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-1 offset-md-11">
                 <button class="btn btn-warning">Envoyer</button>
            </div>
        </div>
      </div>
    </form>
    </div>

  );

}



export default App;
