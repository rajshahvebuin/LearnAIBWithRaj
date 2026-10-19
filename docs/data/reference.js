window.AIB_DATA = window.AIB_DATA || {};

/* ------------------------------------------------------------------
   AIB-C01 reference data: exam logistics, official resources,
   strategic AWS service cheat sheet, glossary.
   Facts verified 2026-10-19 against aws.amazon.com / docs.aws.amazon.com
   unless flagged "unverified" in notes.
   ------------------------------------------------------------------ */

window.AIB_DATA.examInfo = {
  "code": "AIB-C01",
  "name": "AWS Certified AI Business Strategist",
  "level": "Business (new AWS certification category; priced at the Foundational tier - 100 USD standard)",
  "status": "Beta. Registration opened 1 Sep 2026; beta exam delivery began 29 Sep 2026. GA date not announced. Earn it by 15 Feb 2027 to receive an additional Early Adopter digital badge.",
  "questions": "Beta form: 85 questions (multiple choice: 1 correct of 4; multiple response: 2+ correct of 5+). Scored vs unscored split is not published for the beta.",
  "duration": "130 minutes",
  "durationNote": "The exam guide states 130 minutes. The official beta exam page lists 170 minutes for the 85-question beta form. Expect 130 minutes once the exam reaches GA; budget 170 for the beta.",
  "scoring": "Pass/fail. Scaled score 100-1,000; compensatory model (you only need to pass the exam overall, not each domain). Unanswered questions are scored as incorrect; no penalty for guessing.",
  "passingScore": 700,
  "price": "50 USD during beta; 100 USD standard (same as Foundational-level exams). Local-currency equivalents on the AWS exam pricing page.",
  "languages": "English and Japanese (beta). AWS says additional languages are planned for GA.",
  "delivery": "Pearson VUE testing center or online proctored exam (scheduled via the AWS Certification account / CertMetrics).",
  "validity": "3 years. Renew by passing the latest AIB exam; no Skill Builder 'maintenance' option is listed for this certification.",
  "retake": "Beta: can be taken only once; to retake you must wait until the standard (GA) version is available. Results (including beta) are reported within 5 business days per AWS Before Testing policies.",
  "officialUrl": "https://aws.amazon.com/certification/certified-ai-business-strategist/",
  "domains": [
    {"number": 1, "title": "AI Fundamentals and Literacy", "weight": 24},
    {"number": 2, "title": "AI Strategy and Business Value Creation", "weight": 28},
    {"number": 3, "title": "AI Governance and Responsible AI Leadership", "weight": 24},
    {"number": 4, "title": "Business Readiness, Leadership, and AI Transformation", "weight": 24}
  ],
  "audience": "Product and program managers, sales and business-development professionals, line-of-business leaders, consultants, business analysts and marketers. About 6 months working with or alongside AI initiatives recommended; no coding, AWS hands-on experience or prior certification required.",
  "notes": [
    "CONFIRMED (official page): 85 questions, 170-minute beta sitting, 50 USD beta / 100 USD standard, English + Japanese, Pearson VUE test center or online proctored, Early Adopter badge deadline 15 Feb 2027.",
    "CONFIRMED (exam guide): 130-minute duration, scaled 100-1,000 with 700 pass, compensatory scoring, question types, domain weights 24/28/24/24.",
    "CONFIRMED (AWS policies): 3-year validity with renewal by latest exam; beta may be taken once; results within 5 business days.",
    "UNVERIFIED: the number of unscored (pretest) questions on the beta form - AWS has not published it for AIB-C01.",
    "UNVERIFIED: the standard 14-day waiting period between retakes was not found on the AWS policy pages fetched (commonly reported by third parties).",
    "UNVERIFIED: GA release date and the GA question count / duration (expect 130 minutes per the exam guide).",
    "Official practice resources during beta: the AWS Certification Official Practice Question Set is available; the Official Practice Exam (full-length pretest) is NOT offered during beta. A 'Meeting Simulator' practice tool is also referenced on the exam page.",
    "The exam page states the exam 'does not assess AWS services knowledge' beyond a strategic level; the exam guide lists Bedrock, SageMaker AI, Amazon Quick, AWS CAF, shared responsibility model, Responsible AI Lens, pricing tools and Marketplace as in scope at a business level."
  ],
  "sources": [
    {"title": "AWS Certified AI Business Strategist - official exam page", "url": "https://aws.amazon.com/certification/certified-ai-business-strategist/"},
    {"title": "AWS Certified AI Business Strategist (AIB-C01) Exam Guide (HTML)", "url": "https://docs.aws.amazon.com/aws-certification/latest/ai-business-strategist-01/ai-business-strategist-01.html"},
    {"title": "Introducing AWS Certified AI Business Strategist - AWS Training and Certification Blog (1 Sep 2026)", "url": "https://aws.amazon.com/blogs/training-and-certification/introducing-aws-certified-ai-business-strategist-built-for-the-people-who-scale-ai/"},
    {"title": "AWS Certification policies - Before testing (pricing, beta rules, results timing)", "url": "https://aws.amazon.com/certification/policies/before-testing/"},
    {"title": "AWS Certification - Recertification (3-year validity, renewal options)", "url": "https://aws.amazon.com/certification/recertification/"},
    {"title": "AWS Skill Builder - AIB-C01 exam prep plan", "url": "https://skillbuilder.aws/category/exam-prep/ai-business-strategist-business-AIB-C01"}
  ]
};

window.AIB_DATA.resources = [
  {"category": "Official exam", "title": "AIB-C01 official exam page", "url": "https://aws.amazon.com/certification/certified-ai-business-strategist/", "why": "Registration, price, languages, beta status and Early Adopter badge details."},
  {"category": "Official exam", "title": "AIB-C01 Exam Guide (docs.aws.amazon.com)", "url": "https://docs.aws.amazon.com/aws-certification/latest/ai-business-strategist-01/ai-business-strategist-01.html", "why": "The authoritative domain/task/skill outline, scoring rules and in-scope services - every lesson maps to it."},
  {"category": "Official exam", "title": "Launch blog: Introducing AWS Certified AI Business Strategist", "url": "https://aws.amazon.com/blogs/training-and-certification/introducing-aws-certified-ai-business-strategist-built-for-the-people-who-scale-ai/", "why": "AWS's own framing of who the exam is for and the recommended study path."},
  {"category": "Official exam", "title": "AWS Certification policies - Before testing", "url": "https://aws.amazon.com/certification/policies/before-testing/", "why": "Exam pricing table, beta exam rules, rescheduling and results timing."},
  {"category": "Official exam", "title": "AWS Certification - Recertification", "url": "https://aws.amazon.com/certification/recertification/", "why": "Confirms 3-year validity and how to renew the AI Business Strategist credential."},
  {"category": "Skill Builder", "title": "AWS Skill Builder exam prep plan - AI Business Strategist (AIB-C01)", "url": "https://skillbuilder.aws/category/exam-prep/ai-business-strategist-business-AIB-C01", "why": "Official prep plan including the Practice Question Set and Walk-through Questions."},
  {"category": "Skill Builder", "title": "AWS AI Business Strategist learning plan (13 modules)", "url": "https://skillbuilder.aws/learning-plan/TSP9R1XQ6P/aws-ai-business-strategist-learning-plan/BDE88AHVZN", "why": "Digital courses mapped directly to the four exam domains."},
  {"category": "Skill Builder", "title": "AWS Skill Builder home", "url": "https://skillbuilder.aws/", "why": "Entry point for the Official Practice Question Set (free tier) and subscription content."},
  {"category": "Responsible AI", "title": "Responsible AI - Building AI Responsibly - AWS", "url": "https://aws.amazon.com/ai/responsible-ai/", "why": "AWS's eight core dimensions of responsible AI, the vocabulary Domain 3 uses."},
  {"category": "Responsible AI", "title": "Responsible AI Tools and Resources (AI Service Cards)", "url": "https://aws.amazon.com/ai/responsible-ai/resources/", "why": "Where AI Service Cards live - intended use, limitations and design choices per AWS model/service."},
  {"category": "Responsible AI", "title": "AWS Well-Architected Framework - Responsible AI Lens", "url": "https://docs.aws.amazon.com/wellarchitected/latest/responsible-ai-lens/responsible-ai-lens.html", "why": "Ten responsible-AI dimensions and eight lifecycle focus areas; explicitly in scope."},
  {"category": "Responsible AI", "title": "Announcing the AWS Well-Architected Responsible AI Lens (blog)", "url": "https://aws.amazon.com/blogs/machine-learning/announcing-the-aws-well-architected-responsible-ai-lens", "why": "Plain-English overview of the lens and its design principles."},
  {"category": "Responsible AI", "title": "Amazon Bedrock Guardrails", "url": "https://aws.amazon.com/bedrock/guardrails/", "why": "Content filters, denied topics, PII redaction, contextual grounding and Automated Reasoning checks."},
  {"category": "Frameworks", "title": "AWS Cloud Adoption Framework (AWS CAF)", "url": "https://aws.amazon.com/cloud-adoption-framework/", "why": "Six perspectives, four transformation domains and the Envision-Align-Launch-Scale phases."},
  {"category": "Frameworks", "title": "An Overview of the AWS Cloud Adoption Framework (whitepaper)", "url": "https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/welcome.html", "why": "The CAF whitepaper: foundational capabilities grouped by perspective."},
  {"category": "Frameworks", "title": "AWS CAF for Artificial Intelligence, Machine Learning, and Generative AI (CAF-AI)", "url": "https://docs.aws.amazon.com/whitepapers/latest/aws-caf-for-ai/aws-caf-for-ai.html", "why": "Extends CAF to AI: AI journey stages, value chain and AI-specific foundational capabilities."},
  {"category": "Frameworks", "title": "AWS Shared Responsibility Model", "url": "https://aws.amazon.com/compliance/shared-responsibility-model/", "why": "Security OF the cloud (AWS) vs security IN the cloud (customer) - applied to AI data and models."},
  {"category": "AWS services", "title": "Amazon Bedrock", "url": "https://aws.amazon.com/bedrock/", "why": "Managed access to many foundation models; the default GenAI platform in exam scenarios."},
  {"category": "AWS services", "title": "Amazon Bedrock pricing", "url": "https://aws.amazon.com/bedrock/pricing/", "why": "On-demand tokens, batch, Provisioned Throughput, customization, Knowledge Bases and Guardrails pricing."},
  {"category": "AWS services", "title": "Amazon Bedrock Knowledge Bases", "url": "https://aws.amazon.com/bedrock/knowledge-bases/", "why": "Managed retrieval-augmented generation (RAG) over company data."},
  {"category": "AWS services", "title": "Amazon Bedrock AgentCore", "url": "https://aws.amazon.com/bedrock/agentcore/", "why": "Platform for production AI agents; successor to Bedrock Agents for new customers."},
  {"category": "AWS services", "title": "Customize applications and agents with Amazon Bedrock", "url": "https://aws.amazon.com/bedrock/customize/", "why": "Fine-tuning, reinforcement fine-tuning, distillation and RAG options compared."},
  {"category": "AWS services", "title": "Amazon Bedrock - model customization (user guide)", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html", "why": "Official definitions of fine-tuning, continued pre-training and distillation."},
  {"category": "AWS services", "title": "Amazon SageMaker AI", "url": "https://aws.amazon.com/sagemaker/ai/", "why": "Build, train, deploy and govern custom ML and foundation models; JumpStart model hub; Clarify for bias."},
  {"category": "AWS services", "title": "Amazon SageMaker AI pricing", "url": "https://aws.amazon.com/sagemaker-ai/pricing/", "why": "Instance-hour (per component) pricing, serverless inference, SageMaker Savings Plans and free tier."},
  {"category": "AWS services", "title": "Amazon Quick (Quick Suite) - AI assistant for work", "url": "https://aws.amazon.com/quicksuite/", "why": "Agentic AI workspace: Quick Sight BI, Quick Research, Quick Flows, Quick Automate, Quick Index."},
  {"category": "AWS services", "title": "Amazon Quick pricing", "url": "https://aws.amazon.com/quick/pricing/", "why": "Seat-based (per-user) tiers plus per-account infrastructure fee and agent hours - the seat-pricing example."},
  {"category": "AWS services", "title": "Reimagine the way you work with AI agents in Amazon Quick Suite (AWS News Blog, Oct 2025)", "url": "https://aws.amazon.com/blogs/aws/reimagine-the-way-you-work-with-ai-agents-in-amazon-quick-suite/", "why": "Launch post explaining that QuickSight became Quick Sight inside Quick Suite."},
  {"category": "Pricing & cost", "title": "AWS Pricing Calculator", "url": "https://aws.amazon.com/aws-cost-management/aws-pricing-calculator/", "why": "Free forward-looking cost estimates for business cases; models discounts and commitments."},
  {"category": "Pricing & cost", "title": "AWS Pricing Calculator (tool)", "url": "https://calculator.aws/", "why": "The public estimator itself - no AWS account needed."},
  {"category": "Pricing & cost", "title": "AWS Cost Explorer", "url": "https://aws.amazon.com/aws-cost-management/aws-cost-explorer/", "why": "Backward-looking: visualize and forecast actual spend to track AI ROI."},
  {"category": "Pricing & cost", "title": "Savings Plans", "url": "https://aws.amazon.com/savingsplans/", "why": "Commitment-based discounts (up to 72%) for steady compute/ML usage."},
  {"category": "Pricing & cost", "title": "AWS Marketplace", "url": "https://aws.amazon.com/marketplace", "why": "Buy or partner: third-party AI models, agents and SaaS with private offers and consolidated AWS billing."},
  {"category": "Standards & regulation", "title": "ISO/IEC 42001:2023 - AI management system", "url": "https://www.iso.org/standard/42001", "why": "First certifiable AI management-system standard (governance, risk, human oversight, improvement)."},
  {"category": "Standards & regulation", "title": "ISO/IEC 23053:2022 - Framework for AI systems using ML", "url": "https://www.iso.org/standard/74438.html", "why": "Shared vocabulary and conceptual framework for describing ML-based AI systems."},
  {"category": "Standards & regulation", "title": "NIST AI Risk Management Framework", "url": "https://www.nist.gov/itl/ai-risk-management-framework", "why": "Voluntary US framework (Govern, Map, Measure, Manage) plus the Generative AI Profile (NIST AI 600-1)."},
  {"category": "Standards & regulation", "title": "EU AI Act - European Commission", "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai", "why": "Official explanation of the four risk tiers and application timeline."},
  {"category": "Standards & regulation", "title": "OECD AI Principles", "url": "https://oecd.ai/en/ai-principles", "why": "Five values-based principles (2019, updated 2024) that many national frameworks borrow from."}
];

window.AIB_DATA.services = [
  {
    "name": "Amazon Bedrock",
    "what": "A fully managed service that gives access to many foundation models (FMs) from Amazon and leading AI companies through one API, plus tooling to build generative AI applications and agents. AWS states customer data is not used to train the underlying models.",
    "businessUse": "Chat assistants, document summarization and Q&A, content generation, search, and agentic workflows - without hiring a team to host or train models.",
    "pricing": "Consumption-based: on-demand per input/output token (service tiers such as Standard, Flex, Priority); batch inference at a discount; Provisioned Throughput billed hourly per model unit with no-commitment, 1-month or 6-month terms (reserved capacity for predictable, high-volume workloads). Add-on charges for customization, Knowledge Bases and Guardrails.",
    "chooseWhen": "You want to buy GenAI capability fast with model choice and no infrastructure, you need the flexibility to swap models, and workloads are variable (on-demand) or steady and large (Provisioned Throughput).",
    "examAngle": "The default 'buy a managed platform' answer. Expect questions on matching pricing tier to usage pattern (on-demand for pilots and spiky demand; batch for non-urgent bulk jobs; Provisioned Throughput for predictable high throughput), and on Guardrails and Knowledge Bases as risk/accuracy controls rather than as technical features.",
    "sources": [
      {"title": "Amazon Bedrock", "url": "https://aws.amazon.com/bedrock/"},
      {"title": "Amazon Bedrock pricing", "url": "https://aws.amazon.com/bedrock/pricing/"}
    ]
  },
  {
    "name": "Amazon Bedrock Guardrails",
    "what": "Configurable safeguards applied to prompts and model responses: content filters (harmful text/images, prompt attacks), denied topics, word filters, sensitive-information (PII) masking, contextual grounding checks and Automated Reasoning checks. Works with Bedrock-hosted and third-party or self-hosted models.",
    "businessUse": "Keep a customer-facing assistant on-topic, block harmful or off-brand output, redact personal data, and reduce hallucinations in regulated industries.",
    "pricing": "Consumption-based per 1,000 text units (up to 1,000 characters each) for each policy used; some filters are free; images per image; contextual grounding and Automated Reasoning checks have their own rates.",
    "chooseWhen": "A GenAI use case touches customers, regulated content or personal data and leadership needs a documented control for safety, veracity and privacy.",
    "examAngle": "Guardrails = the mitigation for harmful content, PII leakage and hallucination risk. Distinguish from Knowledge Bases (accuracy via grounding on company data) and from human-in-the-loop review (process control).",
    "sources": [
      {"title": "Amazon Bedrock Guardrails", "url": "https://aws.amazon.com/bedrock/guardrails/"},
      {"title": "Amazon Bedrock pricing", "url": "https://aws.amazon.com/bedrock/pricing/"}
    ]
  },
  {
    "name": "Amazon Bedrock Knowledge Bases",
    "what": "A managed retrieval-augmented generation (RAG) capability that connects foundation models and agents to a company's own data (for example S3, SharePoint, Confluence, Google Drive), handling ingestion, embedding, storage and retrieval; teams can also bring their own vector store.",
    "businessUse": "Grounded answers from policies, manuals, contracts and tickets; internal knowledge assistants; reducing hallucinations without retraining a model.",
    "pricing": "Consumption-based: index storage per volume per month plus per-retrieval API calls (parsing and embeddings included in the managed option); self-managed options bill per query for SQL generation and reranking.",
    "chooseWhen": "Answers must reflect current proprietary information and cite sources, and the data changes too often (or is too sensitive) to bake into a fine-tuned model.",
    "examAngle": "RAG via Knowledge Bases is usually the lowest-cost, fastest route to proprietary-data accuracy; fine-tuning is for changing model behavior or style, not for injecting fresh facts.",
    "sources": [
      {"title": "Amazon Bedrock Knowledge Bases", "url": "https://aws.amazon.com/bedrock/knowledge-bases/"},
      {"title": "Amazon Bedrock pricing", "url": "https://aws.amazon.com/bedrock/pricing/"}
    ]
  },
  {
    "name": "Amazon Bedrock AgentCore (and Bedrock Agents)",
    "what": "AgentCore is AWS's platform for building, connecting and operating production AI agents with any framework or model, including identity/access for tool calls, memory, and tracing/evaluation. The earlier Amazon Bedrock Agents feature is no longer available to new customers, and AWS points to AgentCore instead.",
    "businessUse": "Agents that complete multistep tasks - booking, claims triage, order changes, research - by reasoning over data and calling business systems.",
    "pricing": "Consumption-based (separate AgentCore pricing page; model inference billed through Bedrock).",
    "chooseWhen": "The use case needs an AI system to take actions across systems, not just answer questions, and you want enterprise controls (identity, observability) around it.",
    "examAngle": "Know the vocabulary: an agent orchestrates models, tools and data to act; AgentCore is the managed way to run agents in production. Expect governance angles (human-in-the-loop, controllability) more than architecture detail.",
    "sources": [
      {"title": "Amazon Bedrock AgentCore", "url": "https://aws.amazon.com/bedrock/agentcore/"},
      {"title": "Amazon Bedrock Agents", "url": "https://aws.amazon.com/bedrock/agents/"}
    ]
  },
  {
    "name": "Amazon Bedrock model customization",
    "what": "Ways to adapt a foundation model to your business: supervised fine-tuning (labeled examples), reinforcement fine-tuning (feedback on outputs), continued pre-training (unlabeled domain text), model distillation (train a smaller, cheaper student model from a larger teacher), and custom model import.",
    "businessUse": "Industry-specific tone and terminology, consistent output formats, cheaper/faster models for high-volume tasks.",
    "pricing": "Training billed by tokens/images/hours processed, monthly storage for the custom model, and inference for custom models via on-demand deployment or Provisioned Throughput; distillation bills teacher inference plus student fine-tuning.",
    "chooseWhen": "Prompt engineering and RAG have been tried and the model still needs new behavior or domain style, and you have quality data plus budget for ongoing storage/inference.",
    "examAngle": "Adaptation ladder: prompt engineering (cheapest, fastest) -> RAG / Knowledge Bases (fresh facts) -> fine-tuning / distillation (behavior and cost) -> training from scratch (rarely justified). Questions test picking the lowest-effort rung that meets the requirement.",
    "sources": [
      {"title": "Customize applications and agents with Amazon Bedrock", "url": "https://aws.amazon.com/bedrock/customize/"},
      {"title": "Customize your model - Amazon Bedrock user guide", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html"},
      {"title": "Customize a model with distillation - Amazon Bedrock", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-distillation.html"}
    ]
  },
  {
    "name": "Amazon SageMaker AI",
    "what": "AWS's managed machine-learning platform for building, training, deploying and governing custom ML models and foundation models, from serverless workloads to large GPU clusters. Includes JumpStart (1,000+ pre-optimized models) and Clarify (bias detection and explainability).",
    "businessUse": "Proprietary predictive models (churn, demand, fraud, pricing) where the model itself is a differentiator, or where regulation requires full control over training data and model behavior.",
    "pricing": "Instance-based: pay per instance-hour for each component (notebooks, training, hosting), plus per-request/per-millisecond serverless inference; SageMaker Savings Plans discount steady usage; a two-month free tier exists.",
    "chooseWhen": "Off-the-shelf or Bedrock models cannot meet the requirement, you have data science talent and labeled data, and the business value justifies build cost and MLOps overhead.",
    "examAngle": "The 'build / custom ML' option versus Bedrock's 'buy managed GenAI'. Distinguish managed (pre-built models, JumpStart) from custom; and note Clarify as the responsible-AI tool for bias and explainability.",
    "sources": [
      {"title": "Amazon SageMaker AI", "url": "https://aws.amazon.com/sagemaker/ai/"},
      {"title": "Amazon SageMaker AI pricing", "url": "https://aws.amazon.com/sagemaker-ai/pricing/"}
    ]
  },
  {
    "name": "Amazon Quick (Amazon Quick Suite)",
    "what": "An agentic AI workspace for business users that answers work questions and turns insights into actions. It bundles Quick Sight (the renamed Amazon QuickSight BI service), Quick Research, Quick Flows (natural-language task automation), Quick Automate (multistep cross-department processes with human review) and Quick Index (a knowledge repository over company data). Launched October 2025; existing QuickSight customers were upgraded.",
    "businessUse": "Self-service dashboards and natural-language BI, research reports with citations, automating routine workflows, and a single AI assistant connected to tools such as Slack and Salesforce.",
    "pricing": "Seat-based (per user per month): individual Free/Plus/Max tiers and organization Professional (~20 USD) and Enterprise (~40 USD) tiers, the latter two plus a per-account monthly infrastructure fee; agent hours included with overage on Enterprise; usage-based add-ons for storage/index.",
    "chooseWhen": "Business teams need BI and an AI assistant quickly with no development, and spend should be predictable per user rather than per token.",
    "examAngle": "The in-scope example of seat-based pricing and of 'AI-powered business assistants'. Expect scenarios contrasting per-seat (Quick) with per-token (Bedrock) and per-instance (SageMaker) pricing when building a business case.",
    "sources": [
      {"title": "Amazon Quick - AI assistant for work", "url": "https://aws.amazon.com/quicksuite/"},
      {"title": "Amazon Quick pricing", "url": "https://aws.amazon.com/quick/pricing/"},
      {"title": "Reimagine the way you work with AI agents in Amazon Quick Suite (AWS News Blog)", "url": "https://aws.amazon.com/blogs/aws/reimagine-the-way-you-work-with-ai-agents-in-amazon-quick-suite/"}
    ]
  },
  {
    "name": "AWS Cloud Adoption Framework (AWS CAF) and CAF for AI",
    "what": "AWS's guidance for planning and executing cloud and AI transformation. CAF groups capabilities into six perspectives - Business, People, Governance (business-focused) and Platform, Security, Operations (technical) - across four transformation domains (Technology, Process, Organization, Product) and four phases (Envision, Align, Launch, Scale). The CAF for AI/ML/GenAI whitepaper extends this with AI-specific capabilities and an AI maturity journey.",
    "businessUse": "Readiness assessments, stakeholder alignment, prioritizing use cases, and building a staged roadmap from pilot to enterprise scale.",
    "pricing": "Free guidance (whitepapers, web pages).",
    "chooseWhen": "You need a structured way to assess organizational readiness, identify capability gaps (people, process, governance, platform) and sequence an AI transformation.",
    "examAngle": "Map scenario symptoms to perspectives (for example, unclear ownership = Governance; skills gap = People; no business case = Business). Know Envision-Align-Launch-Scale as the phase model for moving from pilot to scale.",
    "sources": [
      {"title": "AWS Cloud Adoption Framework", "url": "https://aws.amazon.com/cloud-adoption-framework/"},
      {"title": "An Overview of the AWS Cloud Adoption Framework (whitepaper)", "url": "https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/welcome.html"},
      {"title": "AWS CAF for AI, ML and Generative AI (whitepaper)", "url": "https://docs.aws.amazon.com/whitepapers/latest/aws-caf-for-ai/aws-caf-for-ai.html"}
    ]
  },
  {
    "name": "AWS Shared Responsibility Model (for AI workloads)",
    "what": "AWS is responsible for security OF the cloud (facilities, hardware, managed service infrastructure); the customer is responsible for security IN the cloud (their data, access controls, configuration, and how AI outputs are used). The split shifts toward AWS for more managed services, but data governance and responsible use always stay with the customer.",
    "businessUse": "Clarifying accountability with legal, compliance and procurement; answering 'who is responsible if the model leaks data or produces biased output'.",
    "pricing": "Free concept / documentation.",
    "chooseWhen": "Any governance, compliance or risk discussion about running AI on AWS.",
    "examAngle": "Trap: assuming AWS is responsible for your training data quality, prompt content, access permissions or output review. Those are customer responsibilities even on fully managed services like Bedrock.",
    "sources": [
      {"title": "Shared Responsibility Model - AWS", "url": "https://aws.amazon.com/compliance/shared-responsibility-model/"}
    ]
  },
  {
    "name": "AWS Pricing Calculator",
    "what": "A free tool that estimates the cost of new or changed AWS workloads before you commit, including the effect of discounts and purchase commitments; available publicly at calculator.aws and inside the Billing and Cost Management console (where it can import historical usage).",
    "businessUse": "Building the cost side of an AI business case or TCO comparison; modeling pilot vs scaled usage.",
    "pricing": "Free.",
    "chooseWhen": "You are planning or forecasting spend that has not happened yet.",
    "examAngle": "Pricing Calculator = forward-looking estimate (planning). Cost Explorer = backward-looking actuals (tracking). Questions often hinge on this distinction.",
    "sources": [
      {"title": "AWS Pricing Calculator - AWS", "url": "https://aws.amazon.com/aws-cost-management/aws-pricing-calculator/"},
      {"title": "AWS Pricing Calculator (tool)", "url": "https://calculator.aws/"}
    ]
  },
  {
    "name": "AWS Cost Explorer",
    "what": "A console tool to visualize, understand and manage actual AWS costs and usage over time, with filtering, grouping, forecasts, natural-language questions via Amazon Q Developer, and an API.",
    "businessUse": "Tracking AI spend against budget, attributing costs to teams or use cases (via tags), proving ROI after launch and spotting runaway inference costs.",
    "pricing": "Console use is included; programmatic API access is charged separately (see Cost Explorer pricing page).",
    "chooseWhen": "You need to measure and explain what has already been spent, or forecast from real usage trends.",
    "examAngle": "The 'measure business value / monitor cost' tool for Domain 2 metrics; pair with tagging and baselines. Not for pre-launch estimates.",
    "sources": [
      {"title": "AWS Cost Explorer", "url": "https://aws.amazon.com/aws-cost-management/aws-cost-explorer/"}
    ]
  },
  {
    "name": "AWS Marketplace",
    "what": "A digital catalog where customers find, try, buy and deploy third-party software, data, and AI offerings - including AI agents and tools, generative AI models and ML solutions - with private offers for custom pricing and billing through the AWS account.",
    "businessUse": "Accelerating 'buy' or 'partner' options in a build-buy-partner decision; simplifying procurement; using committed AWS spend on third-party solutions.",
    "pricing": "Varies by product (free trials, subscriptions, usage-based, private offers); charges appear on the AWS bill.",
    "chooseWhen": "A capability is not a differentiator, a vendor already solves it, time-to-value matters more than customization, or procurement wants one bill and standardized terms.",
    "examAngle": "Explicitly in scope 'for evaluating build-buy-partner decisions'. If the scenario stresses speed, non-core capability or limited talent, Marketplace (buy/partner) usually beats custom build.",
    "sources": [
      {"title": "AWS Marketplace: Homepage", "url": "https://aws.amazon.com/marketplace"}
    ]
  },
  {
    "name": "Savings Plans (and commitment pricing)",
    "what": "A flexible pricing model that lowers compute and ML bills (up to 72% vs On-Demand) in exchange for committing to a consistent hourly spend over a 1- or 3-year term; discounts apply automatically. SageMaker has its own Savings Plans; Bedrock's equivalent commitment option is Provisioned Throughput (1- or 6-month model units).",
    "businessUse": "Reducing run-rate cost once an AI workload is proven and predictable, improving the ROI case for scaling.",
    "pricing": "Commitment-based discount on top of pay-as-you-go.",
    "chooseWhen": "Usage is steady and well understood (post-pilot); avoid commitments during experimentation when demand is uncertain.",
    "examAngle": "Sequence matters: pilot on on-demand, then commit (Savings Plans / Provisioned Throughput) when usage stabilizes. Committing too early is a classic distractor.",
    "sources": [
      {"title": "Savings Plans - AWS", "url": "https://aws.amazon.com/savingsplans/"},
      {"title": "Amazon SageMaker AI pricing (SageMaker Savings Plans)", "url": "https://aws.amazon.com/sagemaker-ai/pricing/"},
      {"title": "Amazon Bedrock pricing (Provisioned Throughput)", "url": "https://aws.amazon.com/bedrock/pricing/"}
    ]
  }
];

window.AIB_DATA.glossary = [
  {"term": "Artificial intelligence (AI)", "def": "Software that performs tasks normally needing human intelligence, such as understanding language, recognizing images or making predictions.", "domain": 1},
  {"term": "Machine learning (ML)", "def": "A branch of AI in which systems learn patterns from data rather than following hand-written rules.", "domain": 1},
  {"term": "Deep learning", "def": "Machine learning using multi-layered neural networks, the technique behind modern vision, speech and language models.", "domain": 1},
  {"term": "Generative AI (GenAI)", "def": "AI that creates new content - text, images, code, audio - rather than only classifying or predicting.", "domain": 1},
  {"term": "Foundation model (FM)", "def": "A very large model pre-trained on broad data that can be adapted to many tasks instead of being built for one.", "domain": 1},
  {"term": "Large language model (LLM)", "def": "A foundation model trained on text that understands and generates human language.", "domain": 1},
  {"term": "Training", "def": "The process of teaching a model by showing it data so it learns patterns; expensive and done rarely.", "domain": 1},
  {"term": "Inference", "def": "Using a trained model to produce an answer or prediction for a new input; the ongoing, per-use cost of AI.", "domain": 1},
  {"term": "Token", "def": "A chunk of text (roughly a word or part of a word) that language models read and produce; many GenAI services bill per token.", "domain": 1},
  {"term": "Context window", "def": "The maximum amount of text (in tokens) a model can consider at once, including the prompt and its reply.", "domain": 1},
  {"term": "Prompt engineering", "def": "Crafting instructions, examples and context so a model produces better output without changing the model itself.", "domain": 1},
  {"term": "Retrieval-augmented generation (RAG)", "def": "Fetching relevant company documents at question time and giving them to the model so answers are grounded in current, proprietary facts.", "domain": 1},
  {"term": "Fine-tuning", "def": "Further training an existing model on your own examples to change its behavior, style or domain knowledge.", "domain": 1},
  {"term": "Model distillation", "def": "Training a smaller, cheaper model to imitate a larger one so you keep most of the quality at lower cost and latency.", "domain": 1},
  {"term": "Hallucination", "def": "A confident but false or fabricated statement produced by a generative model.", "domain": 1},
  {"term": "Embedding", "def": "A numeric representation of text or images that captures meaning, enabling semantic search and RAG.", "domain": 1},
  {"term": "Agent", "def": "An AI system that plans and takes actions - calling tools, APIs and data sources - to complete a multistep goal rather than just answering.", "domain": 1},
  {"term": "Orchestration", "def": "Coordinating multiple models, tools, data sources and steps into one end-to-end workflow.", "domain": 1},
  {"term": "Structured data", "def": "Data organized in rows and columns (databases, spreadsheets) that is easy to query.", "domain": 1},
  {"term": "Unstructured data", "def": "Data without a fixed format - documents, emails, images, audio - that GenAI is especially good at using.", "domain": 1},
  {"term": "Natural language processing (NLP)", "def": "AI techniques for understanding and generating human language, such as sentiment analysis or document extraction.", "domain": 1},
  {"term": "Computer vision", "def": "AI that interprets images and video, for example defect detection or document scanning.", "domain": 1},
  {"term": "Supervised vs unsupervised learning", "def": "Supervised learning learns from labeled examples; unsupervised learning finds patterns in unlabeled data.", "domain": 1},
  {"term": "Multimodal", "def": "A model that works across more than one data type, such as text plus images.", "domain": 1},
  {"term": "Guardrail", "def": "A configurable control that filters or blocks unsafe, off-topic or sensitive inputs and outputs of an AI system.", "domain": 3},
  {"term": "Model drift", "def": "A decline in model performance over time because the real world has changed since the model was trained.", "domain": 3},
  {"term": "Data drift", "def": "A change in the statistical properties of incoming data compared with the training data, a leading cause of model drift.", "domain": 3},
  {"term": "Bias drift", "def": "A change over time in how fairly a model treats different groups, requiring ongoing monitoring rather than a one-time check.", "domain": 3},
  {"term": "Shadow AI", "def": "Employees using unapproved AI tools outside IT and governance oversight, creating data-leak and compliance risk.", "domain": 3},
  {"term": "Explainability", "def": "The ability to understand and describe why an AI system produced a given output.", "domain": 3},
  {"term": "Fairness", "def": "Considering and limiting unequal impacts of an AI system on different groups of stakeholders.", "domain": 3},
  {"term": "Robustness", "def": "Producing correct outputs for both expected and unexpected or adversarial inputs.", "domain": 3},
  {"term": "Veracity", "def": "Achieving factually correct system outputs; the opposite of hallucination.", "domain": 3},
  {"term": "Controllability", "def": "Having mechanisms to monitor and steer an AI system's behavior.", "domain": 3},
  {"term": "Transparency", "def": "Enabling stakeholders to make informed choices by disclosing how and when AI is used.", "domain": 3},
  {"term": "Privacy and security", "def": "Appropriately obtaining, using and protecting data and models from leakage and adversarial attack.", "domain": 3},
  {"term": "Safety", "def": "Blocking harmful system output and preventing misuse.", "domain": 3},
  {"term": "Governance (AI)", "def": "The policies, roles, processes and controls that ensure AI is used responsibly and in line with regulation across the AI supply chain.", "domain": 3},
  {"term": "Human-in-the-loop", "def": "A design in which a person reviews or approves AI outputs before they take effect, used for high-stakes decisions.", "domain": 3},
  {"term": "Risk classification", "def": "Sorting AI use cases by potential harm (for example, EU AI Act tiers) so controls are proportionate to risk.", "domain": 3},
  {"term": "EU AI Act", "def": "The European Union's AI law that classifies systems as unacceptable, high, limited/transparency or minimal risk and sets obligations accordingly.", "domain": 3},
  {"term": "NIST AI RMF", "def": "The US National Institute of Standards and Technology's voluntary AI Risk Management Framework, organized around Govern, Map, Measure and Manage.", "domain": 3},
  {"term": "ISO/IEC 42001", "def": "The international standard for an AI management system - the certifiable 'how we govern AI' framework (2023).", "domain": 3},
  {"term": "ISO/IEC 23053", "def": "An international standard providing a conceptual framework and shared vocabulary for AI systems that use machine learning (2022).", "domain": 3},
  {"term": "OECD AI Principles", "def": "Five values-based principles for trustworthy AI (inclusive growth, human-centred values, transparency, robustness and safety, accountability) adopted in 2019 and updated in 2024.", "domain": 3},
  {"term": "AI Service Card", "def": "AWS documentation for an AI service or model describing intended uses, limitations, responsible-design choices and deployment guidance.", "domain": 3},
  {"term": "Responsible AI Lens", "def": "The AWS Well-Architected lens of questions and best practices for building and operating AI responsibly across ten dimensions.", "domain": 3},
  {"term": "Shared responsibility model", "def": "AWS secures the cloud infrastructure; the customer secures and governs what runs in it, including data, access and AI outputs.", "domain": 3},
  {"term": "Key performance indicator (KPI)", "def": "A measurable value that shows whether an initiative is achieving its business objective.", "domain": 2},
  {"term": "Return on investment (ROI)", "def": "The financial gain from an initiative divided by its cost, used to compare and justify AI investments.", "domain": 2},
  {"term": "Total cost of ownership (TCO)", "def": "The full lifetime cost of a solution - licences, usage, people, integration, maintenance - not just the headline price.", "domain": 2},
  {"term": "Baseline", "def": "The measured 'before' state of a metric against which AI impact is compared.", "domain": 2},
  {"term": "Leading indicator", "def": "An early metric (adoption, usage, cycle time) that predicts later business outcomes such as revenue or cost savings.", "domain": 2},
  {"term": "Lagging indicator", "def": "An outcome metric such as revenue growth or cost reduction that confirms value after the fact.", "domain": 2},
  {"term": "Build-buy-partner", "def": "The strategic choice between developing a capability in-house, buying it off the shelf, or working with a partner.", "domain": 2},
  {"term": "Consumption-based pricing", "def": "Paying for what you use, for example per token or per request, with no fixed commitment.", "domain": 2},
  {"term": "Instance-based pricing", "def": "Paying per hour for compute capacity such as SageMaker instances, regardless of how busy they are.", "domain": 2},
  {"term": "Seat-based pricing", "def": "Paying a fixed amount per user per month, as with Amazon Quick subscriptions.", "domain": 2},
  {"term": "Provisioned throughput", "def": "Reserved model capacity on Amazon Bedrock bought per hour with an optional term commitment, for predictable high-volume workloads.", "domain": 2},
  {"term": "Savings Plans", "def": "AWS discounts in exchange for committing to a consistent amount of usage for one or three years.", "domain": 2},
  {"term": "Business case", "def": "A structured justification for an investment covering problem, options, costs, benefits, risks and metrics.", "domain": 2},
  {"term": "Competitive advantage", "def": "A durable edge over rivals, which AI creates when it exploits proprietary data, processes or customer relationships others cannot copy.", "domain": 2},
  {"term": "Cloud Adoption Framework (CAF)", "def": "AWS's framework of six perspectives and four phases for planning and scaling cloud and AI transformation.", "domain": 4},
  {"term": "Center of Excellence (CoE)", "def": "A central team that sets standards, shares expertise and accelerates AI adoption across business units.", "domain": 4},
  {"term": "AI maturity", "def": "How advanced an organization is in its AI capabilities across people, process, technology and governance.", "domain": 4},
  {"term": "Data mesh", "def": "A decentralized approach in which business domains own and serve their data as products under common governance.", "domain": 4},
  {"term": "Data silo", "def": "Data trapped in one system or team that others cannot access, a common blocker to AI value.", "domain": 4},
  {"term": "Data quality", "def": "How accurate, complete, consistent and timely data is; poor quality undermines any AI model built on it.", "domain": 4},
  {"term": "Pilot purgatory", "def": "The state in which AI pilots never progress to production because value, ownership or scaling plans were never defined.", "domain": 4},
  {"term": "Proof of concept (PoC)", "def": "A small experiment to test whether an idea is technically and commercially feasible before investing further.", "domain": 4},
  {"term": "MLOps", "def": "Practices and tooling for reliably deploying, monitoring and updating machine-learning models in production.", "domain": 4},
  {"term": "LLMOps", "def": "MLOps adapted for large language models, covering prompt management, evaluation, guardrails and cost monitoring.", "domain": 4},
  {"term": "Change management", "def": "A structured approach to moving people and processes from the current state to a desired future state.", "domain": 4},
  {"term": "ADKAR", "def": "A change-management model built on Awareness, Desire, Knowledge, Ability and Reinforcement.", "domain": 4},
  {"term": "Upskilling and reskilling", "def": "Teaching existing staff new AI-era skills (upskilling) or preparing them for different roles (reskilling).", "domain": 4},
  {"term": "Iterative scaling", "def": "Expanding an AI solution in stages, learning and adjusting at each step rather than a big-bang rollout.", "domain": 4},
  {"term": "Stakeholder alignment", "def": "Securing shared understanding and commitment from executives, business owners, IT and risk functions before and during an AI program.", "domain": 4}
];
