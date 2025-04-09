// Selfies.tsx
"use client"

import { useState, useEffect } from "react";
import { createClient } from "next-sanity";
import styles from "./Selfies.module.css";

// Define types if needed
type Asset = {
  _id: string;
  url: string;
};

type Image = {
  asset: Asset;
};

type Selfie = {
  _id: string;
  title?: string;
  publishedAt?: string;
  image?: Image;
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const client = createClient({
  projectId: projectId,
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
});

const SELFIES_QUERY = `*[_type == "selfie"] | order(publishedAt desc) {
  _id,
  title,
  publishedAt,
  image {
    asset-> {
      _id,
      url
    }
  }
}`;

interface SelfiesProps {
  onCloseSidesheet: () => void;
}

export default function Selfies({ onCloseSidesheet }: SelfiesProps) {
  const [selfies, setSelfies] = useState<Selfie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await client.fetch(SELFIES_QUERY);
        setSelfies(result);
      } catch (err) {
        console.error("Error fetching selfies:", err);
        setError("Failed to load selfies");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading selfies...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!selfies.length) return <div>No selfies found</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>

      <button
          onClick={onCloseSidesheet} 
      > 
      Close
      </button>
      Due to some backdoor deals I'm not at liberty to discuss publicly (or privately), I get an entire Instagram story all to myself! I try to post a picture of myself smiling on there every day. Some days there are things going on that cause me to not do it, such as the breaking out of a devastating war or when I get struck by the cruel tormentor of forgetfulness. Right in the head it strikes me. Leaves me with a black eye and all, the whole thing.
        <ul className={styles.list}>
        {selfies.map((selfie) => (
          <li key={selfie._id} style={{ marginBottom: "20px" }}>
            {selfie.publishedAt && (
              <p style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
                {new Date(selfie.publishedAt).toLocaleDateString()}
              </p>
            )}
            {selfie.image && selfie.image.asset && (
              <img
                src={selfie.image.asset.url}
                alt={selfie.title || "Selfie"}
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            )}
          </li>
        ))}
        </ul>
        </div>
    </div>
  );
}