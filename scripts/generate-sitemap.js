import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

// Define your routes and their metadata
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/chennai', changefreq: 'daily', priority: 0.9 },
  { url: '/mumbai', changefreq: 'weekly', priority: 0.8 },
  { url: '/pune', changefreq: 'weekly', priority: 0.8 },
  { url: '/hyderabad', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
  { url: '/careers', changefreq: 'weekly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

// Create sitemap
const stream = new SitemapStream({ hostname: 'https://planckk.com' });
const data = Readable.from(routes).pipe(stream);

// Write sitemap to file
streamToPromise(data).then((sitemap) => 
  createWriteStream('./public/sitemap.xml').write(sitemap.toString())
);