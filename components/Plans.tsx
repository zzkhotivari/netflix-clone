import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Table from "./Table";
import Loader from "./Loader";
import useAuth from "../hooks/useAuth";
import { Product } from "@stripe/firestore-stripe-payments";
import { CheckIcon } from "@heroicons/react/outline";
import { loadCheckout } from "../lib/stripe";

interface IProps {
  products: Product[];
}

function Plans({ products }: IProps) {
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2]);
  const [billingLoading, setBillingLoading] = useState(false);

  const { logOut, user } = useAuth();

  const subscribeToPlan = () => {
    if (!user) return;

    loadCheckout(selectedPlan?.prices[0].id!)
    setBillingLoading(true)
  };

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          onClick={logOut}
          className="text-lg font-medium hover:underline"
        >
          Sign Out
        </button>
      </header>
      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedPlan(product)}
                className={`planBox ${
                  selectedPlan?.id === product.id ? "opacity-100" : "opacity-60"
                }`}
              >
                {product.name}
              </div>
            ))}
          </div>
          <Table products={products} selectedPlan={selectedPlan} />
          <button
            onClick={subscribeToPlan}
            disabled={!selectedPlan || billingLoading}
            className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl
             shadow hover:bg-[#f6121d] md:w-[420px] ${
               billingLoading && "opacity-60"
             }`}
          >
            {billingLoading ? (
              <Loader color="dark:fill-gray-900" />
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Plans;
