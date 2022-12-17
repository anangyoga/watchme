import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ movies }) {
  // this will return the array of the movies from the getStaticProps fn
  console.log(movies);
  return (
    <>
      <Hero />
    </>
  );
}

export async function getStaticProps() {
  const movies = [{ name: "hello" }];

  return {
    props: { movies },
  };
}

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
