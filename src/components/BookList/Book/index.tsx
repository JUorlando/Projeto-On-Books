import { IBooks } from "../../../testeDB";
import iconHeart from "../../../assets/img/iconeHeart.svg";
import { liCategorie } from "../../Categories";
import * as S from "./style";

export function Book({ element }: { element: IBooks }) {
  console.log(element);
  return (
    <S.StyleLi>
      <figure>
        <img src={element.img} alt="" />
      </figure>

      <ul>{element.categories.map((elem) => liCategorie({ elem }))}</ul>

      <p>{element.title}</p>
      <div>
        <button>Exibir</button>
        <button className="ButFavorite">
          <img src={iconHeart} alt="botão de favoritar" />
        </button>
      </div>
    </S.StyleLi>
  );
}
