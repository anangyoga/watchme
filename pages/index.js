import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import axios from "axios";
import { server } from "../config";
import PopularMovies from "../components/PopularMovies";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ movies }) {
  console.log(movies);
  return (
    <>
      <Hero />
      {/* we have to add .results because when its log, the object has results property */}
      <PopularMovies movies={movies.results} />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies },
  };
}
