"use client";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, sequi.
        Deleniti iure dolores voluptate molestias architecto harum possimus
        quaerat dolorum tempora. Quasi dolorum soluta sunt earum ipsum ut
        obcaecati magni esse aut quibusdam corporis ea fuga eaque, veniam vel
        accusantium. Omnis dicta iusto, facere magnam, quod illum consectetur
        accusamus laudantium reiciendis non pariatur fugiat corporis dignissimos
        ullam rerum culpa error libero placeat! Porro ut veritatis beatae
        officia maiores quos nemo ducimus possimus mollitia obcaecati cum
        excepturi corporis fugit quis deserunt, natus quam earum. Quod
        repudiandae consequuntur, neque commodi error facere harum dicta
        asperiores, reiciendis fuga assumenda similique libero beatae pariatur!
      </p>

      <button className="bg-sky-400 px-3 py-2 rounded-md" onClick={() => {
        alert("Execucuting code!!!")
        router.push("/");
      }}>
        Click
      </button>
    </section>
  );
}
