window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
window.AIB_DATA.exams = window.AIB_DATA.exams || [];

window.AIB_DATA.domains["d2"] = {
  "id": "d2",
  "number": 2,
  "title": "AI Strategy and Business Value Creation",
  "weight": 28,
  "summary": "Domain 2 is the heaviest-weighted domain and tests whether you can think like an AI strategist rather than a builder: find the use cases that matter, decide whether to build, buy, or partner, prioritize and prune a portfolio, prove value with KPIs, baselines and ROI, control AI costs, and position AI for durable competitive advantage. Expect scenario questions where the answer is the option that ties an AI decision back to a measurable business outcome, a realistic cost model, or a defensible strategic position, and where the tempting distractor is a technically impressive but commercially weak choice.",
  "objectives": [
    "Identify high-impact AI use cases by business function and map AI capabilities to specific business outcomes.",
    "Evaluate build, buy, and partner options using budget, timeline, capability, vendor, and regulatory criteria, and explain the role of AWS Marketplace.",
    "Prioritize an AI portfolio on value, feasibility, sustainability and strategic alignment, and decide when to scale, pause, or terminate an initiative.",
    "Recognize problems where AI is the wrong tool and recommend better alternatives.",
    "Plan transitions to AI-based processes or between AI platforms with attention to continuity, cost, data readiness and performance.",
    "Define tangible and intangible KPIs, establish baselines, and calculate ROI with comprehensive frameworks including total cost of ownership.",
    "Distinguish leading from lagging indicators of AI project success.",
    "Apply basic AI cost controls: AWS pricing structures (consumption, instance, seat), Savings Plans, provisioned throughput, batch and tiered inference, prompt caching, prompt routing, AWS Pricing Calculator and AWS Cost Explorer.",
    "Assess competitive landscapes, business-model transformation opportunities, sustainable advantage, and appropriate investment levels by industry maturity."
  ],
  "tasks": [
    {
      "id": "2.1",
      "title": "Develop AI strategies that align with business objectives.",
      "lessons": [
        {
          "id": "2.1.1",
          "skill": "Identify high-impact AI use cases across business functions (for example, customer operations, sales and marketing, research and development, software development) and map AI capabilities to specific business outcomes.",
          "title": "High-Impact Use Cases by Function",
          "minutes": 14,
          "content": [
            {"type": "p", "text": "An AI strategy starts with a **use case**: a specific business activity where an AI capability changes an outcome a leader already cares about. The exam rewards candidates who start from the business problem (cost, revenue, risk, speed, experience) and work back to a capability, not the reverse. A useful discipline is to write every candidate use case as a sentence of the form *capability + process + measurable outcome*: for example, generative summarization of call transcripts to cut after-call work by 30 percent."},
            {"type": "h", "text": "Where the value concentrates"},
            {"type": "p", "text": "McKinsey Global Institute's 2023 study *The economic potential of generative AI* estimated that generative AI could add **USD 2.6 trillion to 4.4 trillion** per year across 63 use cases, and that roughly **75 percent** of that value sits in just four functions: **customer operations, marketing and sales, software engineering, and research and development (R&D)**. Those four functions are exactly the examples named in the exam guide, so know them cold. The study also noted that value is unevenly distributed by industry, with banking, high tech and life sciences among the sectors with the largest potential relative to revenue."},
            {"type": "table", "headers": ["Business function", "Representative AI use cases", "Capability used", "Business outcome to measure"],
             "rows": [
               ["Customer operations", "Agent assist, call summarization, self-service chatbots grounded in knowledge bases, intent routing", "GenAI (summarization, retrieval-augmented Q&A), NLP classification", "Average handle time, first-contact resolution, cost per contact, CSAT"],
               ["Marketing and sales", "Personalized content and offers, lead scoring, next-best-action, campaign copy generation", "Recommendation models, propensity scoring, text and image generation", "Conversion rate, revenue per customer, campaign cycle time, cost per lead"],
               ["Software development", "Code generation and review, test generation, documentation, legacy modernization", "Code-trained foundation models", "Developer cycle time, defect rate, release frequency, maintenance cost"],
               ["Research and development", "Literature synthesis, candidate generation, simulation and experiment design", "GenAI synthesis, predictive models", "Time to prototype, research throughput, R&D cost per launch"],
               ["Finance, HR, legal, supply chain", "Document extraction, contract review, forecasting, anomaly detection, policy Q&A", "Intelligent document processing, forecasting, retrieval", "Processing cost per document, forecast error, close-cycle days, compliance findings"]
             ]},
            {"type": "h", "text": "Mapping capability to outcome"},
            {"type": "p", "text": "AWS groups generative AI use cases into five business paths: **Automate** (process optimization and workflow automation), **Build** (software development), **Create** (content and creativity), **Decide** (data analysis and decision support), and **Engage** (customer and employee experience). The paths are handy for a workshop because each one implies the outcome you would measure: Automate implies cost and error reduction, Engage implies satisfaction and retention, Decide implies decision quality and speed."},
            {"type": "ul", "items": [
              "**Volume and repetition** signal automation value: many similar documents, calls, tickets or tests.",
              "**Unstructured data** (text, voice, images, code) signals generative AI or NLP value, because traditional analytics cannot read it.",
              "**Latency of insight** (decisions waiting on analysts) signals decision-support value, such as an AI business assistant like Amazon Quick answering questions over company data.",
              "**Personalization at scale** signals recommendation and generation value in marketing, sales and digital products."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A property and casualty insurer listed 40 candidate ideas. Instead of ranking them by novelty, the strategy team scored each on which outcome it moved. Two claims use cases (first-notice-of-loss document extraction and adjuster note summarization) touched 1.2 million claims per year and mapped to loss-adjustment expense, a line item the CFO already tracked. They were funded first; a chatbot for the careers page, which was technically easy but moved no tracked metric, was deferred."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "When a question asks which use case to pursue FIRST, pick the option that combines a stated business outcome, a high-volume repeatable process, and data the company already has. Options that lead with the technology (for example, fine-tune a model, build an agent) without naming a business outcome are usually distractors."},
            {"type": "scenario", "situation": "A regional bank's CEO wants to use generative AI but the leadership team disagrees on where to start. The contact center handles 3 million calls a year with rising after-call work, the marketing team wants AI-generated social posts, and the data science team wants to train a proprietary foundation model.", "question": "Which use case should the AI strategist recommend prioritizing, and why?", "answer": "The contact-center use case. It is in one of the four functions where most generative AI value concentrates, it is high volume and repetitive, the bank already owns the transcript data, and it maps to a tracked outcome (after-call work and cost per contact). Social posts are low volume with unclear financial impact, and training a proprietary foundation model is a technology-first proposal with no defined business outcome and very high cost."}
          ],
          "keyTerms": [
            {"term": "Use case", "def": "A specific business activity where an AI capability changes a measurable outcome."},
            {"term": "Capability-to-outcome mapping", "def": "Linking an AI capability (for example, summarization, prediction, generation) to the business metric it is expected to move."},
            {"term": "Customer operations", "def": "Contact center, service and support activities; one of the four functions holding most generative AI value."},
            {"term": "Intelligent document processing", "def": "Extracting structured data from unstructured documents such as invoices, claims and contracts using AI."}
          ],
          "examTips": [
            "Memorize the four high-value functions named in the guide: customer operations, sales and marketing, R&D, software development.",
            "The best answer names a business metric; eliminate options that describe technology without an outcome.",
            "Generative AI shines on unstructured data and content; traditional ML shines on structured prediction (forecasting, scoring). Match the capability to the data type."
          ],
          "sources": [
            {"title": "McKinsey Global Institute: The economic potential of generative AI: The next productivity frontier", "url": "https://www.mckinsey.com/mgi/our-research/the-economic-potential-of-generative-ai-the-next-productivity-frontier/"},
            {"title": "AWS: Generative AI use cases", "url": "https://aws.amazon.com/ai/generative-ai/use-cases/"},
            {"title": "AWS Machine Learning Blog: Navigating the generative AI journey: The Path-to-Value framework from AWS", "url": "https://aws.amazon.com/blogs/machine-learning/navigating-the-generative-ai-journey-the-path-to-value-framework-from-aws/"}
          ]
        },
        {
          "id": "2.1.2",
          "skill": "Evaluate build-buy-partner decisions for AI implementations (by considering factors including budget, timelines, capabilities, vendor proposals, and regulatory compliance requirements).",
          "title": "Build, Buy, or Partner",
          "minutes": 15,
          "content": [
            {"type": "p", "text": "Once a use case is chosen, the next strategic choice is **sourcing**: build it, buy it, or partner for it. In practice this is a spectrum rather than three boxes. At one end is a packaged software-as-a-service (SaaS) product with AI already inside; at the other is a custom model trained by your own team on Amazon SageMaker AI. In the middle sits the most common enterprise pattern today: **assemble** an application on a managed platform such as Amazon Bedrock, using a pre-trained foundation model from a provider, your own data through Knowledge Bases, and Guardrails for policy, without training anything."},
            {"type": "table", "headers": ["Factor", "Favors BUY (packaged or SaaS)", "Favors PARTNER (SI, vendor co-development)", "Favors BUILD (custom on Bedrock or SageMaker AI)"],
             "rows": [
               ["Budget", "Predictable subscription or seat fee; low upfront cost", "Shared risk; services spend instead of permanent headcount", "Higher upfront cost but potentially lower unit cost at scale"],
               ["Timeline", "Weeks; fastest time to value", "Months; faster than solo build because of partner accelerators", "Longest; depends on data and talent readiness"],
               ["Internal capabilities", "Little or no ML talent needed", "Fills a temporary skills gap and transfers knowledge", "Requires data, ML and product talent you intend to keep"],
               ["Differentiation", "Commodity process (HR helpdesk, expense coding)", "Important but not core", "Core to competitive advantage; proprietary data or workflow"],
               ["Vendor proposals", "Evaluate on roadmap, SLAs, data use terms, exit rights, total cost over 3 years", "Evaluate on references, IP ownership, knowledge transfer", "Not applicable, but you own the roadmap and the maintenance"],
               ["Regulatory compliance", "Check data residency, model transparency, audit evidence, sub-processor list", "Contractually allocate responsibilities", "Maximum control over data location, logging and explainability"]
             ]},
            {"type": "h", "text": "The role of AWS Marketplace"},
            {"type": "p", "text": "The exam guide lists **AWS Marketplace** specifically for evaluating build-buy-partner decisions. Marketplace is a curated digital catalog of third-party software, data, and professional services that run on or integrate with AWS. For a strategist it matters because it lowers the cost and risk of the *buy* and *partner* options: products can be trialed before purchase, **private offers** allow negotiated pricing and terms, the **Standard Contract for AWS Marketplace** reduces legal negotiation, purchases appear on the consolidated AWS bill, and a **Private Marketplace** lets procurement pre-approve a catalog so teams buy only vetted products. In July 2025 AWS added a dedicated **AI Agents and Tools** category where buyers can discover partner-built agents and tools and deploy them through Amazon Bedrock AgentCore, which is a clear signal that the buy option increasingly includes ready-made agents, not just models."},
            {"type": "callout", "kind": "aws", "title": "AWS positioning on the spectrum", "text": "Amazon Quick (seat-based AI business assistant and BI) is closest to BUY: ready to use with no development. Amazon Bedrock is the ASSEMBLE option: choose a foundation model, add your data and guardrails, pay per token. Amazon SageMaker AI is the BUILD option: train or fine-tune custom models on instances you pay for by the second. AWS Marketplace spans BUY and PARTNER by supplying third-party models, applications, agents and consulting offers with streamlined procurement."},
            {"type": "h", "text": "Evaluating a vendor proposal"},
            {"type": "ol", "items": [
              "Ask how the vendor uses your data: is it used to train their models, and can you opt out?",
              "Ask for evidence of accuracy on *your* data through a proof of concept, not a demo.",
              "Model three-year total cost including seats, usage overages, integration and change management.",
              "Check exit terms: can you export prompts, embeddings, fine-tuned weights and conversation logs?",
              "Confirm compliance artefacts for your regulators (for example, audit logs, data residency, model documentation)."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A mid-sized logistics company needed AI-powered invoice matching in four months with a two-person analytics team. Building on SageMaker AI would have taken a year of hiring. It bought a document-processing product through AWS Marketplace using a private offer, kept its data in its own AWS account, and used the saved budget to partner with a systems integrator on a differentiating route-optimization model that it later chose to build in-house because the routing data was a competitive asset."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "Build is justified by differentiation plus data plus talent, not by cost alone. Buy is justified by speed and commodity processes. If the scenario stresses a tight deadline, limited ML skills, and a non-core process, the answer is almost always buy (often via AWS Marketplace). If it stresses proprietary data that is the company's edge and strict control requirements, lean to build."},
            {"type": "scenario", "situation": "A pharmaceutical company must deploy an AI assistant for regulatory-document search within six months. It has strong compliance requirements, a small data team, and a USD 1 million first-year budget. Vendors have proposed SaaS products; the IT team proposes building a custom model.", "question": "What approach should the strategist recommend?", "answer": "Assemble on a managed platform or buy a vetted product rather than train a custom model. The six-month window and small team rule out a from-scratch build, while the compliance requirements mean any SaaS vendor must be evaluated for data residency, audit logs and data-use terms, ideally through an AWS Marketplace trial and private offer. Using Amazon Bedrock with Knowledge Bases over the company's own documents keeps data under the company's control without model training."}
          ],
          "keyTerms": [
            {"term": "Build-buy-partner", "def": "The sourcing decision for an AI capability: develop in-house, purchase a product, or co-deliver with a vendor or integrator."},
            {"term": "AWS Marketplace", "def": "A curated catalog of third-party software, data, AI agents and services with trials, private offers, standardized contracts and consolidated billing."},
            {"term": "Private offer", "def": "A Marketplace transaction with negotiated pricing and terms not shown publicly."},
            {"term": "Private Marketplace", "def": "An organization-specific, pre-approved catalog of Marketplace products that governs what teams can buy."},
            {"term": "Systems integrator (SI)", "def": "A partner that designs, implements and integrates solutions, often used to fill temporary skills gaps."}
          ],
          "examTips": [
            "Questions typically give budget, timeline, skills and compliance clues; weigh all four rather than fixating on one.",
            "AWS Marketplace appears as the answer when the stem mentions procurement speed, trials, consolidated billing, pre-approved vendors, or discovering partner AI agents.",
            "Decisions are revisited: a common correct answer is to buy now to validate the use case and build later once it proves differentiating."
          ],
          "sources": [
            {"title": "AWS Marketplace features", "url": "https://aws.amazon.com/marketplace/features/"},
            {"title": "AWS What's New: Introducing AI agents and tools in AWS Marketplace (July 2025)", "url": "https://aws.amazon.com/about-aws/whats-new/2025/07/ai-agents-tools-aws-marketplace"},
            {"title": "Amazon SageMaker AI pricing", "url": "https://aws.amazon.com/sagemaker/ai/pricing/"}
          ]
        },
        {
          "id": "2.1.3",
          "skill": "Prioritize AI initiatives based on business value, feasibility, sustainability, and strategic alignment (by deciding to scale, pause, or terminate initiatives).",
          "title": "Prioritizing the AI Portfolio",
          "minutes": 14,
          "content": [
            {"type": "p", "text": "Most organizations have more AI ideas than money, data or attention. Prioritization turns a wish list into a **portfolio** with explicit funding decisions. The exam names four criteria: **business value**, **feasibility**, **sustainability**, and **strategic alignment**, and it expects you to use them not only at the start but continuously, deciding whether to **scale, pause, or terminate** each initiative."},
            {"type": "h", "text": "The value-versus-feasibility matrix"},
            {"type": "p", "text": "The most common tool is a two-by-two **value versus feasibility matrix**, popularized by analyst firms such as Gartner whose use-case assessments plot generative AI use cases on exactly these two axes. Value combines financial impact (cost, revenue, risk) with strategic importance. Feasibility combines data availability and quality, technical maturity of the required capability, integration complexity, regulatory exposure, and organizational readiness to change the process."},
            {"type": "table", "headers": ["Quadrant", "Description", "Portfolio action"],
             "rows": [
               ["High value, high feasibility", "Quick wins and lighthouse projects", "Fund and scale first; use them to build credibility and reusable assets"],
               ["High value, low feasibility", "Transformational bets blocked by data, skills or regulation", "Invest in enablers (data foundations, governance) and run time-boxed experiments; do not scale yet"],
               ["Low value, high feasibility", "Easy but marginal", "Do only if nearly free, or bundle into a platform; otherwise defer"],
               ["Low value, low feasibility", "Distractions", "Terminate or never start"]
             ]},
            {"type": "h", "text": "Sustainability and strategic alignment"},
            {"type": "ul", "items": [
              "**Sustainability** asks whether the benefit lasts: can you afford the ongoing inference, data refresh and human review costs? Will the model keep working as data drifts? Is the benefit dependent on a single vendor's pricing? It also includes environmental and workforce sustainability.",
              "**Strategic alignment** asks whether the initiative advances a stated corporate objective (for example, grow digital revenue 20 percent) rather than a department's local convenience. Misaligned projects die when sponsors change."
            ]},
            {"type": "h", "text": "Scale, pause, or terminate"},
            {"type": "p", "text": "Prioritization is a lifecycle, and the evidence says pruning is normal. Gartner predicted that at least **30 percent** of generative AI projects would be abandoned after proof of concept by the end of 2025 because of poor data quality, inadequate risk controls, escalating costs, or unclear business value. MIT's 2025 *GenAI Divide* report found that about **95 percent** of organizations saw no measurable return from their generative AI pilots, while a small minority captured millions by integrating AI deeply into workflows. Stage gates with pre-agreed criteria stop sunk-cost thinking."},
            {"type": "table", "headers": ["Decision", "Typical evidence", "What it looks like"],
             "rows": [
               ["Scale", "Pilot hit its KPI target against the baseline; unit economics improve with volume; users adopt without being forced; risks controlled", "Expand to more regions or business units, move to production-grade controls, negotiate committed pricing"],
               ["Pause", "Value is plausible but a dependency is unresolved (data quality, regulation, vendor roadmap, key talent)", "Stop spending on the application; fund the blocker; set a review date"],
               ["Terminate", "KPI missed for agreed cycles; cost per outcome worse than the current process; regulatory or reputational risk unacceptable; strategic priority changed", "Decommission, harvest lessons and reusable components, redeploy team"]
             ]},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A retailer ran six generative AI pilots. At the 90-day gate, a product-description generator had cut content cost 60 percent and was scaled to all categories. A demand-forecasting pilot showed promise but the inventory data was inconsistent across regions, so it was paused while a data-quality program ran. A customer-sentiment dashboard delivered insights nobody acted on and was terminated, freeing budget for the scaled project."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "When a pilot is technically successful but shows no business impact, the exam's preferred answer is to pause or terminate based on predefined criteria, not to add more features or extend indefinitely. When a pilot is blocked by data readiness, the answer is to pause and fix the foundation, not to terminate a high-value idea."},
            {"type": "scenario", "situation": "An AI steering committee reviews a fraud-detection pilot that has exceeded its accuracy target and reduced false positives 25 percent versus baseline, but costs 15 percent more per transaction than the current rules engine at pilot volume. Finance modeling shows cost per transaction falls below the current system at 3x volume.", "question": "What should the committee decide?", "answer": "Scale, with a plan to reach the volume where unit economics turn positive and with committed-use pricing to lower cost. The pilot met its value KPI against a baseline, the cost disadvantage is a known function of scale, and fraud reduction is strategically aligned. Terminating on the pilot-stage unit cost would ignore the demonstrated value and the modeled economics."}
          ],
          "keyTerms": [
            {"term": "Value-versus-feasibility matrix", "def": "A prioritization grid that plots initiatives by expected business value against ease of delivery."},
            {"term": "Stage gate", "def": "A predefined decision point with agreed criteria for continuing, pausing or stopping an initiative."},
            {"term": "Sunk-cost fallacy", "def": "Continuing an initiative because of past spending rather than future value."},
            {"term": "Portfolio management", "def": "Treating AI initiatives as a managed set with balanced risk, shared enablers and explicit funding decisions."}
          ],
          "examTips": [
            "Four criteria: value, feasibility, sustainability, alignment. Answers that use only one (usually technical feasibility) are incomplete.",
            "Pause is for unresolved dependencies with real value; terminate is for missed KPIs, bad unit economics or unacceptable risk.",
            "Scale decisions should be evidence-based: KPI vs baseline, adoption, unit economics, controlled risk."
          ],
          "sources": [
            {"title": "Gartner (reported by Intelligent CIO): 30% of generative AI projects will be abandoned after proof of concept by end of 2025", "url": "https://www.intelligentcio.com/me/2024/08/05/gartner-predicts-30-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025/"},
            {"title": "Computing: MIT report: 95% of corporate generative AI pilots fail to deliver returns", "url": "https://computing.co.uk/news/2025/ai/mit-report-95pc-corporate-generative-ai-pilots-fail"},
            {"title": "Gartner: What Generative AI Means for Business (use-case prisms on value and feasibility)", "url": "https://gartner.com/en/insights/generative-ai-for-business"}
          ]
        },
        {
          "id": "2.1.4",
          "skill": "Determine when AI is not the appropriate solution for a business problem.",
          "title": "When AI Is the Wrong Tool",
          "minutes": 12,
          "content": [
            {"type": "p", "text": "A strategist earns trust by saying no. AI, and especially generative AI, is probabilistic: it produces likely answers, not guaranteed ones, and it costs money on every call. Many business problems are better served by rules, conventional software, analytics, or simply fixing the process. AWS's own machine learning guidance makes the point plainly: ML is not a solution for every problem, and if a target value can be determined with simple rules, calculations or predetermined steps, no data-driven learning is needed."},
            {"type": "h", "text": "Signals that AI is not the answer"},
            {"type": "table", "headers": ["Signal in the problem", "Why AI is a poor fit", "Better alternative"],
             "rows": [
               ["The logic is fully known and stable (tax rates, eligibility rules, pricing tables)", "Rules reach 100 percent accuracy at near-zero marginal cost; a model adds error and cost", "Rules engine or conventional software"],
               ["Zero tolerance for error and no human review possible (safety interlocks, legal filings)", "Probabilistic outputs and hallucinations cannot be fully eliminated", "Deterministic systems with human sign-off; AI only as an assistant"],
               ["The question is descriptive (what sold best last quarter)", "This is reporting, not prediction or generation", "Business intelligence dashboards and SQL (Amazon Quick's BI features suffice)"],
               ["Little or no relevant data, or data you are not allowed to use", "Models learn from data; without it they cannot perform or comply", "Fix data strategy first; use rules meanwhile"],
               ["Very low volume or one-off decision", "Development and run cost exceed the benefit", "Manual expert judgment"],
               ["Regulation requires full explainability of each decision", "Complex models may not meet the explainability bar", "Interpretable models or rules; AI for triage only"],
               ["The real problem is a broken process or incentive", "Automating a bad process makes it fail faster", "Process redesign first, then automate"],
               ["Ethical or reputational exposure outweighs benefit (for example, emotion inference in hiring)", "Harm and compliance risk; EU AI Act prohibits some such uses", "Do not pursue"]
             ]},
            {"type": "h", "text": "A decision checklist"},
            {"type": "ol", "items": [
              "Can a human write the rules completely? If yes, write the rules.",
              "Does the problem require learning from patterns, handling language or images, or scaling judgment that humans cannot keep up with? If no, AI is unlikely to help.",
              "Is the cost of a wrong answer bounded and reviewable? If no, AI can at most assist.",
              "Do we have, and may we use, the data? If no, the AI project is really a data project.",
              "Is the expected benefit larger than build plus run plus governance cost over three years? If no, stop."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A utility asked for a generative AI tool to calculate customer bills from tariff rules. The strategist pointed out that the tariff is a published, deterministic formula where any error triggers regulatory penalties; a rules-based billing engine is cheaper and exactly correct. AI was redirected to a genuinely fuzzy problem: classifying and summarizing free-text complaint emails so agents could resolve them faster."},
            {"type": "callout", "kind": "warning", "title": "Watch the trap", "text": "A question may describe a sophisticated-sounding AI solution for a simple problem. Reject it if a cheaper deterministic approach gives equal or better accuracy. Also reject AI where the stem says every outcome must be fully explainable and auditable with zero error, unless the option keeps a human decision-maker in control."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "The exam tests judgment, not enthusiasm. Phrases such as fixed business rules, descriptive reporting, insufficient historical data, 100 percent accuracy required, or low transaction volume are cues that the correct answer is a non-AI solution or a data-first step."},
            {"type": "scenario", "situation": "A manufacturer wants to use a foundation model to decide whether each shipment qualifies for duty-free treatment under trade agreements. Rules are published in treaty text, errors incur customs penalties, and volume is 500 shipments per month.", "question": "Should the strategist recommend the AI solution?", "answer": "No. The qualification logic is codified, every error has a regulatory penalty, and volume is modest, so a rules-based classification system is cheaper and fully accurate. If anything, generative AI could assist by extracting fields from shipping documents for the rules engine to evaluate, with human review on exceptions."}
          ],
          "keyTerms": [
            {"term": "Deterministic system", "def": "Software whose output is fully determined by explicit rules, producing the same result every time."},
            {"term": "Probabilistic output", "def": "A result expressed as a likelihood or best guess rather than a certainty; characteristic of ML and generative AI."},
            {"term": "Descriptive analytics", "def": "Reporting on what happened, typically served by BI tools rather than predictive or generative AI."},
            {"term": "Hallucination", "def": "A confident but incorrect or fabricated output from a generative model."}
          ],
          "examTips": [
            "Rules beat models when logic is known, stable and must be exactly right.",
            "Descriptive questions are BI questions; do not reach for predictive or generative AI.",
            "If data is missing or unusable, the right first step is a data initiative, not a model."
          ],
          "sources": [
            {"title": "Amazon Machine Learning Developer Guide: When to Use Machine Learning", "url": "https://docs.aws.amazon.com/machine-learning/latest/dg/when-to-use-machine-learning"},
            {"title": "AWS Well-Architected Generative AI Lens: Model selection and cost optimization (GENCOST01)", "url": "https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/gencost01.html"}
          ]
        },
        {
          "id": "2.1.5",
          "skill": "Evaluate key considerations when preparing to transition business processes to AI-based solutions or between AI platforms (for example, business continuity, cost implications, data readiness, performance impact).",
          "title": "Transitioning Processes and Platforms",
          "minutes": 14,
          "content": [
            {"type": "p", "text": "Two kinds of transition appear on the exam: moving a **business process** from manual or rules-based execution to an AI-based solution, and moving an existing AI workload **between platforms or models** (for example, from one foundation model to its successor, or from a vendor tool to Amazon Bedrock). Both are change programs, not technology swaps. The guide names four considerations: **business continuity, cost implications, data readiness, and performance impact**."},
            {"type": "table", "headers": ["Consideration", "Key questions", "Mitigations a strategist should expect"],
             "rows": [
               ["Business continuity", "What happens to customers and operations if the AI fails, degrades or is unavailable? Who is accountable?", "Parallel run (old and new side by side), phased rollout, human fallback paths, rollback plan, defined service levels, incident escalation"],
               ["Cost implications", "What is the total cost of ownership (TCO) including switching costs, dual running, retraining staff, data migration, new pricing model (per token vs per seat vs per instance), and exit from existing commitments?", "Model TCO over three years with AWS Pricing Calculator, compare to baseline process cost, avoid long commitments until volume is proven"],
               ["Data readiness", "Is the data accessible, clean, labelled where needed, permitted for this use, and refreshed? Are knowledge sources current?", "Data quality assessment, ownership and access rights, golden test datasets, retention and privacy review"],
               ["Performance impact", "Will accuracy, latency, throughput and user experience meet the process requirement? How do we know before cutover?", "Side-by-side evaluation on the same inputs, shadow testing, A/B tests, acceptance criteria tied to the business KPI"]
             ]},
            {"type": "h", "text": "Transitioning between AI platforms or models"},
            {"type": "p", "text": "Foundation models have lifecycles. On Amazon Bedrock, a model moves from **Active** to **Legacy** with at least six months' notice before **end of life (EOL)**, after which API calls fail; migration is not automatic. AWS's recommended migration path is a useful checklist for any platform move: assess which applications depend on the model, research the replacement's capabilities and regional availability, adjust prompts (newer models respond differently), update output parsing, confirm quotas, test side by side for quality, latency, error rate and token usage, then migrate in phases with a rollback option and post-cutover monitoring."},
            {"type": "ul", "items": [
              "**Prompt portability**: prompts tuned for one model rarely transfer unchanged; budget for re-evaluation.",
              "**Lock-in and switching costs**: fine-tuned weights, embeddings, conversation logs and integrations may not move. Prefer architectures and contracts that keep data and prompts exportable.",
              "**Commitments**: provisioned throughput terms or Savings Plans tied to the old platform may continue to bill; time the switch to commitment expiry.",
              "**Governance continuity**: guardrails, logging and approval records must be re-established on the new platform before go-live.",
              "**People**: retraining users and updating standard operating procedures is usually the slowest part."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A telecom replaced a rules-based troubleshooting script in its contact center with a generative assistant grounded in its knowledge base. It ran both for eight weeks in two call centers, measured resolution rate and handle time against the baseline, kept the old script as a one-click fallback, and only then expanded. When its chosen model later entered Legacy status, the same side-by-side harness let it validate the successor model in three weeks."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "For transition questions, the best answer almost always includes a parallel run or phased rollout with a rollback path and measurement against the existing process. Big-bang cutovers are distractors. For model or platform migrations, the discriminator is side-by-side evaluation on real inputs before cutover."},
            {"type": "scenario", "situation": "A retailer plans to move its product-search assistant from a third-party SaaS vendor to Amazon Bedrock to reduce cost and gain control of its data. The SaaS contract ends in four months. The vendor holds the prompt library and conversation history.", "question": "What considerations should drive the transition plan?", "answer": "Export prompts and history before contract end; rebuild and re-evaluate prompts on the target model with a side-by-side harness on real queries; model TCO under token-based pricing versus the current subscription; run both systems in parallel for a subset of traffic with rollback; re-establish guardrails and logging on Bedrock; and train the merchandising team on the new workflow. The timeline should be set by evaluation results, not just by the contract date, with a short-term renewal as a continuity fallback if needed."}
          ],
          "keyTerms": [
            {"term": "Parallel run", "def": "Operating the old and new process together for a period to compare results and protect continuity."},
            {"term": "Switching cost", "def": "The total effort and expense of moving from one platform or vendor to another, including data, prompts, integrations and retraining."},
            {"term": "Model lifecycle (Active, Legacy, EOL)", "def": "The stages of a foundation model's availability on Amazon Bedrock, with at least six months' notice before end of life."},
            {"term": "Shadow testing", "def": "Sending live traffic to a new system without exposing its outputs to users, to compare performance safely."}
          ],
          "examTips": [
            "Four considerations: continuity, cost, data readiness, performance. Good answers touch several, not one.",
            "Side-by-side evaluation and phased rollout with rollback beat big-bang cutover.",
            "Switching costs and existing commitments are part of cost implications; do not ignore them when a cheaper platform appears."
          ],
          "sources": [
            {"title": "AWS Machine Learning Blog: Understanding Amazon Bedrock model lifecycle", "url": "https://aws.amazon.com/blogs/machine-learning/understanding-amazon-bedrock-model-lifecycle"},
            {"title": "AWS Machine Learning Blog: Navigating the generative AI journey: The Path-to-Value framework from AWS", "url": "https://aws.amazon.com/blogs/machine-learning/navigating-the-generative-ai-journey-the-path-to-value-framework-from-aws/"}
          ]
        }
      ]
    },
    {
      "id": "2.2",
      "title": "Measure and demonstrate AI business value.",
      "lessons": [
        {
          "id": "2.2.1",
          "skill": "Define key performance indicators (KPIs) for AI initiatives, including tangible benefits (for example, cost reduction, revenue growth) and intangible benefits (for example, customer satisfaction, employee productivity).",
          "title": "Defining AI KPIs",
          "minutes": 13,
          "content": [
            {"type": "p", "text": "A **key performance indicator (KPI)** is a quantified measure of progress toward a business objective. AI initiatives need KPIs at three levels: the **business outcome** the sponsor cares about, the **process or operational** change that produces it, and the **model or system** behaviour that makes the process change possible. The exam focuses on the first two and expects you to separate **tangible** benefits, which translate directly into money, from **intangible** benefits, which matter but need a proxy measure."},
            {"type": "table", "headers": ["Category", "Examples", "How to quantify"],
             "rows": [
               ["Tangible: cost reduction", "Cost per contact, cost per processed document, infrastructure spend, overtime, vendor fees avoided", "Direct financial measurement against the baseline"],
               ["Tangible: revenue growth", "Conversion rate, average order value, cross-sell rate, churn reduction, new product revenue", "Attribute through controlled tests (A/B) or statistical uplift"],
               ["Tangible: risk and loss", "Fraud losses, compliance fines, write-offs, error rework", "Loss avoided versus baseline rate"],
               ["Intangible: customer experience", "Customer satisfaction (CSAT), Net Promoter Score (NPS), first-contact resolution, wait time", "Survey scores and operational proxies; link to retention over time"],
               ["Intangible: employee productivity and experience", "Time saved per task, tasks completed per person, employee NPS (eNPS), attrition, time to competency", "Time-and-motion studies, system telemetry, HR surveys; convert hours saved to value only when redeployed"],
               ["Intangible: speed and agility", "Cycle time, time to market, decisions per week", "Elapsed-time measurement before and after"]
             ]},
            {"type": "h", "text": "Writing good AI KPIs"},
            {"type": "ul", "items": [
              "**Tie each KPI to a stated objective** and name the owner. A KPI nobody owns is a statistic.",
              "**Make it SMART** (specific, measurable, achievable, relevant, time-bound): reduce average handle time from 8.5 to 6.5 minutes by Q4.",
              "**Pair efficiency with quality** so gains are real: handle time *and* resolution rate; content volume *and* brand-compliance score. A model that answers faster but wrongly should fail its KPI.",
              "**Include adoption and trust measures** for intangible value: active users, acceptance rate of AI suggestions, override rate.",
              "**Use frameworks you already have.** The AWS Cloud Value Framework organizes value into cost savings, staff productivity, operational resilience, and business agility; map AI KPIs into those four buckets so the CFO sees a familiar structure."
            ]},
            {"type": "callout", "kind": "definition", "title": "Vanity metric", "text": "A number that looks impressive but does not connect to an outcome, such as prompts submitted or pilots launched. The exam penalizes options that measure activity instead of impact."},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A software company deployed an AI coding assistant. Its KPI set was: tangible, 15 percent reduction in cycle time from ticket to production and a 10 percent reduction in contractor spend; intangible, developer satisfaction up five points on the quarterly survey and no increase in post-release defect rate. The defect guardrail KPI kept the productivity story credible with engineering leadership."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "If a question asks for the BEST KPI for an AI initiative, choose the one closest to the business outcome in the scenario (for example, first-contact resolution for a service bot) rather than a model metric (accuracy) or an activity metric (number of conversations). If it asks for an intangible benefit, look for satisfaction, experience, morale, brand or employee productivity."},
            {"type": "scenario", "situation": "A hospital network introduces an AI assistant that drafts clinical notes for physicians. Leadership wants to show value to the board.", "question": "Which KPIs should the strategist propose?", "answer": "Tangible: documentation time per encounter (hours saved) and overtime or scribe costs reduced. Intangible: physician burnout and satisfaction scores, and patient-facing time per visit. Quality guardrails: note accuracy and correction rate reviewed by clinicians. Model accuracy alone is not a business KPI; the board needs cost, time and experience measures with a baseline for each."}
          ],
          "keyTerms": [
            {"term": "KPI", "def": "A quantified measure of progress toward a business objective, owned by someone accountable."},
            {"term": "Tangible benefit", "def": "A benefit that converts directly into financial terms, such as cost reduction or revenue growth."},
            {"term": "Intangible benefit", "def": "A benefit that is real but not directly monetary, such as customer satisfaction or employee productivity, measured through proxies."},
            {"term": "Net Promoter Score (NPS)", "def": "A customer loyalty metric based on likelihood to recommend; eNPS is the employee version."},
            {"term": "AWS Cloud Value Framework", "def": "An AWS business-case structure with four pillars: cost savings, staff productivity, operational resilience, business agility."}
          ],
          "examTips": [
            "Separate tangible (cost, revenue, loss avoided) from intangible (CSAT, NPS, productivity, morale); the guide uses exactly these examples.",
            "Business KPI beats model metric; impact metric beats activity metric.",
            "Always pair an efficiency KPI with a quality guardrail KPI."
          ],
          "sources": [
            {"title": "AWS: Realizing Business Value on AWS (Cloud Value Framework)", "url": "https://resources.awscloud.com/migration-resources-whitepapers/realizing-business-value-on-aws-ebook"},
            {"title": "AWS Machine Learning Blog: Navigating the generative AI journey: The Path-to-Value framework from AWS", "url": "https://aws.amazon.com/blogs/machine-learning/navigating-the-generative-ai-journey-the-path-to-value-framework-from-aws/"}
          ]
        },
        {
          "id": "2.2.2",
          "skill": "Establish baseline metrics before implementing AI solutions to accurately measure AI adoption effects.",
          "title": "Establishing Baselines",
          "minutes": 11,
          "content": [
            {"type": "p", "text": "A **baseline** is the measured value of a KPI *before* the AI solution is introduced. Without it, you cannot attribute any change to AI, and the business case becomes a story rather than evidence. The exam treats baselining as a non-negotiable step that precedes implementation, and tests whether you know how to do it well."},
            {"type": "h", "text": "How to establish a credible baseline"},
            {"type": "ol", "items": [
              "**Define the KPI precisely** (formula, data source, inclusions and exclusions) so the before and after numbers are comparable.",
              "**Measure over a representative window**, long enough to capture seasonality and normal variance; a single good week is not a baseline.",
              "**Capture the current cost and quality**, not just speed: cost per unit, error rate, satisfaction, rework.",
              "**Segment** by region, product or team so you can compare like with like after rollout.",
              "**Record context** such as headcount, volume and policy changes that could independently move the KPI.",
              "**Plan the comparison design**: a control group or staged rollout (one region first) gives far stronger attribution than before-and-after alone."
            ]},
            {"type": "table", "headers": ["Pitfall", "Effect", "Remedy"],
             "rows": [
               ["No baseline captured", "Improvement cannot be proven; sceptics discount the result", "Make the baseline a stage-gate requirement before build starts"],
               ["Baseline from a different definition", "Apparent gains or losses are artefacts of measurement", "Freeze KPI definitions and data sources"],
               ["Confounding changes (new hires, price change, seasonality)", "Gains are wrongly credited to or stolen from AI", "Use control groups, staggered rollout, or statistical adjustment"],
               ["Observer effect", "Staff behave differently while being measured", "Use system telemetry rather than self-reporting where possible; measure long enough for novelty to fade"],
               ["Measuring only the automated step", "Misses downstream rework or quality cost", "Baseline the end-to-end process"]
             ]},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "Before launching an AI claims-triage assistant, an insurer spent six weeks recording triage time, reassignment rate and customer complaints for every adjuster team, split by claim type. It then launched in two of five regions. After a quarter, the launch regions showed triage time down 35 percent while the control regions were flat, which let the CFO accept the saving even though claim volume had risen company-wide during the period."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "When a scenario says a company deployed AI and now cannot show whether it helped, the root cause the exam wants is a missing or poorly defined baseline. When a scenario asks how to measure adoption effects ACCURATELY, the strongest option is a baseline plus a control group or staged rollout."},
            {"type": "scenario", "situation": "A bank is about to roll out an AI assistant to its 2,000 relationship managers to speed up client meeting preparation. The project team wants to start immediately and measure results after six months.", "question": "What should the strategist insist on first?", "answer": "Capture baseline metrics before rollout: current preparation time per meeting, meetings per manager per week, client satisfaction and cross-sell rates, measured over a representative period and segmented by region or segment. Roll out to a subset first so the remaining managers act as a control group. Measuring only after six months would leave the bank unable to attribute changes to the assistant."}
          ],
          "keyTerms": [
            {"term": "Baseline", "def": "The measured value of a KPI before an intervention, used as the reference point for impact."},
            {"term": "Control group", "def": "A comparable population that does not receive the AI solution, used to isolate its effect."},
            {"term": "Confounding variable", "def": "An external factor that changes the KPI independently of the AI solution."},
            {"term": "Staged (staggered) rollout", "def": "Introducing a solution to groups in sequence so later groups serve as controls for earlier ones."}
          ],
          "examTips": [
            "Baseline before build; it is a prerequisite, not a nice-to-have.",
            "Accurate attribution needs a comparison design (control group or staggered rollout), not just before and after.",
            "Freeze definitions and measure the end-to-end process including quality."
          ],
          "sources": [
            {"title": "AWS Machine Learning Blog: Navigating the generative AI journey: The Path-to-Value framework from AWS", "url": "https://aws.amazon.com/blogs/machine-learning/navigating-the-generative-ai-journey-the-path-to-value-framework-from-aws/"},
            {"title": "AWS: Realizing Business Value on AWS (Cloud Value Framework)", "url": "https://resources.awscloud.com/migration-resources-whitepapers/realizing-business-value-on-aws-ebook"}
          ]
        },
        {
          "id": "2.2.3",
          "skill": "Calculate AI return on investment (ROI) by using comprehensive frameworks (for example, time savings, cost reduction, revenue growth, productivity gains).",
          "title": "Calculating AI ROI",
          "minutes": 15,
          "content": [
            {"type": "p", "text": "**Return on investment (ROI)** compares the value an initiative creates with what it costs: ROI = (total benefits minus total costs) divided by total costs, usually over a defined period such as three years. The word *comprehensive* in the exam skill matters: the exam expects benefits to be counted across several categories and costs to be counted as **total cost of ownership (TCO)**, not just the licence or token bill."},
            {"type": "h", "text": "Benefit categories"},
            {"type": "table", "headers": ["Benefit type", "How to estimate", "Common mistake"],
             "rows": [
               ["Time savings", "Hours saved per task x tasks per year x fully loaded hourly cost x realization factor (share of saved time redeployed to valuable work)", "Counting 100 percent of saved minutes as cash; most saved time is not harvested unless roles or capacity plans change"],
               ["Cost reduction", "Baseline unit cost minus new unit cost x volume; vendor or contractor spend avoided; error and rework reduced", "Ignoring new costs the AI introduces (review, inference, governance)"],
               ["Revenue growth", "Uplift in conversion, order value, retention or new offerings, measured via controlled tests x margin", "Using revenue instead of margin; attributing market growth to AI"],
               ["Productivity gains", "More output per person: cases closed, code shipped, content produced, at equal or better quality", "Measuring volume without quality"],
               ["Risk and loss avoidance", "Expected losses avoided (fraud, fines, outages) based on baseline rates", "Claiming avoidance of events that were never likely"]
             ]},
            {"type": "h", "text": "Total cost of ownership"},
            {"type": "ul", "items": [
              "**Build costs**: discovery, data preparation, integration, prompt engineering or fine-tuning, testing, partner fees.",
              "**Run costs**: inference (tokens, instances or seats), knowledge-base storage and retrieval, guardrail checks, monitoring, model upgrades.",
              "**People costs**: product owner, ML and data staff, human reviewers, training users.",
              "**Governance and risk costs**: compliance reviews, audits, legal, insurance, incident handling.",
              "**Change costs**: process redesign, communications, productivity dip during adoption."
            ]},
            {"type": "h", "text": "A worked example"},
            {"type": "table", "headers": ["Line item (3 years)", "Amount (USD)"],
             "rows": [
               ["Time savings: 300 agents x 45 min/day x 220 days x USD 40/hour x 60 percent realization", "2,376,000"],
               ["Cost reduction: 20 percent fewer contractor hours", "900,000"],
               ["Revenue: cross-sell uplift (margin basis, from A/B test)", "600,000"],
               ["Total benefits", "3,876,000"],
               ["Build (integration, prompts, partner)", "(500,000)"],
               ["Run (tokens, knowledge base, guardrails, monitoring)", "(720,000)"],
               ["People, governance, change", "(650,000)"],
               ["Total costs (TCO)", "(1,870,000)"],
               ["ROI = (3,876,000 - 1,870,000) / 1,870,000", "about 107 percent; payback in roughly 18 months"]
             ]},
            {"type": "p", "text": "Complement ROI with **payback period** (how long until cumulative benefits exceed costs) and, for larger investments, **net present value (NPV)**, which discounts future cash flows. Present a range (conservative, expected, optimistic) because adoption and realization rates are uncertain. Gartner has noted that generative AI often requires tolerance for indirect, future financial benefits rather than immediate ROI, so distinguish hard savings from capacity created."},
            {"type": "callout", "kind": "aws", "title": "AWS tools in the ROI model", "text": "Use the **AWS Pricing Calculator** to estimate run costs before building (it models upfront, monthly and annual costs and exports estimates to share with stakeholders). After launch, use **AWS Cost Explorer** to track actual spend against the model and to forecast. Pricing structure drives the cost line: Amazon Bedrock on-demand is per token, SageMaker AI is per instance-second, Amazon Quick is per user per month."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "The most comprehensive ROI option counts multiple benefit types AND full TCO. Distractors typically count only licence or token costs, treat all time saved as cash, or omit change-management and governance costs. If a scenario shows strong adoption but weak ROI, check whether saved time was actually redeployed."},
            {"type": "scenario", "situation": "A CFO rejects an AI business case that claims 400 percent ROI because it counts every minute saved by 1,000 employees as salary savings, lists only the vendor subscription as cost, and ignores the six-month rollout.", "question": "How should the strategist rebuild the case?", "answer": "Apply a realization factor to time savings (or show it as capacity created rather than cash), add revenue or quality benefits only where evidence exists, and expand costs to full TCO: integration, data work, training, human review, governance, and a productivity dip during rollout. Present conservative and expected scenarios with payback period. The ROI will fall but the case becomes credible and fundable."}
          ],
          "keyTerms": [
            {"term": "ROI", "def": "(Total benefits minus total costs) divided by total costs over a defined period."},
            {"term": "Total cost of ownership (TCO)", "def": "All costs of building, running, governing and changing a solution over its life, not just the purchase price."},
            {"term": "Realization factor", "def": "The share of theoretical time savings that is actually converted into value through redeployment or capacity reduction."},
            {"term": "Payback period", "def": "The time until cumulative benefits equal cumulative costs."},
            {"term": "Net present value (NPV)", "def": "The sum of future cash flows discounted to today's value minus the initial investment."}
          ],
          "examTips": [
            "Comprehensive means several benefit categories (time, cost, revenue, productivity, risk) plus full TCO.",
            "Time saved is not money saved until it is redeployed or capacity is reduced.",
            "Pricing Calculator for planning estimates; Cost Explorer for actuals and forecasts."
          ],
          "sources": [
            {"title": "AWS Pricing Calculator User Guide: What is AWS Pricing Calculator?", "url": "https://docs.aws.amazon.com/pricing-calculator/latest/userguide/what-is-pricing-calculator.html"},
            {"title": "AWS Cost Explorer", "url": "https://aws.amazon.com/aws-cost-management/aws-cost-explorer/"},
            {"title": "Gartner (reported by Intelligent CIO): 30% of generative AI projects will be abandoned after proof of concept by end of 2025", "url": "https://www.intelligentcio.com/me/2024/08/05/gartner-predicts-30-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025/"}
          ]
        },
        {
          "id": "2.2.4",
          "skill": "Identify leading indicators that predict AI project success.",
          "title": "Leading Indicators of Success",
          "minutes": 11,
          "content": [
            {"type": "p", "text": "Financial results arrive late. A **lagging indicator** such as cost reduction or revenue growth confirms success months after the decisions that produced it. A **leading indicator** is an earlier signal that predicts whether those results will come, giving leaders time to intervene. Good AI programs track both, and the exam tests whether you can tell them apart and pick leading indicators that genuinely predict outcomes."},
            {"type": "table", "headers": ["Leading indicator", "Why it predicts success", "Lagging outcome it predicts"],
             "rows": [
               ["Adoption and active usage (weekly active users as a share of the target population; repeat usage)", "Value cannot materialize if people do not use the tool; declining usage after launch predicts failure", "Productivity and cost savings"],
               ["Acceptance or override rate of AI outputs", "High acceptance with low later corrections signals trust and quality; high override signals poor fit", "Quality, rework cost, satisfaction"],
               ["Data readiness score (completeness, freshness, access approvals)", "Most abandoned projects cite data quality", "Model performance, time to production"],
               ["Evaluation quality on a golden test set", "Pre-production accuracy and groundedness predict production quality", "Error rate, customer satisfaction"],
               ["Time to first value and sprint velocity", "Slow pilots rarely accelerate; momentum predicts delivery", "Payback period"],
               ["Executive sponsorship and funding continuity", "Projects lose sponsors before they lose technology", "Scale decision"],
               ["Workforce readiness (training completion, confidence survey)", "People change is the usual bottleneck", "Adoption, productivity"],
               ["Unit cost trend (cost per task or per conversation)", "Falling unit cost predicts positive ROI at scale", "ROI"]
             ]},
            {"type": "h", "text": "Choosing indicators that actually lead"},
            {"type": "ul", "items": [
              "An indicator leads only if there is a **causal path** to the outcome and you can **act** on it. Number of pilots launched is activity, not a predictor.",
              "Set **thresholds and review cadence** (for example, if weekly active usage falls below 40 percent of the target group by week six, trigger an adoption intervention).",
              "Pair leading indicators with the KPI they predict so stakeholders see the logic chain.",
              "Watch for **gaming**: forcing usage inflates adoption without improving outcomes; track acceptance quality alongside volume."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A professional services firm tracked weekly active usage, acceptance rate and training completion for a proposal-drafting assistant. By week four, usage in one region was half the others. Investigation showed partners there had not been briefed; a targeted enablement session doubled usage within a month. Six months later that region's proposal cycle time matched the leaders, a result that would have been missed had the firm waited for the lagging metric."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "Leading indicators are about adoption, data readiness, evaluation quality, sponsorship and momentum. Lagging indicators are financial and outcome results. If a question asks which metric lets leaders intervene EARLY, choose adoption or data-readiness measures over revenue or cost outcomes."},
            {"type": "scenario", "situation": "Three months into a year-long AI underwriting initiative, the CFO asks whether the project is on track to deliver its promised loss-ratio improvement, which cannot be measured until policies mature in 18 months.", "question": "What should the strategist report?", "answer": "Leading indicators: the share of underwriters actively using the tool and accepting its recommendations, model accuracy and calibration on a holdout set compared with current underwriting decisions, data pipeline completeness, and cycle-time reduction per application. Together these predict the lagging loss-ratio outcome and show where to intervene now."}
          ],
          "keyTerms": [
            {"term": "Leading indicator", "def": "An early, actionable signal that predicts a future outcome."},
            {"term": "Lagging indicator", "def": "A result measured after the fact that confirms whether the outcome was achieved."},
            {"term": "Adoption rate", "def": "The share of the intended user population actively using the AI solution."},
            {"term": "Acceptance rate", "def": "The proportion of AI outputs users accept without substantial change; a proxy for trust and quality."}
          ],
          "examTips": [
            "Adoption, acceptance, data readiness, evaluation quality and sponsorship are leading; cost, revenue and satisfaction results are lagging.",
            "A leading indicator must be causally linked and actionable; activity counts are vanity metrics.",
            "Track leading and lagging together so the logic chain to value is visible."
          ],
          "sources": [
            {"title": "AWS Machine Learning Blog: Navigating the generative AI journey: The Path-to-Value framework from AWS", "url": "https://aws.amazon.com/blogs/machine-learning/navigating-the-generative-ai-journey-the-path-to-value-framework-from-aws/"},
            {"title": "Gartner (reported by Intelligent CIO): 30% of generative AI projects will be abandoned after proof of concept by end of 2025", "url": "https://www.intelligentcio.com/me/2024/08/05/gartner-predicts-30-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025/"}
          ]
        },
        {
          "id": "2.2.5",
          "skill": "Implement basic cost factor controls for AI implementations, including cost planning and optimization strategies.",
          "title": "AI Cost Planning and Optimization",
          "minutes": 18,
          "content": [
            {"type": "p", "text": "AI costs behave differently from traditional software: generative AI is metered by **tokens** (pieces of text the model reads and writes), custom ML is metered by **compute time**, and business assistants are sold per **seat**. A strategist does not configure any of this, but must understand the pricing structures well enough to plan, choose the right option for a workload's pattern, and apply the main optimization levers. This is one of the most heavily tested skills in Domain 2."},
            {"type": "h", "text": "The three AWS AI pricing structures"},
            {"type": "table", "headers": ["Structure", "AWS example", "You pay for", "Best when"],
             "rows": [
               ["Consumption-based (token or request)", "Amazon Bedrock on-demand inference", "Input and output tokens per model; Guardrails per 1,000 text units; Knowledge Bases storage and retrieval calls", "Variable or unpredictable demand, experimentation, no commitment desired"],
               ["Instance-based (compute time)", "Amazon SageMaker AI notebooks, training, real-time and batch inference", "Instance type x duration (billed per second), storage; serverless inference per millisecond", "Custom model training and hosting where you control the model and need steady capacity"],
               ["Seat-based (subscription)", "Amazon Quick", "Per user per month; Professional USD 20 and Enterprise USD 40 per user per month plus a USD 250 per account per month infrastructure fee; Plus USD 20 and Max USD 100 per user per month billed annually; included agent hours with overage", "Knowledge workers using an AI business assistant and BI; predictable headcount-based budgeting"]
             ]},
            {"type": "h", "text": "Amazon Bedrock pricing options"},
            {"type": "table", "headers": ["Option", "How it is priced", "Workload fit"],
             "rows": [
               ["On-demand (Standard tier)", "Per input and output token, no commitment", "Default for interactive and variable workloads"],
               ["Batch inference", "50 percent lower than on-demand for supported models; results returned asynchronously", "Large non-urgent jobs: nightly summarization, bulk classification, evaluations"],
               ["Flex tier", "50 percent discount to Standard; requests may wait behind Standard during peaks", "Non-time-critical synchronous calls such as evaluations, summarization, multi-step agent work"],
               ["Priority tier", "75 percent premium over Standard; processed ahead of Standard with up to 25 percent better output tokens per second", "Mission-critical, latency-sensitive, customer-facing applications"],
               ["Provisioned throughput (and Reserved tier)", "Hourly per model unit, with no-commitment, 1-month or 6-month terms for provisioned throughput; Reserved tier reserves tokens-per-minute capacity for 1 or 3 months", "Steady, high, predictable volume where guaranteed throughput and lower unit cost justify a commitment"],
               ["Prompt caching", "Cached input tokens on cache hits are billed about 90 percent below standard input price; cache writes cost more than standard input", "Long repeated prefixes: system prompts, documents, tool definitions, agents"],
               ["Intelligent prompt routing", "Routes each prompt to the cheapest model in a family that can handle it; AWS cites cost reductions of up to 30 percent without compromising accuracy; small per-request fee", "Mixed traffic where many requests are simple"],
               ["Model distillation", "Train a smaller student model from a larger teacher; AWS cites up to 75 percent lower cost with less than 2 percent accuracy loss for use cases like RAG", "High-volume narrow tasks where a large model is overkill"]
             ]},
            {"type": "h", "text": "Instance-based cost control: SageMaker AI Savings Plans"},
            {"type": "p", "text": "**SageMaker Savings Plans** reduce eligible SageMaker ML instance costs by **up to 64 percent** in exchange for a commitment to a consistent amount of usage, measured in dollars per hour, for a **one- or three-year** term. The discount applies automatically across instance families, sizes and Regions for notebooks, processing, training, real-time inference and batch transform; usage above the commitment is billed at on-demand rates. The strategic rule is the same as for provisioned throughput: commit only to the steady-state portion you are confident about, after the pilot proves demand."},
            {"type": "h", "text": "Cost planning and monitoring tools"},
            {"type": "ul", "items": [
              "**AWS Pricing Calculator** (free, no account needed) models solutions before you build them, shows upfront, monthly and annual costs, and exports estimates in CSV or PDF for stakeholders. Use it for the business case.",
              "**AWS Cost Explorer** visualizes actual cost and usage over time (current month plus the previous 12 months), filters and groups by service or tag, identifies trends and anomalies, and forecasts up to 12 months ahead. Use it to track spend against the business case and to spot runaway token consumption.",
              "**Tagging and budgets**: tag AI resources by initiative so cost per use case is visible, and set budget alerts so overspend triggers a review rather than a surprise invoice."
            ]},
            {"type": "h", "text": "Optimization strategies a strategist should know"},
            {"type": "ol", "items": [
              "**Right-size the model**: the Well-Architected Generative AI Lens recommends starting with a smaller model and increasing size only until quality is acceptable, then re-evaluating as models improve. Newer and larger is usually more expensive per token.",
              "**Match the pricing option to the workload pattern**: batch or Flex for non-urgent work, on-demand for variable interactive traffic, provisioned or reserved only for proven steady volume, Priority only where latency has business value.",
              "**Cut tokens**: shorter prompts, bounded response lengths, retrieval of only relevant context, and prompt caching for repeated prefixes.",
              "**Route and distil**: intelligent prompt routing and distillation move simple work to cheaper models.",
              "**Govern consumption**: per-team quotas, budgets, anomaly alerts and regular Cost Explorer reviews.",
              "**Revisit commitments** at each scale decision so discounts track real usage."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A media company's generative captioning service cost USD 60,000 per month on on-demand inference with a large model. The team moved overnight archive processing to batch inference (half price), switched live captions to a smaller model that passed quality tests, and cached the long style guide prefix. Monthly cost fell to about USD 22,000 with no measurable quality loss, which turned a marginal ROI into a clear one."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "Match the clue to the lever: non-urgent bulk work means batch inference (50 percent lower); repeated long context means prompt caching (up to 90 percent on cached input); mixed simple and complex prompts means intelligent prompt routing (up to 30 percent); steady predictable high volume means provisioned throughput or a Savings Plan (SageMaker, up to 64 percent); planning before build means Pricing Calculator; analysing actual spend means Cost Explorer; per-user pricing means Amazon Quick."},
            {"type": "scenario", "situation": "A marketing agency runs two generative AI workloads on Amazon Bedrock: a customer-facing chat assistant with spiky daytime traffic, and a nightly job that summarizes 200,000 social posts. Costs have doubled and the CFO wants a plan without hurting the chat experience.", "question": "What should the strategist recommend?", "answer": "Move the nightly summarization to batch inference (or the Flex tier) for roughly half the on-demand cost, since it is not time-critical. Keep the chat assistant on on-demand but right-size the model with quality testing, enable prompt caching for its long system prompt, and consider intelligent prompt routing to send simple questions to a smaller model. Tag both workloads, set budgets, and review Cost Explorer monthly. Provisioned throughput is not warranted for spiky traffic until volume is predictable."}
          ],
          "keyTerms": [
            {"term": "Token", "def": "A unit of text processed by a foundation model; Amazon Bedrock on-demand pricing is per input and output token."},
            {"term": "Provisioned throughput", "def": "Reserved Amazon Bedrock model capacity billed hourly per model unit, with no-commitment, 1-month or 6-month terms."},
            {"term": "Batch inference", "def": "Asynchronous processing of large jobs on Amazon Bedrock at 50 percent lower price than on-demand for supported models."},
            {"term": "Prompt caching", "def": "Reusing a repeated prompt prefix so cached input tokens are billed at a steep discount (up to 90 percent)."},
            {"term": "Intelligent prompt routing", "def": "Automatically sending each prompt to the most cost-effective model in a family that can meet quality needs; up to 30 percent savings."},
            {"term": "SageMaker Savings Plans", "def": "A one- or three-year dollars-per-hour commitment that cuts eligible SageMaker instance costs by up to 64 percent."},
            {"term": "AWS Pricing Calculator", "def": "A free planning tool to estimate AWS costs before building and share estimates."},
            {"term": "AWS Cost Explorer", "def": "A tool to visualize, analyse and forecast actual AWS cost and usage over time."}
          ],
          "examTips": [
            "Know the three structures: consumption (Bedrock tokens), instance (SageMaker AI), seat (Amazon Quick).",
            "Commitments (provisioned throughput, Savings Plans) are for proven steady workloads; on-demand for variable or experimental ones.",
            "Pricing Calculator is before (planning); Cost Explorer is after (actuals and forecasts)."
          ],
          "sources": [
            {"title": "Amazon Bedrock pricing", "url": "https://aws.amazon.com/bedrock/pricing/"},
            {"title": "Amazon Bedrock cost optimization", "url": "https://aws.amazon.com/bedrock/cost-optimization/"},
            {"title": "Amazon Bedrock service tiers", "url": "https://aws.amazon.com/bedrock/service-tiers/"},
            {"title": "AWS Machine Learning Blog: Optimizing cost and latency with Amazon Bedrock prompt caching", "url": "https://aws.amazon.com/blogs/machine-learning/optimizing-cost-and-latency-with-amazon-bedrock-prompt-caching/"},
            {"title": "Amazon Bedrock Intelligent Prompt Routing", "url": "https://aws.amazon.com/bedrock/intelligent-prompt-routing"},
            {"title": "Savings Plans for Machine Learning (SageMaker)", "url": "https://aws.amazon.com/savingsplans/ml-pricing/"},
            {"title": "Amazon SageMaker AI pricing", "url": "https://aws.amazon.com/sagemaker/ai/pricing/"},
            {"title": "Amazon Quick pricing", "url": "https://aws.amazon.com/quicksuite/pricing/"},
            {"title": "AWS Pricing Calculator User Guide: What is AWS Pricing Calculator?", "url": "https://docs.aws.amazon.com/pricing-calculator/latest/userguide/what-is-pricing-calculator.html"},
            {"title": "AWS Cost Explorer", "url": "https://aws.amazon.com/aws-cost-management/aws-cost-explorer/"},
            {"title": "AWS Well-Architected Generative AI Lens: GENCOST01-BP01 Right-size model selection", "url": "https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/gencost01-bp01.html"}
          ]
        }
      ]
    },
    {
      "id": "2.3",
      "title": "Position AI for competitive advantage.",
      "lessons": [
        {
          "id": "2.3.1",
          "skill": "Assess competitive landscapes and identify advantages to adopting AI.",
          "title": "Assessing the Competitive Landscape",
          "minutes": 12,
          "content": [
            {"type": "p", "text": "Positioning AI for advantage begins with an honest reading of the **competitive landscape**: who else is adopting AI, what it lets them do, and where your organization is exposed or ahead. Classic strategy tools still work; AI simply changes the forces. A practical approach is to run **Porter's five forces** with an AI lens and then ask, for each force, whether AI adoption defends, attacks or neutralizes it."},
            {"type": "table", "headers": ["Force", "How AI changes it", "Question for your organization"],
             "rows": [
               ["Rivalry among existing competitors", "Rivals use AI to cut cost to serve, personalize and speed product cycles", "Are competitors' AI moves visible in their pricing, service levels or release cadence?"],
               ["Threat of new entrants", "Foundation models and cloud platforms lower the capability barrier; AI-native entrants start lean", "What used to protect us (scale, expertise) and does AI erode it?"],
               ["Bargaining power of buyers", "Buyers expect instant, personalized, 24x7 service; AI makes switching easier through comparison and automation", "Will AI raise customer expectations faster than we can meet them?"],
               ["Bargaining power of suppliers", "Model and platform providers become strategic suppliers; data suppliers gain leverage", "How dependent are we on one model or vendor, and what is our exit path?"],
               ["Threat of substitutes", "AI-enabled services replace human-delivered ones (self-service advice, automated design)", "Which of our offerings can be substituted by an AI service?"]
             ]},
            {"type": "h", "text": "Identifying advantages to adopting AI"},
            {"type": "ul", "items": [
              "**Cost and speed advantage**: lower cost to serve, faster cycle times, which can fund price competitiveness or reinvestment.",
              "**Experience advantage**: personalization and responsiveness that raise retention and share of wallet.",
              "**Insight advantage**: faster, better decisions from data competitors cannot see, surfaced through tools such as an AI business assistant.",
              "**Innovation advantage**: shorter R&D and software cycles that bring products to market first.",
              "**Talent advantage**: attracting and keeping people who want to work with modern tools and are freed from routine work."
            ]},
            {"type": "h", "text": "Competitive timing"},
            {"type": "p", "text": "Adoption timing is itself a strategic choice. A **first mover** can capture data and learning advantages but bears higher cost and immature-technology risk. A **fast follower** learns from others' mistakes but may face customers whose expectations rivals have already reset. The right posture depends on how quickly AI is reshaping the industry's economics and whether the advantage compounds (see 2.3.3)."},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A regional accounting firm mapped its landscape and found that national competitors were offering AI-assisted bookkeeping at a lower price while fintech entrants offered fully automated filing for small businesses (a substitute). Its advantage was deep client relationships and industry-specific judgment. It adopted AI to automate routine bookkeeping, matched competitor pricing, and repositioned staff toward advisory work that the substitutes could not deliver."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "When asked to assess a competitive landscape, the best answer analyses competitors, entrants, substitutes, customers and suppliers systematically and links each to an AI opportunity or threat. Options that jump straight to adopting a specific technology without analysing the landscape are distractors. Watch for supplier power in the form of model or vendor dependence."},
            {"type": "scenario", "situation": "A mid-sized insurer notices that two large competitors now settle simple claims in minutes using AI, and an AI-native startup is offering usage-based policies. The insurer's board asks what advantage AI adoption would give it.", "question": "How should the strategist frame the answer?", "answer": "Use a structured landscape assessment: rivalry (competitors have reset settlement speed expectations), substitutes and entrants (usage-based AI-native products), buyer power (customers can now compare instantly). Advantages of adopting AI include matching settlement speed to protect retention, lowering loss-adjustment cost to fund competitive pricing, and using the insurer's proprietary claims history for pricing insight the startup lacks. Timing matters: being a fast follower on claims automation is defensive and urgent, while usage-based products are a longer-term option."}
          ],
          "keyTerms": [
            {"term": "Competitive landscape", "def": "The set of rivals, entrants, substitutes, customers and suppliers that shape an organization's strategic position."},
            {"term": "Porter's five forces", "def": "A framework analysing industry attractiveness through rivalry, new entrants, substitutes, buyer power and supplier power."},
            {"term": "First mover versus fast follower", "def": "Adopting early to capture learning and data advantages versus adopting after others to reduce risk and cost."},
            {"term": "Cost to serve", "def": "The total cost of delivering a product or service to a customer; a common AI-driven advantage."}
          ],
          "examTips": [
            "Assess the landscape systematically before prescribing AI; list threats and opportunities per force.",
            "AI lowers barriers to entry and raises customer expectations; both show up as threats in scenarios.",
            "Model and vendor dependence is supplier power; it belongs in the assessment."
          ],
          "sources": [
            {"title": "Harvard Business Review: Competing in the Age of AI (Iansiti and Lakhani, 2020)", "url": "https://hbr.org/2020/01/competing-in-the-age-of-ai"},
            {"title": "McKinsey: The state of AI in 2025: Agents, innovation, and transformation", "url": "https://www.mckinsey.com/featured-insights/artificial-intelligence/the-state-of-ai-2025"}
          ]
        },
        {
          "id": "2.3.2",
          "skill": "Identify opportunities to transform business models by using AI solutions.",
          "title": "Transforming Business Models with AI",
          "minutes": 13,
          "content": [
            {"type": "p", "text": "Most AI value today is **operational**: doing the current business cheaper and faster. **Business model transformation** goes further, changing *what* you sell, *how* you deliver it, *who* you serve, or *how* you make money. The exam distinguishes incremental efficiency from transformation and expects you to spot transformation opportunities in a scenario. McKinsey's 2025 State of AI survey found that high-performing AI adopters are more than three times as likely as others to intend to use AI for transformative change rather than incremental improvement."},
            {"type": "h", "text": "Patterns of AI-enabled business model change"},
            {"type": "table", "headers": ["Pattern", "What changes", "Illustration"],
             "rows": [
               ["Product to service (servitization)", "Sell outcomes or uptime instead of equipment, using predictive models to manage risk", "An equipment maker sells guaranteed availability with AI-driven predictive maintenance"],
               ["Mass personalization", "Each customer gets a tailored product, price or experience at scale", "A retailer generates individualized offers and content for millions of customers"],
               ["Platform and ecosystem", "AI matches supply and demand or orchestrates partners, creating network effects", "A marketplace uses AI to match, price and verify transactions between third parties"],
               ["Data and insight as a product", "Monetize proprietary data through AI-derived insights or models", "A logistics firm sells demand forecasts to suppliers"],
               ["Outcome- or usage-based pricing", "Charge for results delivered or units consumed, enabled by AI measurement and risk pricing", "Pay-per-successful-resolution customer service; usage-based insurance"],
               ["Radical cost structure", "Serve far more customers per employee by having AI run core operations", "Ant Group's Alipay-based businesses served over ten times as many customers as the largest US banks with under a tenth of the employees (HBR, 2020)"],
               ["New markets and segments", "Serve customers previously uneconomic to reach", "AI-assisted advice makes wealth management viable for small accounts"]
             ]},
            {"type": "h", "text": "Finding transformation opportunities"},
            {"type": "ol", "items": [
              "Ask what customers actually want to achieve, not what they buy today; AI often lets you sell the outcome.",
              "Look at steps in the value chain where human judgment is the bottleneck to scale; AI can remove the scale limit.",
              "Inventory proprietary data exhaust that others would pay for or that would let you price risk differently.",
              "Identify segments you cannot serve profitably today because of service cost.",
              "Test the model change as a bounded experiment (one segment, one region) with explicit KPIs before committing the brand."
            ]},
            {"type": "callout", "kind": "warning", "title": "Transformation is not free", "text": "Changing a business model shifts risk (you may now bear outcome risk), demands new capabilities (pricing, data science, service operations), and triggers governance questions (fairness in personalized pricing, regulatory status of new services). The strategist should pair every transformation idea with the governance and readiness work from Domains 3 and 4."},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A commercial HVAC manufacturer moved from selling chillers to selling guaranteed building-comfort outcomes. Sensor data and predictive models on AWS let it schedule maintenance before failures and price multi-year outcome contracts with confidence. Revenue became recurring, customer retention rose, and the data it collected improved the next product generation, a flywheel competitors selling boxes could not copy."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "If a question asks for a business model transformation, choose the option that changes the revenue model, the offering, or the customer relationship (servitization, personalization at scale, platform, data monetization, outcome pricing). Options that merely automate an internal process are operational improvements, not transformation, even if they are good ideas."},
            {"type": "scenario", "situation": "A regional bank has used AI to cut loan-processing costs by 30 percent. The CEO asks whether AI could change the business model rather than just the cost base.", "question": "What opportunities should the strategist identify?", "answer": "Options include embedded lending offered through partner platforms using AI credit decisioning (platform and new segments), personalized financial-coaching subscriptions for retail customers (new service), AI-enabled small-business cash-flow products previously too costly to underwrite (new market), and insight services for merchants built on anonymized transaction data (data as a product, subject to privacy governance). Each should be tested as a bounded pilot with KPIs for revenue mix and customer retention."}
          ],
          "keyTerms": [
            {"term": "Business model", "def": "How an organization creates, delivers and captures value: offering, customers, channels, cost structure and revenue model."},
            {"term": "Servitization", "def": "Shifting from selling products to selling services or outcomes, often enabled by predictive AI."},
            {"term": "Mass personalization", "def": "Tailoring products, prices or experiences to each customer at scale using AI."},
            {"term": "Outcome-based pricing", "def": "Charging customers for results delivered rather than for inputs or licences."},
            {"term": "Data monetization", "def": "Creating revenue from proprietary data through insights, models or data products."}
          ],
          "examTips": [
            "Transformation changes what you sell, how you earn, or whom you serve; automation alone is operational improvement.",
            "Pair transformation ideas with governance and readiness considerations; the exam likes balanced answers.",
            "Pilot business model changes in a bounded segment before scaling."
          ],
          "sources": [
            {"title": "Harvard Business Review: Competing in the Age of AI (Iansiti and Lakhani, 2020)", "url": "https://hbr.org/2020/01/competing-in-the-age-of-ai"},
            {"title": "McKinsey: The state of AI in 2025: Agents, innovation, and transformation", "url": "https://www.mckinsey.com/featured-insights/artificial-intelligence/the-state-of-ai-2025"}
          ]
        },
        {
          "id": "2.3.3",
          "skill": "Describe how AI creates sustainable competitive advantages and operational improvements.",
          "title": "Sustainable Advantage and Operations",
          "minutes": 13,
          "content": [
            {"type": "p", "text": "A **sustainable competitive advantage** is one that rivals cannot quickly copy. Because foundation models are available to everyone through platforms such as Amazon Bedrock, the model itself is rarely the advantage. Sustainability comes from what surrounds the model: proprietary data, learning loops, integration into workflows, distribution and trust. The exam asks you to describe these mechanisms and to distinguish durable advantages from temporary ones."},
            {"type": "h", "text": "Sources of durable AI advantage"},
            {"type": "table", "headers": ["Source", "Mechanism", "Durability and caveats"],
             "rows": [
               ["Proprietary data (data moat)", "Unique, hard-to-replicate data (transactions, sensor readings, outcomes) improves model quality and grounding", "Durable if data is exclusive and keeps accruing; weak if similar data is public or purchasable"],
               ["Learning loop (flywheel)", "Usage generates feedback that improves the product, which attracts more usage", "Strongest when improvement is visible to customers; research by Hagiu and Wright notes data-enabled learning is often weaker and shorter-lived than classic network effects, so do not overclaim"],
               ["Network effects", "Each additional user or partner makes the service more valuable to others (marketplaces, platforms)", "Very durable once established; AI can accelerate them by improving matching and trust"],
               ["Workflow integration and switching costs", "AI embedded deeply in customer or employee workflows is costly to replace", "Durable; mirrors the MIT finding that integrated deployments captured value while standalone pilots stalled"],
               ["Organizational capability", "Governance, talent, data platforms and a culture of experimentation let you deploy new models faster than rivals", "Durable because it is tacit and slow to build; HBR describes this as the AI factory"],
               ["Brand and trust", "Responsible AI practices and reliability earn permission to use customer data and automate decisions", "Durable but fragile; one incident can erase it"],
               ["Scale economics", "Spreading fixed AI costs over more volume; negotiating committed pricing", "Moderate; cloud pricing lets smaller rivals access similar unit costs"]
             ]},
            {"type": "h", "text": "Operational improvements that compound"},
            {"type": "p", "text": "AI's operational gains are not one-off. Lower cost to serve funds price moves or reinvestment; faster cycle times mean more experiments per year; better forecasts reduce inventory and working capital; automated quality checks reduce rework. Iansiti and Lakhani argue that AI-driven operating models remove traditional limits on **scale, scope and learning**: they can serve many more customers per employee, extend into adjacent offerings quickly, and improve continuously. The compounding effect, not any single improvement, is what rivals struggle to match."},
            {"type": "ul", "items": [
              "**Temporary advantages**: being first to use a public model, a clever prompt, a vendor feature. Rivals copy these in months.",
              "**Durable advantages**: exclusive data, integrated workflows, learning loops, network effects, organizational capability, trust.",
              "**Strategist's job**: convert temporary wins into durable ones by capturing feedback data, embedding AI in workflows and building capability, rather than chasing the next model."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "Two online retailers launched generative shopping assistants in the same quarter using the same foundation model. One treated it as a chatbot; the other logged every interaction and outcome, used the data to refine recommendations and grounding content weekly, and integrated the assistant into checkout and returns. A year later the second retailer's conversion uplift was three times larger and still growing, while the first had plateaued. Same model, different moat."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "When asked what makes an AI advantage SUSTAINABLE, prefer proprietary data, feedback loops, workflow integration, network effects and organizational capability. Options based on access to a particular model or being first are temporary. Be cautious of any option claiming data alone guarantees a moat; the better answer links data to an ongoing learning loop."},
            {"type": "scenario", "situation": "A consumer lender built a credit-decisioning model on a public foundation model and has a six-month lead over competitors. The CEO wants to know how to keep the advantage when rivals can use the same model.", "question": "What should the strategist advise?", "answer": "Shift the advantage from the model to the system around it: capture repayment outcomes to continuously retrain and calibrate (learning loop on proprietary data), embed decisions into partner checkout flows to raise switching costs and volume (distribution and workflow integration), invest in governance that earns regulator and customer trust to use richer data responsibly, and build the internal capability to adopt new models quickly. The model lead will erode; the data, integration and capability lead can compound."}
          ],
          "keyTerms": [
            {"term": "Sustainable competitive advantage", "def": "A position of superior value or cost that competitors cannot quickly replicate."},
            {"term": "Data moat", "def": "A barrier to competition created by exclusive, accumulating data that improves AI performance."},
            {"term": "Network effect", "def": "A product becomes more valuable to each user as more users or partners join."},
            {"term": "Flywheel (learning loop)", "def": "A self-reinforcing cycle where usage generates data that improves the product and attracts more usage."},
            {"term": "AI factory", "def": "Iansiti and Lakhani's term for an operating model in which data pipelines, algorithms and experimentation continuously drive decisions at scale."}
          ],
          "examTips": [
            "The model is a commodity; the moat is data plus loops plus integration plus capability.",
            "Compounding operational improvements (cost, speed, learning) are the mechanism of durable advantage.",
            "Distinguish temporary (first to a model) from durable (exclusive data and workflows) in every option."
          ],
          "sources": [
            {"title": "Harvard Business Review: Competing in the Age of AI (Iansiti and Lakhani, 2020)", "url": "https://hbr.org/2020/01/competing-in-the-age-of-ai"},
            {"title": "Harvard D^3 Institute: Data-enabled learning, network effects, and competitive advantage (Hagiu and Wright)", "url": "https://d3.harvard.edu/?p=8991"},
            {"title": "Computing: MIT report: 95% of corporate generative AI pilots fail to deliver returns", "url": "https://computing.co.uk/news/2025/ai/mit-report-95pc-corporate-generative-ai-pilots-fail"}
          ]
        },
        {
          "id": "2.3.4",
          "skill": "Determine appropriate AI investment levels based on industry maturity and competitive dynamics.",
          "title": "Setting AI Investment Levels",
          "minutes": 13,
          "content": [
            {"type": "p", "text": "How much to invest in AI is a strategic judgment, not a benchmark lookup. Two variables dominate: the **AI maturity of your industry** (how far adoption has progressed and how much it has already changed economics) and the **competitive dynamics** you face (how aggressive rivals and entrants are, and how fast advantages compound). The exam expects you to reason from these to an investment posture and to avoid both under-investing in a fast-moving market and over-investing in an immature one."},
            {"type": "h", "text": "What the evidence says about where companies are"},
            {"type": "p", "text": "McKinsey's 2025 State of AI survey found that while most organizations use AI somewhere, only about **39 percent** reported any enterprise-level impact on earnings before interest and taxes (EBIT), and only around **6 percent** qualified as high performers attributing five percent or more of EBIT to AI. Nearly two-thirds had not yet begun scaling AI across the enterprise. The gap between adopters and value-capturers means that in many industries the race is still open, and that investment should be judged by capability to capture value, not by headline spend."},
            {"type": "table", "headers": ["Industry AI maturity", "Competitive dynamics", "Recommended posture", "Investment emphasis"],
             "rows": [
               ["Nascent (few proven use cases, unclear regulation)", "Low pressure", "Explore and learn", "Small, time-boxed experiments; data foundations; literacy; avoid long commitments"],
               ["Nascent", "High pressure (AI-native entrants, aggressive rival)", "Selective lead", "Fund one or two lighthouse use cases tied to the threatened revenue; build data moat early"],
               ["Emerging (proven use cases, early adopters gaining)", "Moderate", "Fast follow", "Scale proven patterns quickly (customer operations, software, marketing); invest in platform and governance to deploy repeatedly"],
               ["Emerging", "High", "Lead", "Significant, sustained investment in differentiating use cases, proprietary data, talent and change; accept lower near-term ROI for position"],
               ["Mature (AI is table stakes)", "Any", "Defend and differentiate", "Efficient operation of commodity AI (buy, optimize cost); concentrate new spend on genuinely differentiating data and business model moves"]
             ]},
            {"type": "h", "text": "Principles for sizing investment"},
            {"type": "ul", "items": [
              "**Portfolio balance**: a common pattern allocates most spend to scaling proven use cases, a smaller share to adjacent bets, and a small share to exploratory options. The exact split depends on maturity and dynamics.",
              "**Invest in enablers proportionally**: data quality, governance and workforce skills are what separate the 6 percent from the rest; an investment plan that is all applications and no foundations is a warning sign.",
              "**Stage the commitment**: fund pilots on consumption pricing, then move to committed pricing (provisioned throughput, Savings Plans) and larger budgets as adoption and unit economics are proven.",
              "**Benchmark against competitors' moves, not their spend**: what matters is whether rivals are resetting customer expectations or cost structures.",
              "**Define the cost of inaction**: in high-pressure dynamics, lost share and margin from standing still belong in the business case."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example", "text": "A specialty chemicals company judged its industry AI maturity as nascent and competitive pressure as low. Rather than a large program, it funded a two-year foundation effort: data platform, governance, literacy, and three small experiments in R&D formulation and demand forecasting. When a competitor announced an AI-driven custom-formulation service, the company's data and governance foundations let it move to a lead posture within six months instead of starting from zero."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "Match posture to the two variables. Nascent industry plus low pressure means explore with small, time-boxed investment and foundations. High pressure or AI-native entrants means invest decisively in the threatened area even if ROI is slower. Mature industry means AI is table stakes: buy efficiently and spend new money only on differentiation. Options proposing a fixed percentage of revenue regardless of context are distractors."},
            {"type": "scenario", "situation": "A regional grocery chain operates in a market where national competitors already run AI-driven pricing, personalization and supply-chain optimization. The chain has strong local loyalty but thin margins and little AI experience.", "question": "What investment level and emphasis should the strategist recommend?", "answer": "The industry is emerging-to-mature for these use cases and competitive pressure is high, so under-investing is the greater risk. Recommend a decisive but staged program: buy or assemble proven capabilities (pricing, personalization) quickly rather than build, invest in data foundations and skills, and concentrate differentiating spend on the chain's unique asset, local loyalty data and community relationships. Fund pilots on consumption pricing and move to commitments as volumes prove out; include the cost of inaction (margin erosion) in the business case."}
          ],
          "keyTerms": [
            {"term": "Industry AI maturity", "def": "How far AI adoption has progressed and reshaped economics in a sector: nascent, emerging or mature."},
            {"term": "Competitive dynamics", "def": "The intensity and speed of rival and entrant moves that determine how urgently an organization must respond."},
            {"term": "Investment posture", "def": "The chosen stance toward AI spend: explore, fast follow, lead, or defend and differentiate."},
            {"term": "Cost of inaction", "def": "The value lost by not investing, such as share, margin or talent erosion, included in a business case under high competitive pressure."},
            {"term": "EBIT", "def": "Earnings before interest and taxes; the profit measure McKinsey uses to define AI high performers."}
          ],
          "examTips": [
            "Two variables: industry maturity and competitive dynamics. Reason from both to a posture.",
            "Foundations (data, governance, skills) are part of investment level, not overhead.",
            "Stage commitments: consumption pricing for pilots, committed pricing and bigger budgets after proof."
          ],
          "sources": [
            {"title": "McKinsey: The state of AI in 2025: Agents, innovation, and transformation", "url": "https://www.mckinsey.com/featured-insights/artificial-intelligence/the-state-of-ai-2025"},
            {"title": "McKinsey Global Institute: The economic potential of generative AI: The next productivity frontier", "url": "https://www.mckinsey.com/mgi/our-research/the-economic-potential-of-generative-ai-the-next-productivity-frontier/"},
            {"title": "AWS Machine Learning Blog: Navigating the generative AI journey: The Path-to-Value framework from AWS", "url": "https://aws.amazon.com/blogs/machine-learning/navigating-the-generative-ai-journey-the-path-to-value-framework-from-aws/"}
          ]
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "d2-q01",
      "skill": "2.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A telecommunications company wants to begin its generative AI program with the use case most likely to deliver significant, measurable value. Which option is the MOST appropriate first use case?",
      "options": [
        "Train a proprietary foundation model on the company's network logs to differentiate from competitors.",
        "Deploy an agent-assist and call-summarization capability in the contact center that handles 4 million calls per year.",
        "Generate AI artwork for the company's annual report to reduce design agency fees.",
        "Build an internal chatbot that answers questions about the office parking policy."
      ],
      "answer": [1],
      "explanation": "Customer operations is one of the four functions where most generative AI value concentrates, the process is high-volume and repetitive, the company owns the transcript data, and the outcome (handle time, cost per contact) is already measured. Training a proprietary model is technology-first, expensive and has no defined outcome. Annual report artwork and parking-policy chatbots are low-volume with negligible financial impact."
    },
    {
      "id": "d2-q02",
      "skill": "2.1.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A consumer goods company is mapping AI capabilities to business outcomes. Which TWO statements correctly map a capability to an outcome?",
      "options": [
        "Generative summarization of customer reviews maps to faster product-insight cycle time for the R&D team.",
        "Demand forecasting with machine learning maps to higher Net Promoter Score among retail partners.",
        "Personalized offer generation for marketing maps to improved conversion rate and revenue per customer.",
        "Code generation for the software team maps directly to reduced raw-material costs.",
        "Document extraction for invoices maps to higher brand awareness."
      ],
      "answer": [0, 2],
      "explanation": "Summarizing unstructured review text speeds insight for R&D, and personalized offers move conversion and revenue per customer; both are direct capability-to-outcome links. Demand forecasting primarily improves inventory and service levels, not partner NPS directly. Code generation affects developer cycle time, not raw-material cost. Invoice extraction affects processing cost per document, not brand awareness."
    },
    {
      "id": "d2-q03",
      "skill": "2.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A hospital group must deploy an AI-based medical-coding assistant within five months. It has a two-person analytics team, strict patient-data regulations, and a fixed budget. Several vendors have proposed products. Which approach is MOST appropriate?",
      "options": [
        "Build a custom model on Amazon SageMaker AI to retain full control of the algorithm.",
        "Buy a vetted product, trialing it through AWS Marketplace and evaluating vendor data-use, residency and audit terms before purchase.",
        "Partner with a research university to develop a novel coding model over 18 months.",
        "Wait until the analytics team has grown before making any sourcing decision."
      ],
      "answer": [1],
      "explanation": "The short timeline, small team and non-differentiating process favor buying, while the regulatory requirements mean vendor evaluation (data use, residency, audit evidence) is essential; AWS Marketplace trials and private offers support exactly this. A custom SageMaker AI build is infeasible in five months with two people. An 18-month research partnership misses the deadline. Waiting ignores the business need."
    },
    {
      "id": "d2-q04",
      "skill": "2.1.2",
      "type": "multi",
      "difficulty": "medium",
      "question": "A procurement leader is explaining how AWS Marketplace supports build-buy-partner decisions for AI. Which TWO benefits are correctly described?",
      "options": [
        "Private offers allow negotiated pricing and terms with a software vendor through the Marketplace.",
        "AWS Marketplace automatically fine-tunes any purchased model on the buyer's data.",
        "A Private Marketplace lets an organization restrict purchases to a pre-approved catalog of vendor products.",
        "AWS Marketplace guarantees that every listed AI product is compliant with all industry regulations.",
        "Marketplace purchases are always free for the first year."
      ],
      "answer": [0, 2],
      "explanation": "Private offers (negotiated terms) and Private Marketplace (governed, pre-approved catalogs) are documented Marketplace features that reduce the cost and risk of buying. Marketplace does not fine-tune models, does not guarantee regulatory compliance (buyers must evaluate this), and does not make products free for a year, although many listings offer free trials."
    },
    {
      "id": "d2-q05",
      "skill": "2.1.3",
      "type": "single",
      "difficulty": "medium",
      "question": "An AI steering committee has 12 candidate initiatives and budget for four. Which approach to prioritization is MOST aligned with recommended practice?",
      "options": [
        "Fund the four initiatives proposed by the most senior executives.",
        "Fund the four that use the newest foundation models to maximize learning.",
        "Score each initiative on business value, feasibility, sustainability and strategic alignment, then fund the top-ranked ones and set stage-gate criteria.",
        "Fund all 12 at reduced budgets so no team is disappointed."
      ],
      "answer": [2],
      "explanation": "The exam names four prioritization criteria: value, feasibility, sustainability and strategic alignment, applied with stage gates for later scale, pause or terminate decisions. Seniority-based and technology-based selection ignore value and feasibility. Spreading budget across all 12 starves every initiative and avoids the prioritization decision."
    },
    {
      "id": "d2-q06",
      "skill": "2.1.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A generative AI pilot for marketing copy has produced technically excellent output for nine months, but campaign conversion rates are unchanged versus the baseline and the team requests more budget to add image generation. The initiative is strategically aligned. What should the committee decide?",
      "options": [
        "Scale the initiative because the output quality is high.",
        "Terminate or pause according to the predefined stage-gate criteria, since the business KPI was not met.",
        "Approve the additional budget so the pilot can find a use for the technology.",
        "Extend the pilot indefinitely while the team experiments."
      ],
      "answer": [1],
      "explanation": "Technical quality without business impact after nine months fails the value criterion; the disciplined decision is to pause or terminate on the agreed criteria and redeploy budget. Scaling on output quality alone, adding features in search of value, or extending indefinitely are sunk-cost behaviors the exam penalizes."
    },
    {
      "id": "d2-q07",
      "skill": "2.1.4",
      "type": "single",
      "difficulty": "easy",
      "question": "A payroll provider proposes using a large language model to calculate statutory tax withholdings for each employee. Withholding rules are published, change on known dates, and errors incur penalties. What should the AI strategist recommend?",
      "options": [
        "Proceed, because large language models handle numbers well.",
        "Use a rules-based calculation engine, since the logic is deterministic and must be exactly correct.",
        "Fine-tune the model on last year's payroll data to improve accuracy.",
        "Use the model but accept a small error rate as the cost of innovation."
      ],
      "answer": [1],
      "explanation": "When logic is fully known, stable and must be 100 percent accurate, a deterministic rules engine is cheaper and exactly correct; a probabilistic model adds cost and error. Fine-tuning does not eliminate probabilistic error, and accepting penalties for innovation is not a defensible business decision."
    },
    {
      "id": "d2-q08",
      "skill": "2.1.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "Which THREE situations indicate that AI is probably NOT the appropriate solution for a business problem?",
      "options": [
        "The requirement is a monthly report of sales by region and product category.",
        "The organization has no historical data for the task and is not permitted to collect it.",
        "The process involves reading thousands of free-text complaint emails per day.",
        "The decision is made twice a year by a small expert committee.",
        "Customer demand varies in ways that are hard to express as rules and must be forecast weekly."
      ],
      "answer": [0, 1, 3],
      "explanation": "A descriptive sales report is a business intelligence task, not an AI task; lack of usable data makes a model impossible and points to a data initiative first; a twice-yearly expert decision has too little volume to justify AI cost. Reading free-text complaints at scale and forecasting hard-to-codify demand are classic AI fits."
    },
    {
      "id": "d2-q09",
      "skill": "2.1.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A retailer is moving its customer-support chatbot from a foundation model that has entered Legacy status on Amazon Bedrock to the recommended successor model. Which plan BEST addresses business continuity and performance impact?",
      "options": [
        "Update the model identifier in production on the end-of-life date and monitor for complaints.",
        "Evaluate the successor side by side on real customer queries, adjust prompts, roll out in phases with a rollback path, and monitor after cutover.",
        "Stop using the chatbot until the vendor migrates it automatically.",
        "Switch to the successor only in the region with the most customers to maximize learning."
      ],
      "answer": [1],
      "explanation": "AWS guidance for model lifecycle migration is to assess dependencies, adjust prompts, test side by side for quality, latency and cost, migrate in phases with rollback, and monitor. Migration is not automatic, so waiting for the vendor fails. A same-day switch on the EOL date is a big-bang cutover with no evaluation. Starting with the largest region maximizes risk rather than learning."
    },
    {
      "id": "d2-q10",
      "skill": "2.2.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A company deploys a generative AI assistant for its customer-service agents. Which KPI is the BEST example of an intangible benefit?",
      "options": [
        "Reduction in cost per customer contact",
        "Increase in customer satisfaction (CSAT) score",
        "Reduction in contractor spend",
        "Number of prompts submitted to the assistant"
      ],
      "answer": [1],
      "explanation": "Customer satisfaction is the exam guide's own example of an intangible benefit: real, but measured through a proxy rather than directly in currency. Cost per contact and contractor spend are tangible cost reductions. Number of prompts is an activity (vanity) metric, not a benefit at all."
    },
    {
      "id": "d2-q11",
      "skill": "2.2.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A CFO asks for a balanced KPI set for an AI-powered invoice-processing initiative. Which THREE KPIs together form the MOST appropriate set?",
      "options": [
        "Cost per invoice processed compared with the pre-AI baseline",
        "Percentage of invoices processed without human correction (quality guardrail)",
        "Model training loss on the validation dataset",
        "Finance team satisfaction with the new process (survey score)",
        "Number of AI vendors evaluated during procurement"
      ],
      "answer": [0, 1, 3],
      "explanation": "A good set pairs a tangible outcome (cost per invoice versus baseline) with a quality guardrail (straight-through rate without correction) and an intangible benefit (employee satisfaction). Training loss is a model metric meaningless to the CFO, and vendors evaluated is an activity count unrelated to value."
    },
    {
      "id": "d2-q12",
      "skill": "2.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "Six months after rolling out an AI sales assistant to all 1,500 representatives, a company cannot tell whether a 12 percent rise in revenue is due to the assistant or to a price increase and seasonal demand. What was the MOST significant omission?",
      "options": [
        "The company did not use the most capable foundation model.",
        "The company did not establish baseline metrics and a comparison design, such as a staged rollout or control group, before deployment.",
        "The company did not purchase provisioned throughput.",
        "The company measured revenue instead of model accuracy."
      ],
      "answer": [1],
      "explanation": "Without a pre-deployment baseline and a control group or staggered rollout, the effect of the assistant cannot be separated from confounders such as pricing and seasonality. Model choice and pricing options do not affect attribution. Revenue is the right business outcome to measure; the problem is attribution, not the metric."
    },
    {
      "id": "d2-q13",
      "skill": "2.2.3",
      "type": "single",
      "difficulty": "hard",
      "question": "An AI business case claims a 350 percent ROI by multiplying 20 minutes saved per employee per day across 2,000 employees by average salary, and lists the Amazon Bedrock token bill as the only cost. Which revision would make the ROI calculation MOST comprehensive and credible?",
      "options": [
        "Increase the time saved estimate to 30 minutes to reflect future model improvements.",
        "Apply a realization factor to time savings, add evidence-based revenue or quality benefits, and expand costs to full total cost of ownership including integration, training, human review, governance and change management.",
        "Remove the time-savings benefit entirely and present only the token cost.",
        "Replace the ROI figure with the model's accuracy score."
      ],
      "answer": [1],
      "explanation": "A comprehensive ROI counts multiple benefit categories realistically (time savings adjusted for how much is actually redeployed, plus cost, revenue or productivity gains with evidence) against total cost of ownership, not just inference fees. Inflating time saved worsens credibility, removing benefits is not an ROI, and accuracy is not a financial measure."
    },
    {
      "id": "d2-q14",
      "skill": "2.2.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A three-year AI initiative is projected to deliver USD 2.4 million in benefits (time savings, cost reduction and revenue uplift) against total costs of USD 1.5 million including build, inference, people, governance and change. What is the approximate ROI?",
      "options": [
        "37 percent",
        "60 percent",
        "160 percent",
        "240 percent"
      ],
      "answer": [1],
      "explanation": "ROI = (benefits minus costs) divided by costs = (2.4 minus 1.5) / 1.5 = 0.9 / 1.5 = 60 percent. 160 percent would be benefits divided by costs without subtracting cost; 37 percent is net benefit divided by benefits; 240 percent misreads the benefit figure."
    },
    {
      "id": "d2-q15",
      "skill": "2.2.4",
      "type": "single",
      "difficulty": "medium",
      "question": "Two months into a twelve-month AI underwriting program whose financial outcome (loss ratio) cannot be measured for 18 months, the sponsor wants an early signal of whether the project is on track. Which metric is the BEST leading indicator?",
      "options": [
        "Year-over-year change in the company's loss ratio",
        "Percentage of underwriters actively using the tool and accepting its recommendations each week",
        "Total project spend to date",
        "Annual revenue growth of the underwriting division"
      ],
      "answer": [1],
      "explanation": "Adoption and acceptance rates are early, actionable signals that predict whether the financial outcome will follow. Loss ratio and revenue growth are lagging outcomes that arrive too late to act on. Spend to date measures input, not progress toward value."
    },
    {
      "id": "d2-q16",
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "easy",
      "question": "Which statement correctly matches an AWS AI service to its primary pricing structure?",
      "options": [
        "Amazon Bedrock on-demand inference is priced per user per month.",
        "Amazon SageMaker AI is priced per input and output token.",
        "Amazon Quick is priced per user per month (seat-based), with an infrastructure fee for Professional and Enterprise accounts.",
        "AWS Pricing Calculator charges a monthly subscription for cost estimates."
      ],
      "answer": [2],
      "explanation": "Amazon Quick is seat-based (for example, Professional USD 20 and Enterprise USD 40 per user per month plus a USD 250 per account per month infrastructure fee). Amazon Bedrock on-demand is consumption-based per token, SageMaker AI is instance-based (billed by duration), and the AWS Pricing Calculator is free."
    },
    {
      "id": "d2-q17",
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A media company runs a nightly job on Amazon Bedrock that summarizes 500,000 articles. Results are needed by the next morning. Inference costs are the largest line in the AI budget. Which change would MOST reduce cost without affecting the business requirement?",
      "options": [
        "Purchase provisioned throughput with a six-month commitment for the nightly job.",
        "Move the job to batch inference, which is priced 50 percent lower than on-demand for supported models.",
        "Use the Priority service tier to finish the job faster.",
        "Switch the job to Amazon Quick."
      ],
      "answer": [1],
      "explanation": "A large non-time-critical job is the textbook case for batch inference at 50 percent below on-demand. Provisioned throughput bills hourly whether or not it is used and suits steady interactive traffic, not a nightly burst. Priority costs a 75 percent premium for latency the job does not need. Amazon Quick is a seat-based business assistant, not a bulk summarization engine."
    },
    {
      "id": "d2-q18",
      "skill": "2.2.5",
      "type": "multi",
      "difficulty": "hard",
      "question": "A financial services company's customer-facing generative AI assistant on Amazon Bedrock has a 6,000-token system prompt and policy document that is sent with every request, and about 70 percent of questions are simple balance or hours inquiries. Costs are rising with usage. Which TWO optimization strategies are MOST appropriate?",
      "options": [
        "Enable prompt caching so the repeated system prompt and policy prefix is billed at the discounted cached-input rate.",
        "Use intelligent prompt routing so simple questions go to a smaller, cheaper model in the same family while complex ones go to the larger model.",
        "Move all customer requests to batch inference to get the 50 percent discount.",
        "Purchase a three-year SageMaker Savings Plan to cover the Bedrock usage.",
        "Switch every request to the Priority tier to reduce cost."
      ],
      "answer": [0, 1],
      "explanation": "A long repeated prefix is exactly what prompt caching discounts (up to 90 percent on cached input tokens), and a mix of simple and complex prompts is the use case for intelligent prompt routing (up to 30 percent savings). Batch inference is asynchronous and unsuitable for live customer chat. SageMaker Savings Plans apply to SageMaker instance usage, not Bedrock tokens. Priority tier costs 75 percent more, not less."
    },
    {
      "id": "d2-q19",
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A data science team runs custom model training and real-time inference on Amazon SageMaker AI with steady, predictable instance usage that has been stable for eight months. Which option offers the LARGEST sustained cost reduction with the least operational change?",
      "options": [
        "Commit to a SageMaker Savings Plan (one- or three-year dollars-per-hour commitment) covering the steady-state usage, which can reduce costs by up to 64 percent.",
        "Move the workloads to Amazon Bedrock batch inference.",
        "Enable prompt caching on the SageMaker endpoints.",
        "Switch the team to Amazon Quick seats."
      ],
      "answer": [0],
      "explanation": "SageMaker Savings Plans are the instance-based cost-optimization lever for predictable SageMaker usage, offering up to 64 percent savings and applying automatically across instance families and Regions. Batch inference and prompt caching are Amazon Bedrock features for foundation-model inference. Amazon Quick is a business assistant and BI product, not a replacement for custom model training."
    },
    {
      "id": "d2-q20",
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "easy",
      "question": "An AI program manager needs to (1) estimate the cost of a proposed Amazon Bedrock solution for the business case before anything is built, and (2) later analyze actual monthly AI spend trends and forecast the next quarter. Which AWS tools fit these two needs respectively?",
      "options": [
        "AWS Cost Explorer for both",
        "AWS Pricing Calculator for the estimate, then AWS Cost Explorer for actual spend analysis and forecasting",
        "AWS Marketplace for the estimate, then AWS Pricing Calculator for actuals",
        "Amazon Quick for the estimate, then AWS Marketplace for actuals"
      ],
      "answer": [1],
      "explanation": "AWS Pricing Calculator is a free planning tool for modeling costs before building; AWS Cost Explorer visualizes, analyzes and forecasts actual cost and usage after resources are running. Cost Explorer has no data for a solution that does not yet exist. Marketplace and Amazon Quick are not cost-planning tools."
    },
    {
      "id": "d2-q21",
      "skill": "2.3.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A regional bank's board asks for an assessment of how AI is changing its competitive landscape. Which response is MOST appropriate?",
      "options": [
        "Recommend immediately adopting the same chatbot vendor as the largest national bank.",
        "Analyze how AI affects rivals' cost to serve, new AI-native entrants, substitute AI-based services, rising customer expectations and dependence on model vendors, then identify where AI adoption defends or extends the bank's position.",
        "Conclude that AI is not relevant because the bank's customers value personal relationships.",
        "Benchmark the bank's AI spending as a percentage of revenue against competitors and match the average."
      ],
      "answer": [1],
      "explanation": "A competitive landscape assessment applies a structured view (rivalry, entrants, substitutes, buyer power, supplier power) through an AI lens and links findings to advantages of adoption. Copying a vendor skips analysis, dismissing AI ignores observable competitor moves, and matching spend percentages benchmarks inputs rather than competitive position."
    },
    {
      "id": "d2-q22",
      "skill": "2.3.2",
      "type": "single",
      "difficulty": "medium",
      "question": "An industrial equipment manufacturer has used AI to reduce internal maintenance costs. The CEO asks for an option that would TRANSFORM the business model rather than improve operations. Which option qualifies?",
      "options": [
        "Use AI to further automate the accounts payable process.",
        "Offer customers guaranteed equipment uptime as a subscription, using predictive maintenance models to manage the risk and price the contract.",
        "Deploy an AI assistant to help HR screen resumes faster.",
        "Use generative AI to draft internal maintenance manuals."
      ],
      "answer": [1],
      "explanation": "Moving from selling equipment to selling guaranteed uptime (servitization with outcome-based pricing) changes what the company sells and how it earns revenue, which is a business model transformation. Automating accounts payable, resume screening and manual drafting are internal operational improvements."
    },
    {
      "id": "d2-q23",
      "skill": "2.3.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A retailer launched a generative shopping assistant using a widely available foundation model and currently leads competitors on conversion. The CEO is concerned rivals can use the same model. Which strategy would make the advantage MOST sustainable?",
      "options": [
        "Sign an exclusive agreement to be the first to use each new version of the foundation model.",
        "Capture interaction and purchase outcome data to continuously improve recommendations and grounding, embed the assistant deeply into checkout and loyalty workflows, and build internal capability to adopt new models quickly.",
        "Keep the prompt templates secret.",
        "Increase advertising to announce the assistant before competitors launch theirs."
      ],
      "answer": [1],
      "explanation": "Sustainable AI advantage comes from proprietary data feeding a learning loop, workflow integration that raises switching costs, and organizational capability; the model itself is a commodity. Early access to model versions and secret prompts are temporary and easily matched; advertising does not change the underlying competitive position."
    },
    {
      "id": "d2-q24",
      "skill": "2.3.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "Which TWO statements accurately describe how AI creates sustainable competitive advantage or compounding operational improvement?",
      "options": [
        "A feedback loop in which usage data improves the product, attracting more usage, can compound advantage over time.",
        "Access to a public foundation model is by itself a durable competitive moat.",
        "Lower cost to serve and faster cycle times free resources that can be reinvested, so operational gains compound rather than occur once.",
        "Possessing large volumes of data guarantees a competitive advantage regardless of how it is used.",
        "Advantages from a clever prompt template typically last for many years."
      ],
      "answer": [0, 2],
      "explanation": "Learning loops and reinvested operational gains are the mechanisms by which AI advantage compounds. Public model access and prompt templates are available to rivals and are temporary. Data creates advantage only when it is exclusive and feeds an improving system; research on data-enabled learning cautions that data alone is often a weaker moat than assumed."
    },
    {
      "id": "d2-q25",
      "skill": "2.3.4",
      "type": "single",
      "difficulty": "hard",
      "question": "A specialty insurer operates in a segment where AI adoption is nascent, regulation is unsettled, and no competitor has launched AI-driven products. The board asks how much to invest in AI next year. Which recommendation is MOST appropriate?",
      "options": [
        "Commit a large multi-year budget with six-month provisioned throughput contracts to establish an unassailable lead.",
        "Invest modestly in data foundations, governance and AI literacy plus a few time-boxed experiments on consumption pricing, with triggers to increase investment if competitive dynamics change.",
        "Invest nothing until a competitor proves the value of AI in the segment.",
        "Match the AI spending percentage reported by large technology companies."
      ],
      "answer": [1],
      "explanation": "Nascent industry maturity with low competitive pressure calls for an explore-and-learn posture: build foundations, run small experiments without long commitments, and define triggers (for example, an AI-native entrant) that would shift to a lead posture. A large committed program over-invests before value is proven; investing nothing forfeits readiness; copying technology-company spend ignores the insurer's context."
    }
  ]
};
