import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'OAI-SearchBot',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'OAI-AdsBot',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'anthropic-ai',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'Applebot',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
            {
                userAgent: 'bingbot',
                allow: '/',
                disallow: ['/private/', '/api/private/'],
            },
        ],
        sitemap: 'https://www.sysbreeze.com/sitemap.xml',
        host: 'https://www.sysbreeze.com',
    }
}

