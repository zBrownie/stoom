import { BrowserRouter, Route, Switch } from "react-router-dom";
import PagamentoPage from "../pages/PagamentoPage";
import HomePage from "../pages/HomePage";
import SaborPage from "../pages/SaborPage";
import TamanhoPage from "../pages/TamanhoPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/montar/1" component={SaborPage} />
        <Route exact path="/montar/2" component={TamanhoPage} />
        <Route exact path="/pagamento" component={PagamentoPage} />
      </Switch>
    </BrowserRouter>
  );
}
