import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Enabled Game Development Tool",
    "one_liner": "Create games by simply describing the gameplay and mechanics aloud.",
    "why_now": "The rise of low-code/no-code solutions combined with voice tech spikes interest in game development.",
    "novel_mechanism": "Leveraging contextual understanding of game logic from voice commands to auto-generate game code.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Speech"
    ],
    "edge_use_cases": [
      "Educational games for children",
      "Rapid prototyping for indie developers"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Basic game prototype generation",
        "Voice command interpretative engine",
        "Export to popular game engines"
      ],
      "tools": [
        "Unity",
        "Next.js",
        "Supabase",
        "Stripe"
      ],
      "data_bootstrap": [
        "public dataset of game mechanics",
        "synthetic gameplay scenarios via LLM"
      ],
      "risk": [
        "Limited voice recognition accuracy",
        "Complexity of game logic interpretation"
      ],
      "mitigation": [
        "Incorporate a manual editing feature",
        "Use a hybrid approach with templates and voice commands"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Interactive voice demo showcasing rapid game creation",
        "Before/after comparisons of traditional development vs voice commands"
      ],
      "channels": [
        "ProductHunt",
        "Twitch",
        "X"
      ],
      "pricing": {
        "free": "Limited prototype creation (up to 5 games)",
        "pro": "$19/month for unlimited prototypes and advanced features",
        "business": "$49/month for team collaboration and analytics"
      }
    },
    "moat": [
      "Freemium model attracts early users",
      "Community around user-generated game ideas",
      "Data on voice commands for better refinement"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "This idea combines game development's fun element with an innovative use of voice technology, differentiating from standard voice-to-code tools."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}