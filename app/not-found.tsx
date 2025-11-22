import { redirect } from "next/navigation";

// 404 page just redirects to home
export default function NotFound() {

  redirect("/");

}
