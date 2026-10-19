window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
window.AIB_DATA.exams = window.AIB_DATA.exams || [];

window.AIB_DATA.domains["d3"] = {
  "id": "d3",
  "number": 3,
  "title": "AI Governance and Responsible AI Leadership",
  "weight": 24,
  "summary": "Domain 3 tests whether you can lead AI responsibly: apply AWS's responsible AI dimensions to real business decisions, make defensible tradeoffs when speed or profit collides with fairness or safety, build governance structures with clear accountability, satisfy regulators, and direct mitigation of enterprise risks such as bias, hallucinations, harmful content, IP exposure and model drift. The exam thinks like a risk-aware executive, not an engineer: the best answer is almost always the one that is proportionate to the risk, documented, cross-functional, and built in from the start rather than bolted on after launch.",
  "objectives": [
    "Apply AWS's core responsible AI dimensions (fairness, explainability, privacy and security, safety, controllability, veracity and robustness, governance, transparency) to business scenarios and tradeoff decisions.",
    "Recognize when AI systems need human oversight and choose proportionate safeguards such as Amazon Bedrock Guardrails, hallucination detection, confidence thresholds and escalation paths.",
    "Design AI governance structures with cross-functional representation and clear accountability (RACI), and explain the AWS shared responsibility model for AI workloads.",
    "Identify regulatory exposure (EU AI Act, GDPR, HIPAA, sector rules) and apply risk classification frameworks (EU AI Act tiers, NIST AI RMF, ISO/IEC 42001) to prioritize governance effort.",
    "Direct mitigation for production AI risks: monitoring and controls, bias and bias drift, harmful content and intellectual property, hallucinations, data quality degradation and model drift."
  ],
  "tasks": [
    {
      "id": "3.1",
      "title": "Apply responsible AI principles to business decisions.",
      "lessons": [
        {
          "id": "3.1.1",
          "skill": "Apply responsible AI principles and dimensions (for example, fairness, explainability, privacy, safety, transparency, robustness) to business scenarios.",
          "title": "The Responsible AI Dimensions in Practice",
          "minutes": 14,
          "content": [
            {
              "type": "p",
              "text": "AWS defines **responsible AI** as the discipline of designing, developing and using AI technology with the goal of maximizing benefits and minimizing risks. Rather than a single checklist, AWS organizes the discipline into a set of **core dimensions**. The exam expects you to recognize each dimension, name it when you see it in a scenario, and pick the control that addresses it. You will not be asked to compute a fairness metric; you will be asked which dimension a business problem touches and what a leader should do about it."
            },
            {
              "type": "h",
              "text": "AWS's eight core dimensions"
            },
            {
              "type": "table",
              "headers": [
                "Dimension",
                "AWS definition (paraphrased)",
                "Business question it answers"
              ],
              "rows": [
                [
                  "Fairness",
                  "Considering impacts on different groups of stakeholders",
                  "Does the system treat customer or employee groups equitably?"
                ],
                [
                  "Explainability",
                  "Understanding and evaluating system outputs",
                  "Can we explain why the model recommended, approved or denied?"
                ],
                [
                  "Privacy and security",
                  "Appropriately obtaining, using and protecting data and models",
                  "Are personal data and model assets collected lawfully and protected from leakage or attack?"
                ],
                [
                  "Safety",
                  "Preventing harmful system output and misuse",
                  "Could the system produce dangerous, toxic or abusive outcomes?"
                ],
                [
                  "Controllability",
                  "Having mechanisms to monitor and steer AI system behavior",
                  "Can humans observe, adjust, pause or shut the system down?"
                ],
                [
                  "Veracity and robustness",
                  "Achieving correct outputs, even with unexpected or adversarial inputs",
                  "Is it accurate, and does it stay accurate when inputs are messy or hostile?"
                ],
                [
                  "Governance",
                  "Incorporating best practices into the AI supply chain, including providers and deployers",
                  "Who is accountable, and do our vendors meet our standards?"
                ],
                [
                  "Transparency",
                  "Enabling stakeholders to make informed choices about engaging with an AI system",
                  "Do users know they are dealing with AI and what its limits are?"
                ]
              ]
            },
            {
              "type": "p",
              "text": "The exam guide lists fairness, explainability, privacy, safety, transparency and robustness as examples; AWS material adds controllability, veracity and governance. Treat all eight as fair game. The AWS Well-Architected **Responsible AI Lens** (published November 2025) uses the same dimensions, splitting privacy from security and veracity from robustness, to organize eight focus areas that run from describing the use case through release decisions to post-release monitoring and decommissioning."
            },
            {
              "type": "h",
              "text": "Mapping dimensions to scenarios"
            },
            {
              "type": "ul",
              "items": [
                "A bank's credit model approves fewer applicants from one postcode with equal credit histories: **fairness** (and likely a regulatory issue).",
                "A loan officer cannot tell an applicant why they were declined: **explainability** (and in the EU, a GDPR Article 22 right to human intervention).",
                "A customer-service assistant repeats a customer's account number back in a logged transcript: **privacy and security** (redact personally identifiable information, or PII).",
                "A wellness chatbot gives medication dosing advice: **safety** (block the topic, escalate to a human).",
                "An autonomous pricing agent cannot be paused during a flash sale: **controllability** (add kill switches and human approval thresholds).",
                "A document summarizer invents a clause that is not in the contract: **veracity** (ground responses in sources, run contextual grounding checks).",
                "A marketing team buys a third-party model with no documentation of training data: **governance** (vendor due diligence, AI Service Cards, contract terms).",
                "Customers do not know a support agent is AI: **transparency** (disclose, and label synthetic content)."
              ]
            },
            {
              "type": "callout",
              "kind": "aws",
              "title": "AWS tools that operationalize the dimensions",
              "text": "Amazon Bedrock Guardrails (safety, privacy, veracity), AWS AI Service Cards (transparency and governance: intended use cases, limitations and design choices per service or model), Amazon SageMaker Clarify (fairness and explainability through bias metrics and feature attributions), SageMaker Model Monitor (robustness and controllability through drift alerts), and the Well-Architected Responsible AI Lens (governance guidance across the lifecycle). Know what each is FOR, not how to configure it."
            },
            {
              "type": "callout",
              "kind": "example",
              "title": "Real-world: Amazon's abandoned recruiting model",
              "text": "In 2018 Reuters reported that Amazon had scrapped an experimental resume-screening model that had learned from a decade of mostly male applicants and downgraded resumes containing the word 'women's'. Engineers neutralized those terms but could not guarantee other proxies would not emerge, so the project was disbanded. The lesson for strategists: a fairness failure rooted in historical data cannot be patched at the output layer alone; it requires data design, testing against groups, and a willingness to stop."
            },
            {
              "type": "scenario",
              "situation": "A retailer wants to deploy a GenAI assistant that answers shopper questions about return policies and recommends products. The CMO asks which responsible AI dimensions deserve the most attention before launch.",
              "question": "How should the strategist frame the priorities?",
              "answer": "Start with veracity (policy answers must be grounded in the actual return policy, so use RAG with citations and contextual grounding checks), transparency (shoppers should know they are chatting with AI), safety and privacy (filter harmful content and redact PII in logs), and fairness in recommendations (do not systematically steer groups toward worse offers). Explainability matters less for product suggestions than for consequential decisions such as credit, so it is a lower priority here. The point the exam rewards is proportionality: match the depth of control to the harm the use case could cause."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "Name the dimension, then the control",
              "text": "Many questions describe a symptom and ask for the MOST appropriate action. First label the dimension (for example, 'invented facts' = veracity; 'cannot explain a denial' = explainability). Then choose the answer that addresses that dimension directly. Distractors often fix a different dimension convincingly."
            }
          ],
          "keyTerms": [
            {
              "term": "Responsible AI",
              "def": "The discipline of designing, developing and using AI to maximize benefits and minimize risks across defined dimensions such as fairness, explainability, privacy, safety and transparency."
            },
            {
              "term": "Fairness",
              "def": "Considering and managing the impact of an AI system on different groups of stakeholders so no group is systematically disadvantaged."
            },
            {
              "term": "Explainability",
              "def": "The ability to understand and evaluate why an AI system produced a given output, especially for consequential decisions."
            },
            {
              "term": "Controllability",
              "def": "Having mechanisms to monitor and steer AI system behavior, including the ability to pause, adjust or shut down."
            },
            {
              "term": "Veracity and robustness",
              "def": "Achieving factually correct outputs that stay correct when inputs are unexpected, noisy or adversarial."
            },
            {
              "term": "AI Service Card",
              "def": "AWS transparency documentation that describes a service's or model's intended use cases, limitations, responsible AI design choices and performance best practices."
            }
          ],
          "examTips": [
            "Memorize all eight AWS dimensions and a one-line definition for each; questions often use the definition rather than the name.",
            "Transparency is about disclosure to stakeholders; explainability is about understanding a specific output. Questions deliberately swap them.",
            "When a scenario involves a consequential decision about a person (credit, hiring, healthcare), expect fairness, explainability and human oversight to be the right answers; for low-stakes creative tasks, expect veracity and safety controls to be lighter."
          ],
          "sources": [
            {
              "title": "Responsible AI - AWS",
              "url": "https://aws.amazon.com/ai/responsible-ai/"
            },
            {
              "title": "Responsible AI Lens - AWS Well-Architected Framework",
              "url": "https://docs.aws.amazon.com/wellarchitected/latest/responsible-ai-lens/responsible-ai-lens.html"
            },
            {
              "title": "AWS AI Service Cards - Amazon Nova Micro, Lite, Pro, and Premier",
              "url": "https://docs.aws.amazon.com/ai/responsible-ai/nova-micro-lite-pro/overview.html"
            },
            {
              "title": "Amazon ditched AI recruitment software because it was biased against women (MIT Technology Review)",
              "url": "https://www.technologyreview.com/f/612253/amazon-ditched-ai-recruitment-software-because-it-was-biased-against-women/"
            }
          ]
        },
        {
          "id": "3.1.2",
          "skill": "Navigate tradeoffs when business objectives conflict with responsible AI principles.",
          "title": "Making Defensible Responsible AI Tradeoffs",
          "minutes": 13,
          "content": [
            {
              "type": "p",
              "text": "Responsible AI is rarely free. Adding human review slows a process; filtering content blocks some legitimate requests; collecting less data can reduce model accuracy; explaining a decision may mean using a simpler, slightly less accurate model. The exam does not expect you to eliminate these tensions. It expects you to recognize them, weigh them against the severity and reversibility of potential harm, and choose the option that a board, a regulator and an affected customer could all accept. That is what a **defensible tradeoff** means."
            },
            {
              "type": "h",
              "text": "The common tensions"
            },
            {
              "type": "table",
              "headers": [
                "Business objective",
                "Responsible AI principle in tension",
                "Typical resolution the exam rewards"
              ],
              "rows": [
                [
                  "Speed to market",
                  "Governance by design, testing for bias and safety",
                  "Launch a limited, monitored pilot with guardrails rather than skipping review or delaying indefinitely"
                ],
                [
                  "Maximum accuracy",
                  "Explainability (complex models are harder to explain)",
                  "For consequential decisions, accept a small accuracy loss for an explainable model or add explanation tooling"
                ],
                [
                  "Personalization and revenue",
                  "Privacy and data minimization",
                  "Use consented, purpose-limited data; anonymize or redact; offer opt-outs"
                ],
                [
                  "Full automation and cost savings",
                  "Human oversight and controllability",
                  "Automate low-risk cases; route low-confidence or high-impact cases to humans"
                ],
                [
                  "Helpfulness of a chatbot",
                  "Safety (over-blocking frustrates users)",
                  "Tune filter strength per category and measure false positives as well as harms"
                ],
                [
                  "Cheapest model or vendor",
                  "Governance and transparency of the supply chain",
                  "Require documentation (service cards, training-data provenance, IP terms) as a selection criterion"
                ]
              ]
            },
            {
              "type": "h",
              "text": "A decision method for tradeoffs"
            },
            {
              "type": "ol",
              "items": [
                "Identify who is affected and how badly. Reversible inconvenience (a blocked chatbot answer) differs from irreversible harm (a wrongly denied mortgage, a missed medical flag).",
                "Check for hard constraints first. Legal prohibitions (EU AI Act unacceptable practices, discrimination law, HIPAA privacy rules) are not tradeable.",
                "Quantify both sides in business terms: revenue or cost at stake versus expected harm, remediation cost, regulatory exposure and reputational damage.",
                "Look for the option that captures most of the value with proportionate control (pilot, phased rollout, human-in-the-loop for edge cases, better data instead of more data).",
                "Document the decision, the owner and the review date. A documented, reviewed tradeoff is defensible; an undocumented one is a liability."
              ]
            },
            {
              "type": "callout",
              "kind": "example",
              "title": "Case: Air Canada's chatbot",
              "text": "In February 2024 a British Columbia tribunal held Air Canada liable after its website chatbot told a grieving customer he could claim a bereavement fare retroactively, which contradicted the airline's actual policy. The airline argued the chatbot was a separate entity; the tribunal called that 'remarkable' and found negligent misrepresentation. The tradeoff that failed: deploying a conversational assistant for cost efficiency without grounding it in authoritative policy content or taking responsibility for its answers. The business saved support cost and bought a legal loss and global headlines."
            },
            {
              "type": "scenario",
              "situation": "An insurer's data science team shows that a deep-learning claims model is 4 percentage points more accurate at predicting fraud than a transparent scoring model. Legal notes that regulators and customers must be given reasons for claim denials. The COO wants the accuracy.",
              "question": "What should the strategist recommend?",
              "answer": "Use the accurate model to triage and prioritize investigations (where a wrong flag is reversible because a human investigates), but base any customer-facing denial on reasons a person can state and defend, either from the transparent model or from explanation tooling validated by compliance. This captures most of the fraud-detection value while meeting the explainability and fairness obligations. Pure accuracy maximization that leaves denials unexplainable is the trap answer; abandoning the accurate model entirely leaves value on the table."
            },
            {
              "type": "callout",
              "kind": "warning",
              "title": "Some things are not tradeoffs",
              "text": "The AWS Responsible AI Policy prohibits certain uses outright (for example, intentional deception, violating privacy, harming minors, circumventing safety filters) and requires human oversight and risk evaluation when AI is used for consequential decisions about people's rights, health or safety. Likewise the EU AI Act bans unacceptable-risk practices such as social scoring. If a scenario proposes one of these, the answer is to refuse, not to balance."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "Look for 'proportionate' and 'phased'",
              "text": "Correct answers in tradeoff questions almost never say 'skip the review to meet the deadline' or 'cancel the project until every risk is removed'. They say pilot, phase, limit scope, add human review for high-impact cases, measure, and document."
            }
          ],
          "keyTerms": [
            {
              "term": "Defensible tradeoff",
              "def": "A documented decision that balances business value against responsible AI risk in a way a regulator, board and affected customer could accept."
            },
            {
              "term": "Proportionality",
              "def": "Matching the strength and cost of controls to the severity, likelihood and reversibility of potential harm."
            },
            {
              "term": "Data minimization",
              "def": "Collecting and using only the personal data needed for a stated purpose, a core privacy principle under GDPR."
            },
            {
              "term": "Human-in-the-loop",
              "def": "A design in which a person reviews or approves AI outputs before they take effect, typically for high-impact or low-confidence cases."
            },
            {
              "term": "AWS Responsible AI Policy",
              "def": "AWS policy that prohibits specific harmful uses of its AI services and requires customers to evaluate risk and apply human oversight for consequential decisions."
            }
          ],
          "examTips": [
            "When accuracy conflicts with explainability for decisions about individuals, the exam favors explainability (or explainability tooling) because of regulatory and fairness duties.",
            "Distinguish tradeoffs (speed vs. review depth) from prohibitions (banned practices, legal violations). Prohibitions have no 'balanced' answer.",
            "The phrase 'phased rollout with monitoring' or 'limited pilot with guardrails' is a strong signal of the correct option."
          ],
          "sources": [
            {
              "title": "AWS Responsible AI Policy",
              "url": "https://aws.amazon.com/ai/responsible-ai/policy/"
            },
            {
              "title": "BC Tribunal Confirms Companies Remain Liable for Information Provided by AI Chatbot (American Bar Association)",
              "url": "https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/"
            },
            {
              "title": "AI Act - Shaping Europe's digital future (European Commission)",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            }
          ]
        },
        {
          "id": "3.1.3",
          "skill": "Identify when responsible AI practices should be integrated into AI project planning to ensure governance by design.",
          "title": "Governance by Design Across the Lifecycle",
          "minutes": 12,
          "content": [
            {
              "type": "p",
              "text": "**Governance by design** means responsible AI requirements are decided at the moment a use case is framed, not discovered during a pre-launch legal review. The exam's position is unambiguous: the right time to integrate responsible AI is at the start, during ideation and planning, and then continuously at each lifecycle gate. Retrofitting fairness tests, consent, explainability or monitoring after a model is built is slower, costlier and often impossible without redesign."
            },
            {
              "type": "h",
              "text": "The AWS Responsible AI Lens as a lifecycle template"
            },
            {
              "type": "p",
              "text": "The AWS Well-Architected Responsible AI Lens structures guidance as eight focus areas, each aligned with a phase in the machine learning lifecycle. Read as a planning checklist, they tell you exactly when each responsible AI decision belongs:"
            },
            {
              "type": "table",
              "headers": [
                "Lens focus area",
                "Lifecycle phase",
                "Governance-by-design decision made here"
              ],
              "rows": [
                [
                  "Describe use case",
                  "Ideation",
                  "Is AI needed at all? Who are the stakeholders? What is a consequential decision in this context?"
                ],
                [
                  "Assess benefits and risks",
                  "Planning",
                  "Risk tier, affected groups, regulatory scope, go/no-go"
                ],
                [
                  "Define release criteria",
                  "Planning",
                  "Measurable thresholds for accuracy, fairness, safety and veracity before any model is built"
                ],
                [
                  "Design datasets",
                  "Data preparation",
                  "Representativeness, consent, PII handling, provenance of licensed data"
                ],
                [
                  "Design the AI system",
                  "Build",
                  "Guardrails, human-in-the-loop points, logging, explainability features"
                ],
                [
                  "Make an evidence-based release decision",
                  "Pre-launch",
                  "Compare test evidence to release criteria; document residual risk and sign-off"
                ],
                [
                  "Provide downstream guidance and transparency",
                  "Launch",
                  "User disclosure, documentation, limitations, feedback channels"
                ],
                [
                  "Manage post-release monitoring and decommissioning",
                  "Operate",
                  "Drift and bias monitoring, incident response, retirement plan"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Why early matters: the cost curve"
            },
            {
              "type": "ul",
              "items": [
                "Data decisions are hardest to reverse. If training data was collected without consent or lacks representation of a customer segment, no amount of output filtering fixes it.",
                "Architecture decisions lock in explainability and controllability. Adding a human approval step or an audit log after launch means rebuilding workflows.",
                "Release criteria defined up front stop 'moving the goalposts' when the project is behind schedule.",
                "Regulators and auditors ask for evidence of design-time consideration (impact assessments, documented risk tiering). Post-hoc documentation is weaker evidence."
              ]
            },
            {
              "type": "callout",
              "kind": "aws",
              "title": "Where this shows up in AWS frameworks",
              "text": "The AWS Cloud Adoption Framework (CAF) treats governance and security as perspectives to address during planning, not after. The Responsible AI Lens is explicitly aimed at builder teams, technical leaders and responsible AI specialists working together from the use-case description onward. On the exam, 'integrate the Responsible AI Lens review at project kickoff' beats 'run a Well-Architected review before go-live'."
            },
            {
              "type": "scenario",
              "situation": "A healthcare provider has a working prototype that uses GenAI to draft discharge summaries. Clinicians love it. The compliance team has just learned about it and raises concerns about protected health information (PHI), accuracy and documentation.",
              "question": "What does this situation reveal, and what should the strategist do now?",
              "answer": "It reveals a governance-by-design failure: compliance should have been in the room when the use case was framed, so PHI handling (HIPAA-eligible services, a Business Associate Addendum, PII redaction), release criteria for clinical accuracy, and clinician review steps would have been designed in. Now the right move is to pause expansion, run a risk and impact assessment, define release criteria, add human review and grounding checks, and institute an intake process so future AI projects enter governance at ideation. Shutting the project down entirely or letting it continue unreviewed are both wrong."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "Earliest responsible phase wins",
              "text": "If options differ only in WHEN responsible AI is addressed (ideation, data collection, model build, testing, deployment), the earliest phase that is still practical is the correct answer. The exam treats responsible AI as a planning input, not a quality-assurance step."
            }
          ],
          "keyTerms": [
            {
              "term": "Governance by design",
              "def": "Embedding responsible AI, privacy and compliance requirements into a project from the use-case definition onward rather than adding them before launch."
            },
            {
              "term": "Release criteria",
              "def": "Measurable thresholds for accuracy, fairness, safety and other properties, defined before development, that a system must meet to be released."
            },
            {
              "term": "AI impact assessment",
              "def": "A structured evaluation of an AI system's potential effects on individuals, groups and society, performed before deployment."
            },
            {
              "term": "Responsible AI Lens",
              "def": "An AWS Well-Architected lens of eight lifecycle-aligned focus areas with questions and best practices for building and operating AI responsibly."
            },
            {
              "term": "Intake process",
              "def": "A governance mechanism that registers new AI use cases, assigns a risk tier and routes them to the right reviews before work begins."
            }
          ],
          "examTips": [
            "Scenarios describing a prototype that compliance 'just found out about' are testing governance by design; the fix always includes an intake or review gate at ideation.",
            "Release criteria belong in planning, before model development. An answer that defines success metrics after training is a distractor.",
            "The Responsible AI Lens is guidance for builders and leaders, not a compliance certification; do not pick it as proof of legal compliance."
          ],
          "sources": [
            {
              "title": "Responsible AI Lens - AWS Well-Architected Framework",
              "url": "https://docs.aws.amazon.com/wellarchitected/latest/responsible-ai-lens/responsible-ai-lens.html"
            },
            {
              "title": "Announcing the AWS Well-Architected Responsible AI Lens (AWS Machine Learning Blog)",
              "url": "https://aws.amazon.com/blogs/machine-learning/announcing-the-aws-well-architected-responsible-ai-lens/"
            },
            {
              "title": "Fairness, model explainability and bias detection with SageMaker Clarify",
              "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-configure-processing-jobs.html"
            }
          ]
        },
        {
          "id": "3.1.4",
          "skill": "Recognize circumstances when AI systems require human oversight and identify appropriate safeguards (for example, hallucination detection, guardrails, escalation criteria).",
          "title": "Human Oversight, Guardrails and Escalation",
          "minutes": 15,
          "content": [
            {
              "type": "p",
              "text": "Not every AI output needs a person to check it, and not every AI output can be allowed through unchecked. The strategist's job is to decide **which decisions need human oversight, in what form, and what automatic safeguards sit in front of the human**. The exam tests three things: recognizing high-oversight circumstances, knowing the main safeguard types (especially Amazon Bedrock Guardrails and hallucination detection), and designing sensible escalation criteria."
            },
            {
              "type": "h",
              "text": "When human oversight is required"
            },
            {
              "type": "ul",
              "items": [
                "**Consequential decisions about people**: credit, hiring, housing, benefits, medical diagnosis, legal outcomes. The AWS Responsible AI Policy requires risk evaluation and human oversight here; the EU AI Act classes most of these as high-risk with mandatory human oversight; GDPR Article 22 gives individuals a right to human intervention for solely automated decisions with legal or similarly significant effects.",
                "**Low model confidence or ambiguous inputs**: a document extraction with a confidence score below threshold, an unusual claim, a question outside the knowledge base.",
                "**Irreversible or high-cost actions**: payments, contract commitments, deletion, public communications, autonomous agent actions with real-world side effects.",
                "**Safety-sensitive content**: self-harm, medical, legal or financial advice, content involving minors.",
                "**Novel situations**: new markets, languages or customer segments the model was not evaluated on."
              ]
            },
            {
              "type": "h",
              "text": "Oversight patterns"
            },
            {
              "type": "table",
              "headers": [
                "Pattern",
                "What the human does",
                "Best for"
              ],
              "rows": [
                [
                  "Human-in-the-loop",
                  "Reviews or approves each output before it takes effect",
                  "Consequential, irreversible or regulated decisions"
                ],
                [
                  "Human-on-the-loop",
                  "Monitors aggregate behavior and intervenes on alerts or samples",
                  "High-volume, lower-stakes automation such as ticket routing"
                ],
                [
                  "Human-in-command",
                  "Sets policy, defines boundaries, can override or shut down",
                  "All systems; the governance layer above the other two"
                ],
                [
                  "Confidence-based routing",
                  "Only low-confidence or flagged cases go to a person",
                  "Document processing, claims triage, moderation"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Automatic safeguards: Amazon Bedrock Guardrails"
            },
            {
              "type": "p",
              "text": "**Amazon Bedrock Guardrails** provides configurable safeguards that work across foundation models (and, through the ApplyGuardrail API, even with models hosted elsewhere). At a strategic level, know the six policy types and what business risk each addresses:"
            },
            {
              "type": "table",
              "headers": [
                "Guardrail policy",
                "What it does",
                "Risk addressed"
              ],
              "rows": [
                [
                  "Content filters",
                  "Detect and filter harmful text or images in categories such as hate, insults, sexual, violence, misconduct and prompt attacks, with adjustable strength",
                  "Safety, prompt injection"
                ],
                [
                  "Denied topics",
                  "Block defined topics (for example, investment advice in a banking app)",
                  "Scope control, regulatory exposure"
                ],
                [
                  "Word filters",
                  "Block custom words or phrases such as profanity or competitor names",
                  "Brand and policy compliance"
                ],
                [
                  "Sensitive information filters",
                  "Block or mask PII such as names, SSNs and addresses, plus custom regex patterns",
                  "Privacy"
                ],
                [
                  "Contextual grounding checks",
                  "Score responses for grounding (is it supported by the retrieved source?) and relevance (does it answer the question?) and block below a threshold",
                  "Hallucination detection in RAG applications"
                ],
                [
                  "Automated Reasoning checks",
                  "Validate responses against formal logic rules derived from policy documents, flag contradictions and suggest corrections",
                  "Hallucination and policy-accuracy in rule-heavy domains such as HR or benefits"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Guardrails are priced per 1,000 text units (a text unit is up to 1,000 characters); as of the current pricing page, content filters and denied topics are $0.15, contextual grounding and PII filters $0.10, Automated Reasoning checks $0.17 per policy, and word filters and regex filters are free. The strategic point: layered safeguards cost a fraction of a cent per interaction compared with the cost of a harmful or hallucinated answer."
            },
            {
              "type": "h",
              "text": "Designing escalation criteria"
            },
            {
              "type": "ol",
              "items": [
                "Define triggers: confidence below threshold, guardrail intervention, customer request for a human, sentiment or complaint keywords, transaction value above a limit, topic outside scope.",
                "Define the path: who receives the case, within what service-level time, with what context (the conversation, the retrieved sources, the guardrail reason).",
                "Define the fallback: a safe default response ('I will connect you with a specialist') rather than a guess.",
                "Close the loop: human decisions feed back into evaluation sets and future guardrail tuning."
              ]
            },
            {
              "type": "callout",
              "kind": "aws",
              "title": "Amazon Augmented AI (A2I)",
              "text": "Amazon Augmented AI is a managed service for building human-review workflows around ML predictions, for example routing low-confidence document extractions from claims or loan applications to reviewers. You will not be asked to configure it, but recognize it as the AWS pattern for confidence-based human review."
            },
            {
              "type": "scenario",
              "situation": "A telecom plans a GenAI agent that can issue bill credits to customers during chat. Finance worries about fraud and runaway credits; customer experience wants fast resolution.",
              "question": "What oversight and safeguard design should the strategist recommend?",
              "answer": "Let the agent issue credits automatically below a value threshold with denied-topic and content guardrails in place, require human approval above the threshold or when the same customer requests repeated credits, log every action, monitor aggregate credit volume with alerts (human-on-the-loop), and keep a kill switch for the credit tool (human-in-command). This resolves most cases instantly while bounding the financial and fraud exposure. Full manual approval kills the value; full autonomy ignores the irreversible-action rule."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "Hallucination detection has a named AWS answer",
              "text": "If a question asks how to detect or reduce hallucinations in a RAG-based assistant on Amazon Bedrock, look for 'contextual grounding checks' (grounding and relevance scores) or, for rule-based policy accuracy, 'Automated Reasoning checks'. 'Increase the temperature' or 'use a larger model' are distractors."
            }
          ],
          "keyTerms": [
            {
              "term": "Amazon Bedrock Guardrails",
              "def": "Configurable safeguards (content filters, denied topics, word filters, sensitive information filters, contextual grounding checks, Automated Reasoning checks) applied to prompts and responses across foundation models."
            },
            {
              "term": "Contextual grounding check",
              "def": "A Bedrock Guardrails policy that scores a response for grounding in the provided source and relevance to the query and blocks responses below configured thresholds, detecting hallucinations in RAG applications."
            },
            {
              "term": "Automated Reasoning checks",
              "def": "A Bedrock Guardrails policy that uses formal logic derived from policy documents to validate whether a response is consistent with the rules, flagging invalid statements and suggesting corrections."
            },
            {
              "term": "Escalation criteria",
              "def": "Pre-defined triggers (low confidence, guardrail intervention, high value, customer request) that route an AI interaction to a human with context and a service-level target."
            },
            {
              "term": "Human-on-the-loop",
              "def": "An oversight pattern in which people monitor aggregate AI behavior and intervene on alerts rather than approving each output."
            },
            {
              "term": "Amazon Augmented AI (A2I)",
              "def": "An AWS managed service for adding human review workflows to ML predictions, such as routing low-confidence results to reviewers."
            }
          ],
          "examTips": [
            "Consequential decisions about individuals plus irreversible actions are the two strongest signals that human-in-the-loop is required.",
            "Know the six Bedrock Guardrails policy types and match each to a risk: PII leakage = sensitive information filters; off-scope advice = denied topics; hallucination in RAG = contextual grounding; policy contradictions = Automated Reasoning.",
            "Good escalation answers specify a trigger, a path and a safe fallback; vague 'add human review everywhere' answers are usually wrong on cost and scalability."
          ],
          "sources": [
            {
              "title": "Detect and filter harmful content by using Amazon Bedrock Guardrails",
              "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
            },
            {
              "title": "Use contextual grounding check to filter hallucinations in responses",
              "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding-check.html"
            },
            {
              "title": "Minimize AI hallucinations and deliver up to 99% verification accuracy with Automated Reasoning checks (AWS News Blog)",
              "url": "https://aws.amazon.com/blogs/aws/minimize-ai-hallucinations-and-deliver-up-to-99-verification-accuracy-with-automated-reasoning-checks-now-available/"
            },
            {
              "title": "Amazon Bedrock pricing",
              "url": "https://aws.amazon.com/bedrock/pricing/"
            },
            {
              "title": "Amazon Augmented AI",
              "url": "https://aws.amazon.com/augmented-ai/"
            },
            {
              "title": "Art. 22 GDPR - Automated individual decision-making, including profiling",
              "url": "https://gdpr-info.eu/art-22-gdpr/"
            }
          ]
        }
      ]
    },
    {
      "id": "3.2",
      "title": "Establish AI governance structures and ensure regulatory compliance.",
      "lessons": [
        {
          "id": "3.2.1",
          "skill": "Establish AI governance structures that have appropriate cross-functional representation and clear accountability.",
          "title": "Designing the AI Governance Structure",
          "minutes": 14,
          "content": [
            {
              "type": "p",
              "text": "AI governance is the system of bodies, roles, policies and processes that decides which AI initiatives proceed, under what conditions, and who answers when something goes wrong. The exam's two tests of a governance structure are in the skill statement itself: **cross-functional representation** (the right disciplines are in the room) and **clear accountability** (one named owner per decision, not a committee that owns everything and therefore nothing)."
            },
            {
              "type": "h",
              "text": "A typical three-tier structure"
            },
            {
              "type": "table",
              "headers": [
                "Tier",
                "Body",
                "Members",
                "Decides"
              ],
              "rows": [
                [
                  "Strategic",
                  "AI steering committee or AI ethics board (board or C-suite sponsored)",
                  "Executive sponsor (often a Chief AI, Data or Digital Officer), legal, compliance or risk, security, HR, business unit leaders; external ethics or domain advisers where stakes are high",
                  "Risk appetite, policy, risk-tier thresholds, approval of high-risk use cases, escalation of incidents"
                ],
                [
                  "Tactical",
                  "AI Center of Excellence (COE) or responsible AI office",
                  "Responsible AI lead, data governance, architecture, security, procurement, legal counsel",
                  "Standards, tooling, intake and risk-tiering, reviews, training, vendor assessments"
                ],
                [
                  "Operational",
                  "Product or use-case teams",
                  "Product owner (accountable for the use case), data scientists, engineers, business process owner, a designated risk partner",
                  "Day-to-day design choices within policy, monitoring, incident reporting"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Smaller organizations collapse these tiers, but the functions remain: someone sets policy, someone enables and reviews, and someone owns each system in production."
            },
            {
              "type": "h",
              "text": "Clear accountability with a RACI"
            },
            {
              "type": "p",
              "text": "A **RACI matrix** (Responsible, Accountable, Consulted, Informed) is the exam's favorite tool for accountability because it forces exactly one Accountable party per decision. An illustrative AI RACI:"
            },
            {
              "type": "table",
              "headers": [
                "Decision",
                "Accountable (A)",
                "Responsible (R)",
                "Consulted (C)",
                "Informed (I)"
              ],
              "rows": [
                [
                  "Approve a high-risk use case",
                  "AI steering committee chair",
                  "Responsible AI office",
                  "Legal, compliance, security, affected business unit",
                  "Board, all product teams"
                ],
                [
                  "Set risk tier for a new use case",
                  "Responsible AI lead",
                  "Product owner",
                  "Legal, privacy, security",
                  "Steering committee"
                ],
                [
                  "Data consent and lawful basis",
                  "Data protection officer or privacy lead",
                  "Data owner",
                  "Legal, product",
                  "Product team"
                ],
                [
                  "Vendor or model selection",
                  "Product owner",
                  "Architecture and procurement",
                  "Security, legal (IP and data terms)",
                  "COE"
                ],
                [
                  "Respond to an AI incident",
                  "Product owner",
                  "Operations and security",
                  "Legal, communications, responsible AI office",
                  "Steering committee, regulators as required"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Why cross-functional representation matters"
            },
            {
              "type": "ul",
              "items": [
                "Legal and compliance see regulatory exposure (EU AI Act tiers, GDPR, sector rules) that engineers do not.",
                "Security sees data leakage, prompt injection and model-access risks.",
                "HR and business leaders see workforce impact and process realities.",
                "Data governance sees provenance, quality and ownership.",
                "Affected-community or customer representatives surface fairness concerns before launch.",
                "Finance ties risk decisions to budget and value, so governance is not seen as pure cost."
              ]
            },
            {
              "type": "callout",
              "kind": "aws",
              "title": "AWS guidance on governance",
              "text": "The AWS Cloud Adoption Framework (CAF) governance perspective covers program and project management, benefits management, risk management and data governance as foundations for AI adoption. AWS has also published a user guide to governance, risk and compliance for responsible AI adoption in financial services covering governance, risk management, compliance, data management, model management and AI agent management. The AWS shared responsibility model clarifies the external boundary: AWS secures the cloud infrastructure and managed services; your governance structure owns your data, your use cases, your access policies and your compliance."
            },
            {
              "type": "callout",
              "kind": "example",
              "title": "Business example",
              "text": "A global manufacturer created an AI council chaired by the Chief Digital Officer with legal, HR, security and plant-operations leaders. It defined three risk tiers and delegated tier-one (minimal) approvals to product owners, tier-two to the COE, and reserved tier-three (consequential decisions about employees or safety) for the council. Approval time for low-risk use cases dropped from months to days while high-risk cases received the scrutiny they needed. This is the pattern the exam rewards: governance that speeds low-risk work and concentrates attention on high-risk work."
            },
            {
              "type": "scenario",
              "situation": "A retailer's AI projects are run independently by marketing, supply chain and customer service, each choosing its own vendors and policies. Two projects have had privacy complaints. The CEO asks for 'someone to own AI'.",
              "question": "What structure should the strategist propose?",
              "answer": "Establish an executive-sponsored AI steering committee with cross-functional membership (legal, privacy, security, HR, the three business units, finance), a small responsible AI office or COE to run intake, risk-tiering, standards and vendor assessment, and a RACI that makes each product owner accountable for their system while the committee owns policy and high-risk approvals. Appointing a single individual to approve everything would create a bottleneck and lacks the multidisciplinary view; leaving each unit autonomous is the status quo that caused the complaints."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "One A per row",
              "text": "If an option describes shared or committee-wide accountability for a specific decision, it fails the 'clear accountability' test. If an option describes a governance body made up only of technologists (or only of lawyers), it fails the 'cross-functional' test. The correct answer usually satisfies both."
            }
          ],
          "keyTerms": [
            {
              "term": "AI steering committee (AI ethics board)",
              "def": "An executive-sponsored, cross-functional body that sets AI policy and risk appetite and approves high-risk use cases."
            },
            {
              "term": "AI Center of Excellence (COE)",
              "def": "A central team that provides standards, tooling, intake, risk-tiering, reviews and training to AI project teams across the enterprise."
            },
            {
              "term": "RACI matrix",
              "def": "An accountability chart assigning Responsible, Accountable, Consulted and Informed roles for each decision, with exactly one Accountable party."
            },
            {
              "term": "Cross-functional representation",
              "def": "Including legal, compliance, security, privacy, HR, data, finance and business stakeholders in AI governance so risks are seen from every angle."
            },
            {
              "term": "AWS CAF governance perspective",
              "def": "The part of the AWS Cloud Adoption Framework covering program management, benefits, risk and data governance that underpins scaled AI adoption."
            }
          ],
          "examTips": [
            "Governance questions reward structures that speed up low-risk work through delegation and concentrate oversight on high-risk work through tiering.",
            "A lone 'AI czar' approving everything and a 'let each business unit decide' answer are both classic distractors; the correct answer is a tiered, cross-functional model with RACI.",
            "Expect to see legal, compliance and security named explicitly in correct governance options; their absence is a red flag."
          ],
          "sources": [
            {
              "title": "Introducing the AWS User Guide to Governance, Risk and Compliance for Responsible AI Adoption within Financial Services Industries (AWS Security Blog)",
              "url": "https://aws.amazon.com/blogs/security/introducing-the-aws-user-guide-to-governance-risk-and-compliance-for-responsible-ai-adoption-within-financial-services-industries"
            },
            {
              "title": "Shared Responsibility Model - Amazon Web Services",
              "url": "https://aws.amazon.com/compliance/shared-responsibility-model/"
            },
            {
              "title": "Layer 3: Security and governance for generative AI platforms on AWS (AWS Prescriptive Guidance)",
              "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-enterprise-ready-gen-ai-platform/security.html"
            }
          ]
        },
        {
          "id": "3.2.2",
          "skill": "Identify and address regulatory compliance risks for business processes that use AI.",
          "title": "Regulatory Compliance Risks for AI Processes",
          "minutes": 15,
          "content": [
            {
              "type": "p",
              "text": "AI does not create a legal vacuum; it inherits every law that already applied to the business process and adds a new layer of AI-specific regulation. The strategist's job is to recognize which rules a given AI-enabled process touches, understand what they require at a business level, and build compliance into the process. The exam wants recognition and the right response, not legal drafting."
            },
            {
              "type": "h",
              "text": "The regulatory landscape at a glance"
            },
            {
              "type": "table",
              "headers": [
                "Regulation or regime",
                "Scope",
                "What it means for an AI process"
              ],
              "rows": [
                [
                  "EU AI Act (Regulation 2024/1689)",
                  "AI systems placed on the EU market or affecting people in the EU, regardless of where the provider is based",
                  "Risk-tiered obligations: banned practices; high-risk systems need risk management, data governance, logging, documentation, human oversight, accuracy and robustness; transparency duties for chatbots and synthetic content; rules for general-purpose AI models"
                ],
                [
                  "GDPR (EU) and similar privacy laws (UK GDPR, CCPA/CPRA in California, and others)",
                  "Personal data of individuals",
                  "Lawful basis and purpose limitation for training and inference data; data minimization; Article 22 right not to be subject to solely automated decisions with legal or similarly significant effects, with rights to human intervention and to contest; data subject access and deletion"
                ],
                [
                  "HIPAA (US)",
                  "Protected health information (PHI) held by covered entities and business associates",
                  "Use HIPAA-eligible services under a Business Associate Addendum (BAA); minimum-necessary access; audit controls; eligibility is not the same as compliance, which depends on your configuration and operations"
                ],
                [
                  "Sector rules: financial services (fair lending laws such as ECOA, model risk management guidance such as SR 11-7), employment law, consumer protection, product safety",
                  "Regulated processes such as credit, hiring, insurance, medical devices",
                  "Adverse-action explanations, anti-discrimination testing, model validation and documentation, record-keeping, truth-in-advertising for AI claims"
                ],
                [
                  "Copyright and IP law",
                  "Training data and generated outputs",
                  "Licensing of training data, ownership of outputs, indemnities (covered in Lesson 3.3.3)"
                ]
              ]
            },
            {
              "type": "h",
              "text": "EU AI Act timeline you should recognize"
            },
            {
              "type": "ul",
              "items": [
                "1 August 2024: entry into force.",
                "2 February 2025: prohibitions on unacceptable-risk practices and AI literacy obligations apply.",
                "2 August 2025: governance rules and obligations for general-purpose AI (GPAI) model providers apply.",
                "2 August 2026: the Act broadly applicable, including transparency obligations for chatbots and AI-generated content.",
                "Following the AI Omnibus simplification package (in force 27 July 2026), high-risk obligations for Annex III use cases (biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, justice) apply from 2 December 2027, and for AI embedded in regulated products (Annex I) from 2 August 2028."
              ]
            },
            {
              "type": "callout",
              "kind": "warning",
              "title": "Dates move; principles do not",
              "text": "Exam questions are unlikely to hinge on a specific month. They will test that prohibitions came first, that general-purpose model rules preceded high-risk obligations, that high-risk systems carry the heaviest duties, and that chatbot and deepfake transparency applies broadly."
            },
            {
              "type": "h",
              "text": "How to address compliance risk in an AI process"
            },
            {
              "type": "ol",
              "items": [
                "Inventory: register every AI system and the business process it supports, including vendor-embedded AI and shadow AI.",
                "Classify: assign a risk tier and identify applicable regimes by data type (personal, health, financial), decision type (consequential or not) and geography.",
                "Design controls: lawful basis and consent, data minimization and retention, human oversight for consequential decisions, explanation and adverse-action notices, logging and documentation, transparency disclosures.",
                "Contract: ensure vendor terms cover data use (no training on your data), sub-processors, breach notification, IP and regulatory cooperation.",
                "Evidence: keep impact assessments, test results and approvals so you can demonstrate compliance to auditors and regulators.",
                "Monitor and update: regulations and models both change; schedule reviews."
              ]
            },
            {
              "type": "callout",
              "kind": "aws",
              "title": "What AWS provides and what you still own",
              "text": "Amazon Bedrock does not store or review customer prompts and completions, does not share them with model providers, and does not use them to train base models. Data is encrypted in transit and at rest, customer-managed keys are supported, and services carry compliance attestations (for example, HIPAA eligibility, GDPR support, SOC and ISO programs) available through AWS Artifact. Under the shared responsibility model, however, lawful basis, consent, data classification, access policy, human oversight and disclosures remain the customer's responsibility. The AWS Responsible AI Policy also makes customers responsible for complying with AI-specific laws such as the EU AI Act."
            },
            {
              "type": "scenario",
              "situation": "A US-based staffing firm wants to roll out an AI tool that ranks job applicants for clients in the US and Germany. The tool was trained on past hiring outcomes.",
              "question": "Which compliance risks should the strategist flag, and what should be done before launch?",
              "answer": "Flag that recruitment ranking is a high-risk use case under the EU AI Act (employment), triggering risk management, data governance, logging, human oversight, transparency to candidates and conformity duties for the German deployments; that candidate data is personal data under GDPR, so a lawful basis, data minimization and Article 22 safeguards (human review and the ability to contest) are required; and that US anti-discrimination employment law applies to the ranking outcomes, so disparate-impact testing is needed. Historical hiring data is a known source of bias. Before launch: bias testing against protected groups, documented human-in-the-loop review of rankings, candidate disclosures, an impact assessment and legal sign-off. Launching in the US only while 'figuring out Europe' still leaves the US discrimination exposure unaddressed."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "Follow the data and the decision",
              "text": "Two questions unlock most compliance scenarios: What kind of data is involved (personal, health, financial, children's)? And does the AI make or materially influence a consequential decision about a person? Health data points to HIPAA, EU personal data to GDPR, consequential decisions to EU AI Act high-risk duties and GDPR Article 22."
            }
          ],
          "keyTerms": [
            {
              "term": "EU AI Act",
              "def": "The European Union's risk-based AI regulation (2024/1689) that bans unacceptable practices, imposes strict duties on high-risk systems, requires transparency for chatbots and synthetic content, and regulates general-purpose AI models."
            },
            {
              "term": "GDPR Article 22",
              "def": "The General Data Protection Regulation provision giving individuals the right not to be subject to solely automated decisions with legal or similarly significant effects, with safeguards including human intervention and the right to contest."
            },
            {
              "term": "HIPAA-eligible service",
              "def": "An AWS service that can be used with protected health information under a Business Associate Addendum; eligibility does not by itself make a workload compliant."
            },
            {
              "term": "Business Associate Addendum (BAA)",
              "def": "The contract under which a cloud provider agrees to HIPAA obligations when handling protected health information on behalf of a covered entity."
            },
            {
              "term": "Adverse-action notice",
              "def": "A regulatory requirement in areas such as credit to tell an individual the specific reasons for a negative decision."
            },
            {
              "term": "AI system inventory",
              "def": "A register of all AI systems in use, including vendor-embedded and shadow AI, used as the foundation for risk classification and compliance."
            }
          ],
          "examTips": [
            "Regulations stack: an AI hiring tool in the EU triggers the EU AI Act (high-risk), GDPR (personal data and Article 22) and employment anti-discrimination law simultaneously. Correct answers address all applicable layers.",
            "'HIPAA-eligible' and 'GDPR-ready' describe what AWS enables; compliance is still the customer's job under the shared responsibility model.",
            "Do not confuse the EU AI Act (regulates AI systems by risk) with GDPR (regulates personal data); questions mixing them test whether you know which rule governs which issue."
          ],
          "sources": [
            {
              "title": "AI Act - Shaping Europe's digital future (European Commission)",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            },
            {
              "title": "Art. 22 GDPR - Automated individual decision-making, including profiling",
              "url": "https://gdpr-info.eu/art-22-gdpr/"
            },
            {
              "title": "Data protection - Amazon Bedrock",
              "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html"
            },
            {
              "title": "Responsible use - Amazon Nova (privacy, security and IP statements)",
              "url": "https://docs.aws.amazon.com/nova/latest/userguide/responsible-use.html"
            },
            {
              "title": "AWS Responsible AI Policy",
              "url": "https://aws.amazon.com/ai/responsible-ai/policy/"
            }
          ]
        },
        {
          "id": "3.2.3",
          "skill": "Identify appropriate access controls and data security measures for AI systems.",
          "title": "Access Controls and Data Security for AI",
          "minutes": 13,
          "content": [
            {
              "type": "p",
              "text": "AI systems concentrate three valuable assets: the data used to train and ground them, the models themselves, and the prompts and outputs that flow through them. Each is a target. At a governance level the strategist must know which security measures to require, who is responsible for them under the **AWS shared responsibility model**, and how responsibility shifts depending on how much of the AI stack the organization owns. You are not expected to implement controls; you are expected to recognize the right ones and insist on them."
            },
            {
              "type": "h",
              "text": "Shared responsibility for AI workloads"
            },
            {
              "type": "p",
              "text": "The AWS shared responsibility model separates **security OF the cloud** (AWS: the infrastructure, hardware, software, networking and facilities that run AWS services, plus the managed service itself) from **security IN the cloud** (customer: their data, its classification and encryption choices, identity and access management, application configuration, and the people and processes around them). For AI workloads, AWS adds the **Generative AI Security Scoping Matrix**, which shows that the more of the stack you own, the more you must secure:"
            },
            {
              "type": "table",
              "headers": [
                "Scope",
                "Example",
                "Customer security focus"
              ],
              "rows": [
                [
                  "1. Consumer app",
                  "Employees use a public chatbot",
                  "Usage policy, approved-tool list, training; never input proprietary data"
                ],
                [
                  "2. Enterprise app",
                  "Vendor SaaS with embedded GenAI features",
                  "Contract terms (no training on your data, data residency), single sign-on, access reviews"
                ],
                [
                  "3. Pre-trained model",
                  "Your app on an Amazon Bedrock model with RAG",
                  "Least-privilege access to data before it reaches the model, guardrails, prompt-injection threat modeling, logging"
                ],
                [
                  "4. Fine-tuned model",
                  "Model customized on your business data",
                  "Everything in Scope 3 plus classifying the model at the sensitivity of its training data and restricting who can invoke it"
                ],
                [
                  "5. Self-trained model",
                  "Model built from scratch on your data",
                  "Full ownership of data pipeline, training environment, model artifacts and legal terms"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Governance-level controls to require"
            },
            {
              "type": "table",
              "headers": [
                "Control",
                "What it means in practice",
                "Risk it mitigates"
              ],
              "rows": [
                [
                  "Least privilege",
                  "Users, applications and agents get only the permissions they need; separate roles for building, deploying and invoking models",
                  "Insider misuse, blast radius of compromised credentials"
                ],
                [
                  "Data classification",
                  "Label data (public, internal, confidential, restricted or regulated) and tie AI access rules to labels; a fine-tuned model inherits the highest classification of its training data",
                  "Over-sharing through RAG or fine-tuning"
                ],
                [
                  "Encryption",
                  "Encrypt data in transit and at rest; use customer-managed keys for sensitive workloads",
                  "Interception, unauthorized storage access"
                ],
                [
                  "Model access policies",
                  "Explicit approval of which foundation models may be used and by whom; restrict fine-tuned models to authorized applications",
                  "Unapproved models, exfiltration of tuned models"
                ],
                [
                  "Private connectivity and network isolation",
                  "Keep AI traffic off the public internet where sensitive data is involved",
                  "Exposure of prompts and data in transit"
                ],
                [
                  "Logging and audit",
                  "Record who invoked which model with what data; retain for compliance",
                  "Undetected misuse, inability to investigate incidents"
                ],
                [
                  "Input and output filtering",
                  "Guardrails for prompt-injection attempts and PII in prompts and responses",
                  "Prompt injection, data leakage through outputs"
                ],
                [
                  "Vendor and data-use terms",
                  "Confirm the provider does not store or train on your prompts",
                  "Trade-secret leakage to third parties"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "aws",
              "title": "How Amazon Bedrock supports these controls",
              "text": "Bedrock does not store or review prompts and completions, does not share them with third-party model providers (models run in AWS-operated deployment accounts the providers cannot access), and does not use customer data to train base models. It supports encryption in transit (TLS) and at rest, customer-managed keys through AWS Key Management Service, private connectivity through AWS PrivateLink, access control through AWS Identity and Access Management (IAM), API logging through AWS CloudTrail and usage metrics through Amazon CloudWatch. Bedrock Guardrails adds PII redaction and prompt-attack filtering. Recognize these capabilities by purpose; configuration is out of scope."
            },
            {
              "type": "callout",
              "kind": "example",
              "title": "Why usage policy is a security control",
              "text": "In 2023 Samsung reportedly restricted employee use of public generative AI tools after engineers pasted confidential source code and meeting notes into a consumer chatbot while seeking help. The data left the company's control and could not be recalled. This is a Scope 1 failure: no technical control inside Samsung's cloud would have prevented it; only an approved-tools policy, training and an enterprise alternative could."
            },
            {
              "type": "scenario",
              "situation": "A pharmaceutical company wants researchers to query an internal GenAI assistant over clinical trial documents, some of which contain patient identifiers and unpublished results.",
              "question": "What access and data security measures should the strategist require at a governance level?",
              "answer": "Classify the document corpus and restrict retrieval so each researcher's queries can only retrieve documents they are already authorized to read (least privilege applied before data reaches the model); redact or tokenize patient identifiers before indexing and apply PII filters on outputs; encrypt at rest with customer-managed keys and keep traffic on private connectivity; use an approved model under terms that prohibit training on company data; log every query for audit; and keep the assistant on an approved-model list reviewed by security. Simply 'enabling the chatbot for all employees' or 'relying on the provider's security' misreads the shared responsibility model."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "AWS secures the service; you secure your use of it",
              "text": "Any option that assumes AWS is responsible for your data classification, your IAM permissions, your consent records or your employee usage policy is wrong. Any option that assumes you must secure the physical data centers or patch the Bedrock service is also wrong. The dividing line is the service boundary."
            }
          ],
          "keyTerms": [
            {
              "term": "Shared responsibility model",
              "def": "AWS secures the cloud infrastructure and managed services (security OF the cloud); the customer secures their data, identities, configurations and usage (security IN the cloud)."
            },
            {
              "term": "Generative AI Security Scoping Matrix",
              "def": "An AWS framework of five scopes (consumer app, enterprise app, pre-trained model, fine-tuned model, self-trained model) showing how security responsibility grows with ownership of the AI stack."
            },
            {
              "term": "Least privilege",
              "def": "Granting users, applications and agents only the minimum permissions required for their task."
            },
            {
              "term": "Data classification",
              "def": "Labeling data by sensitivity (for example, public, internal, confidential, regulated) so that access, encryption and AI-use rules can be applied consistently."
            },
            {
              "term": "Prompt injection",
              "def": "An attack in which crafted input manipulates a GenAI system into ignoring instructions, leaking data or taking unintended actions."
            },
            {
              "term": "Customer-managed key",
              "def": "An encryption key the customer controls (for example, through AWS Key Management Service) rather than a key managed by the provider."
            }
          ],
          "examTips": [
            "A fine-tuned model is as sensitive as the most sensitive data used to train it; access to the model must be restricted accordingly.",
            "For RAG assistants, the exam expects access control to be enforced on the documents BEFORE retrieval so users cannot read, via the model, what they could not read directly.",
            "Shadow AI and employee use of public chatbots are governed by policy, training and approved alternatives, not by cloud configuration."
          ],
          "sources": [
            {
              "title": "Shared Responsibility Model - Amazon Web Services",
              "url": "https://aws.amazon.com/compliance/shared-responsibility-model/"
            },
            {
              "title": "Generative AI Security Scoping Matrix - AWS",
              "url": "https://aws.amazon.com/ai/generative-ai/security/scoping-matrix/"
            },
            {
              "title": "Data protection - Amazon Bedrock",
              "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html"
            },
            {
              "title": "Samsung bans ChatGPT among employees after sensitive code leak (Forbes Australia)",
              "url": "https://www.forbes.com.au/news/innovation/samsung-bans-chatgpt-among-employees-after-sensitive-code-leak/"
            }
          ]
        },
        {
          "id": "3.2.4",
          "skill": "Apply AI risk classification frameworks to prioritize governance and compliance decisions across the AI lifecycle.",
          "title": "Risk Classification Frameworks for AI",
          "minutes": 15,
          "content": [
            {
              "type": "p",
              "text": "Governance effort is finite. **Risk classification** lets an organization spend it where harm is most likely and most severe: a GenAI tool that drafts internal meeting notes should not face the same reviews as a model that decides who gets a mortgage. The exam tests three frameworks by name (the EU AI Act risk tiers, the NIST AI Risk Management Framework and ISO/IEC 42001), expects you to tell them apart, and expects you to use a tier to decide how much governance a use case gets at each lifecycle stage."
            },
            {
              "type": "h",
              "text": "EU AI Act: a legal classification of systems"
            },
            {
              "type": "table",
              "headers": [
                "Tier",
                "Examples",
                "Obligation"
              ],
              "rows": [
                [
                  "Unacceptable risk",
                  "Social scoring by public authorities, manipulative AI exploiting vulnerabilities, untargeted scraping of facial images, emotion recognition in workplaces and schools, real-time remote biometric identification by law enforcement in public (with narrow exceptions), generation of non-consensual intimate imagery",
                  "Prohibited"
                ],
                [
                  "High risk",
                  "Safety components of critical infrastructure and regulated products, education scoring, recruitment and employee management, credit scoring and essential services, law enforcement, migration, justice",
                  "Risk management system, data governance, logging, technical documentation, human oversight, accuracy and robustness, conformity assessment, post-market monitoring, incident reporting; deployers must ensure human oversight and monitoring"
                ],
                [
                  "Transparency (limited) risk",
                  "Chatbots, deepfakes, AI-generated text on matters of public interest",
                  "Tell people they are interacting with AI; label synthetic content and deepfakes"
                ],
                [
                  "Minimal or no risk",
                  "Spam filters, AI in video games, most recommendation and productivity tools",
                  "No specific obligations (voluntary codes encouraged); the vast majority of systems"
                ]
              ]
            },
            {
              "type": "p",
              "text": "General-purpose AI (GPAI) models such as foundation models have their own obligations (documentation, copyright policy, training-content summaries, and extra duties for models with systemic risk), which fall mainly on model providers rather than business deployers."
            },
            {
              "type": "h",
              "text": "NIST AI RMF: a voluntary process for managing risk"
            },
            {
              "type": "p",
              "text": "The US National Institute of Standards and Technology **AI Risk Management Framework 1.0** (January 2023) is voluntary and sector-neutral. Its core has four functions: **Govern** (cross-cutting: culture, policies, roles and accountability), **Map** (establish context, identify stakeholders, impacts and risks, and inform a go/no-go), **Measure** (assess, benchmark and monitor risks with quantitative and qualitative methods) and **Manage** (prioritize and allocate resources to treat risks, respond to incidents and communicate). It describes trustworthy AI as valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, and fair with harmful bias managed. A Generative AI Profile (NIST AI 600-1, July 2024) adds GenAI-specific risks and actions."
            },
            {
              "type": "h",
              "text": "ISO/IEC 42001: a certifiable management system"
            },
            {
              "type": "p",
              "text": "**ISO/IEC 42001:2023** is the first international, certifiable standard for an **AI management system (AIMS)**. Like ISO 27001 for security or ISO 9001 for quality, it follows ISO's harmonized management-system structure and a plan-do-check-act cycle: define AI policy and objectives, assess AI risks and impacts, implement controls across the AI lifecycle including suppliers, monitor performance and continually improve. Independent certification bodies audit against it, which makes it the framework to choose when a scenario asks for externally verifiable assurance for customers or regulators. Its companion ISO/IEC 23053 provides a shared vocabulary and framework for describing ML systems."
            },
            {
              "type": "table",
              "headers": [
                "Framework",
                "Nature",
                "Primary use",
                "Choose it when the scenario asks for..."
              ],
              "rows": [
                [
                  "EU AI Act tiers",
                  "Binding law in the EU",
                  "Classify systems to determine legal obligations",
                  "Legal exposure for products or users in the EU"
                ],
                [
                  "NIST AI RMF",
                  "Voluntary framework",
                  "Organize an internal risk-management process",
                  "A practical, flexible process to identify, measure and manage AI risk; US-centric or sector-neutral contexts"
                ],
                [
                  "ISO/IEC 42001",
                  "Voluntary, certifiable standard",
                  "Build and certify an AI management system",
                  "Demonstrable, auditable assurance to customers, partners or regulators"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Using a tier across the lifecycle"
            },
            {
              "type": "ul",
              "items": [
                "Intake: every use case gets a provisional tier based on data sensitivity, decision consequence, autonomy and affected population.",
                "Planning: high tiers require impact assessments, legal review and defined release criteria; low tiers get a lightweight checklist.",
                "Data and build: high tiers require representativeness analysis, bias testing, explainability features and human-in-the-loop design.",
                "Release: high tiers need steering-committee approval and documented residual risk; low tiers are approved by the product owner.",
                "Operation: high tiers get continuous bias and drift monitoring, incident reporting and periodic re-tiering; low tiers get periodic spot checks.",
                "Change: a change in data, purpose or population (for example, a chatbot starts giving financial advice) triggers re-classification."
              ]
            },
            {
              "type": "scenario",
              "situation": "A bank's innovation lab has twelve GenAI proposals, from an internal policy search assistant to an automated credit-limit adjuster. The CRO can staff rigorous review for only three.",
              "question": "How should the strategist prioritize?",
              "answer": "Apply a risk-tiering rubric: anything that makes or materially influences consequential decisions about customers (the credit-limit adjuster, anything touching lending, fraud blocking or complaints outcomes) is high-risk under the EU AI Act logic and attracts fair-lending and model-risk rules, so it gets the rigorous review. Internal productivity tools over non-sensitive content are minimal risk and proceed under a lightweight checklist with standard guardrails. Customer-facing chatbots sit in the transparency tier: disclose AI use and ground responses, with moderate review. Reviewing proposals in the order they were submitted, or applying the same heavy process to all twelve, are the distractors."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "Three frameworks, three verbs",
              "text": "EU AI Act CLASSIFIES systems and imposes legal duties. NIST AI RMF ORGANIZES how you govern, map, measure and manage risk (voluntary). ISO/IEC 42001 CERTIFIES your management system. If a question says 'legally required in Europe', 'practical voluntary process' or 'certifiable assurance', you have your answer."
            }
          ],
          "keyTerms": [
            {
              "term": "Risk classification (tiering)",
              "def": "Assigning AI use cases to risk levels based on data sensitivity, decision consequence, autonomy and affected population so governance effort is proportionate."
            },
            {
              "term": "EU AI Act risk tiers",
              "def": "Unacceptable (prohibited), high (strict obligations), transparency or limited (disclosure duties) and minimal (no specific obligations)."
            },
            {
              "term": "NIST AI RMF",
              "def": "A voluntary US framework (2023) whose core functions Govern, Map, Measure and Manage structure AI risk management; a Generative AI Profile was added in 2024."
            },
            {
              "term": "ISO/IEC 42001",
              "def": "The 2023 international, certifiable standard specifying requirements for an AI management system (AIMS), aligned with other ISO management-system standards."
            },
            {
              "term": "ISO/IEC 23053",
              "def": "An international standard providing a framework and common vocabulary for describing AI systems that use machine learning."
            },
            {
              "term": "General-purpose AI (GPAI) model",
              "def": "A foundation model usable across many tasks; the EU AI Act places documentation and copyright obligations on its providers, with extra duties for systemic-risk models."
            }
          ],
          "examTips": [
            "High-risk under the EU AI Act is defined by use case (employment, credit, education, essential services, law enforcement), not by model size or technology.",
            "NIST's Govern function is cross-cutting and sits over Map, Measure and Manage; questions about 'establishing culture and accountability' point to Govern.",
            "If the scenario needs third-party certification or auditable assurance, the answer is ISO/IEC 42001, not NIST AI RMF (which is not certifiable) and not the Well-Architected Responsible AI Lens (which is guidance)."
          ],
          "sources": [
            {
              "title": "AI Act - Shaping Europe's digital future (European Commission)",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            },
            {
              "title": "AI Risk Management Framework - NIST",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "AI RMF Core - NIST AI Resource Center",
              "url": "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/"
            },
            {
              "title": "ISO/IEC 42001 Certification: AI Management System (DNV)",
              "url": "https://www.dnv.com/services/iso-iec-42001-artificial-intelligence-ai--250876/"
            }
          ]
        }
      ]
    },
    {
      "id": "3.3",
      "title": "Identify enterprise AI risks and direct mitigation strategies.",
      "lessons": [
        {
          "id": "3.3.1",
          "skill": "Identify the need for risk controls and monitoring mechanisms for AI systems in production.",
          "title": "Risk Controls and Monitoring in Production",
          "minutes": 13,
          "content": [
            {
              "type": "p",
              "text": "Traditional software behaves the same way on day 500 as on day 1 unless someone changes the code. AI systems do not. Their behavior depends on data that keeps changing, on models that vendors update, on users who learn to probe them, and on a world that drifts away from the one in the training set. That is why launch is the beginning of risk management, not the end. The exam tests whether you recognize the **need** for production controls and monitoring and can name the mechanisms a leader should insist on."
            },
            {
              "type": "h",
              "text": "Why production is different for AI"
            },
            {
              "type": "ul",
              "items": [
                "**Data drift**: the statistical profile of inputs changes (new customer segments, new product lines, seasonal shifts), so the model sees cases it was not trained on.",
                "**Concept drift**: the relationship between inputs and the right answer changes (fraud patterns evolve, consumer behavior shifts after a price change), so a once-accurate model quietly degrades.",
                "**Upstream changes**: a source system changes a field definition or a data feed breaks, silently feeding the model garbage.",
                "**Model and vendor updates**: a foundation-model provider releases a new version; behavior changes even though you changed nothing.",
                "**Adversarial use**: users discover prompt-injection tricks, jailbreaks or ways to extract data.",
                "**Scale**: a failure that affected one analyst's spreadsheet now affects every customer interaction in real time."
              ]
            },
            {
              "type": "h",
              "text": "The control and monitoring stack a leader should require"
            },
            {
              "type": "table",
              "headers": [
                "Layer",
                "Mechanism",
                "Business purpose"
              ],
              "rows": [
                [
                  "Preventive controls",
                  "Guardrails on inputs and outputs, access controls, approved-model lists, rate and spend limits",
                  "Stop harmful or unauthorized behavior before it happens"
                ],
                [
                  "Quality monitoring",
                  "Track accuracy, error rates, hallucination or grounding scores, task completion, customer satisfaction against the pre-launch baseline",
                  "Detect degradation early"
                ],
                [
                  "Drift monitoring",
                  "Compare live input and output distributions with the training baseline; alert on deviations",
                  "Catch data and concept drift before business KPIs fall"
                ],
                [
                  "Bias monitoring",
                  "Recompute fairness metrics on live predictions by group; alert when outside tolerance",
                  "Catch bias drift (Lesson 3.3.2)"
                ],
                [
                  "Operational telemetry",
                  "Latency, availability, cost per interaction, token consumption",
                  "Reliability and budget control"
                ],
                [
                  "Audit and logging",
                  "Record prompts, retrieved sources, outputs, guardrail interventions and human overrides",
                  "Investigate incidents, satisfy regulators"
                ],
                [
                  "Human feedback loops",
                  "Thumbs up or down, reviewer corrections, escalation outcomes",
                  "Ground truth for evaluation and retraining"
                ],
                [
                  "Response playbooks",
                  "Thresholds that trigger retraining, rollback, pausing the system or escalation to the steering committee",
                  "Turn alerts into decisions"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "aws",
              "title": "AWS services at a strategic level",
              "text": "Amazon SageMaker Model Monitor continuously monitors SageMaker models in production against a baseline for data quality, model quality, bias drift and feature-attribution drift, raising alerts through Amazon CloudWatch so teams can retrain or audit upstream systems. Amazon Bedrock Guardrails provides preventive controls for GenAI; Bedrock model evaluation helps compare models for accuracy, robustness and toxicity; AWS CloudTrail and CloudWatch provide the audit and telemetry layer. Note that AWS has announced SageMaker Model Monitor and SageMaker Clarify are no longer open to new customers (existing customers continue), so treat them as the canonical examples of the monitoring concepts rather than as a procurement recommendation."
            },
            {
              "type": "callout",
              "kind": "example",
              "title": "Business example",
              "text": "A regional grocer's demand-forecasting model performed well for two years, then over-ordered perishables for a quarter after a competitor opened nearby and shopper mix changed. No one was monitoring input distributions against the training baseline; the model's error was discovered through write-off reports months later. A drift alert tied to a retraining playbook would have surfaced the shift within weeks. The cost of monitoring was trivial compared with the spoilage."
            },
            {
              "type": "scenario",
              "situation": "A software company launched a GenAI support assistant six months ago. Ticket deflection was 35 percent at launch and has fallen to 22 percent. No one knows why. The vendor released two model versions during that time, and the product team shipped a new pricing page.",
              "question": "What should the strategist direct?",
              "answer": "Institute a monitoring regime that compares current behavior to the launch baseline: grounding and relevance scores, topic mix of questions, escalation rate, and customer ratings, segmented by model version and by date of the pricing change. Re-index the knowledge base so the assistant reflects new pricing content (data staleness), evaluate the new model versions against the launch evaluation set before adopting them, and create a playbook that reviews metrics after every content or model change. The lesson is that the deflection drop was not a mystery but an absence of monitoring; 'switch vendors' or 'retrain the model' without diagnosis are distractors."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "Baseline, monitor, playbook",
              "text": "Correct answers about production risk nearly always contain three elements: a baseline captured before launch, continuous monitoring against it, and pre-agreed actions when thresholds are crossed. An option with monitoring but no defined response, or with response but no baseline, is incomplete."
            }
          ],
          "keyTerms": [
            {
              "term": "Data drift",
              "def": "A change in the statistical distribution of a model's input data compared with the data it was trained on."
            },
            {
              "term": "Concept drift",
              "def": "A change in the real-world relationship between inputs and outcomes, so a model's learned patterns no longer hold."
            },
            {
              "term": "Baseline",
              "def": "Metrics and data statistics captured before or at launch against which production behavior is compared."
            },
            {
              "term": "Amazon SageMaker Model Monitor",
              "def": "An AWS capability that monitors production SageMaker models against a baseline for data quality, model quality, bias drift and feature-attribution drift and raises alerts."
            },
            {
              "term": "Response playbook",
              "def": "Pre-agreed actions (retrain, roll back, pause, escalate) triggered when monitoring thresholds are breached."
            },
            {
              "term": "Human feedback loop",
              "def": "A mechanism to capture user ratings and reviewer corrections on AI outputs to evaluate and improve the system over time."
            }
          ],
          "examTips": [
            "Scenarios where performance 'silently declined' or 'no one noticed for months' are testing the need for drift monitoring against a baseline.",
            "When a vendor updates a foundation model, the governance answer is to re-evaluate against your evaluation set before adopting, not to assume improvement.",
            "Monitoring without ownership is a distractor; the correct option names who acts on alerts and what they do."
          ],
          "sources": [
            {
              "title": "Data and model quality monitoring with Amazon SageMaker Model Monitor",
              "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html"
            },
            {
              "title": "Responsible AI - AWS (tools for monitoring and evaluation)",
              "url": "https://aws.amazon.com/ai/responsible-ai/"
            },
            {
              "title": "Responsible AI Lens - AWS Well-Architected Framework",
              "url": "https://docs.aws.amazon.com/wellarchitected/latest/responsible-ai-lens/responsible-ai-lens.html"
            }
          ]
        },
        {
          "id": "3.3.2",
          "skill": "Recognize that bias can occur at multiple stages of the AI lifecycle and explain the importance of ongoing monitoring for bias drift.",
          "title": "Bias Across the Lifecycle and Bias Drift",
          "minutes": 14,
          "content": [
            {
              "type": "p",
              "text": "**Bias** in AI is a systematic difference in how a system treats groups of people, in a way that is unjustified by the legitimate purpose of the system. The most common misconception the exam probes is that bias is a data problem you fix once before training. In reality bias can enter at every lifecycle stage, and a model that is fair at launch can become unfair in production. That is why the skill statement pairs 'multiple stages' with 'ongoing monitoring for bias drift'."
            },
            {
              "type": "h",
              "text": "Where bias enters"
            },
            {
              "type": "table",
              "headers": [
                "Lifecycle stage",
                "How bias enters",
                "Business example",
                "Mitigation"
              ],
              "rows": [
                [
                  "Problem framing",
                  "Choosing a target that encodes past unfairness (for example, 'who did we hire?' instead of 'who performed well?')",
                  "A recruiting model trained to replicate historical hiring decisions",
                  "Define outcomes tied to merit; involve affected stakeholders in framing"
                ],
                [
                  "Data collection",
                  "Under-representation of groups; historical discrimination baked into records; proxy variables such as postcode",
                  "Facial analysis trained mostly on one demographic performs worse on others",
                  "Representativeness analysis, pre-training bias metrics, data augmentation, removing proxies"
                ],
                [
                  "Labeling",
                  "Human annotators apply inconsistent or prejudiced labels",
                  "Toxicity labels that flag dialects as offensive",
                  "Labeling guidelines, diverse annotators, inter-annotator agreement checks"
                ],
                [
                  "Model training",
                  "Optimization that maximizes overall accuracy at the expense of minority groups; hyperparameter and feature choices",
                  "Credit model accurate overall but with higher false-decline rates for one group",
                  "Post-training bias metrics by group, fairness constraints, model selection on fairness as well as accuracy"
                ],
                [
                  "Evaluation",
                  "Test sets that mirror training-set gaps; evaluating only aggregate metrics",
                  "A 95 percent accurate model that is 70 percent accurate for a small segment",
                  "Disaggregated evaluation; release criteria that include group-level thresholds"
                ],
                [
                  "Deployment and use",
                  "Applying the model to a population or purpose it was not built for; humans over-trusting outputs (automation bias)",
                  "A US-trained model deployed in another market",
                  "Scope limits, disclosure of limitations, human review training"
                ],
                [
                  "Feedback loops",
                  "Model outputs shape future data (for example, policing or lending concentrated where the model predicted risk), reinforcing bias",
                  "Recommendation engines that narrow what groups are shown",
                  "Monitor outcome distributions; inject exploration or human review"
                ],
                [
                  "Production over time",
                  "Bias drift: live data diverges from training data so group-level outcomes shift",
                  "A home-price model trained at low interest rates becomes skewed as rates rise",
                  "Scheduled bias-drift monitoring with alerts and retraining triggers"
                ]
              ]
            },
            {
              "type": "h",
              "text": "What bias drift is and why it matters"
            },
            {
              "type": "p",
              "text": "**Bias drift** occurs when the distribution of data a deployed model sees differs from its training data in ways that change outcomes for groups, even though the model itself has not changed. The shift may be temporary (a holiday season, a marketing campaign that attracts a new segment) or permanent (a demographic or economic change). AWS's SageMaker Clarify documentation gives the example of a home-price model whose outputs become biased when real mortgage rates diverge from those in the training data. Measuring bias only at the train-and-deploy stage is therefore insufficient. The governance response is to compute fairness metrics on live predictions at a set frequency, compare them to an allowed range, and raise an alert when the deviation is statistically significant, so the team can investigate, retrain or constrain the system."
            },
            {
              "type": "callout",
              "kind": "aws",
              "title": "Amazon SageMaker Clarify at a business level",
              "text": "SageMaker Clarify computes bias metrics on training data (pre-training), on model predictions (post-training) and on live predictions in production (bias drift monitoring through Model Monitor), and explains predictions through feature attributions, both globally and for individual decisions. It can generate model governance reports for risk, compliance and regulators. AWS has announced Clarify and Model Monitor are no longer open to new customers, but the lifecycle concept (measure bias before training, after training and continuously in production) is exactly what the exam tests."
            },
            {
              "type": "callout",
              "kind": "example",
              "title": "Fairness is a process, not a metric",
              "text": "AWS's own guidance stresses that notions of bias and fairness depend on the application, and that the choice of metric should be guided by social, legal and business considerations through collaboration among product, policy, legal, engineering and affected communities. There is no single fairness number; a strategist's job is to make sure the right people chose the metric and that it is monitored."
            },
            {
              "type": "scenario",
              "situation": "An insurer's claims-triage model passed a fairness review at launch. Eighteen months later a consumer group alleges that claims from older policyholders are disproportionately routed to lengthy manual investigation. The data science team insists the model has not changed.",
              "question": "How should the strategist respond?",
              "answer": "Treat this as probable bias drift: the model has not changed, but the population or the relationship between features and outcomes has. Direct an immediate disaggregated analysis of live routing rates by age group against the launch baseline, institute scheduled bias-drift monitoring with alert thresholds agreed with legal and compliance, add human review for flagged groups while the investigation proceeds, and prepare a transparent response to the consumer group and regulator. 'The model passed review at launch' is not a defense; it is the reason continuous monitoring exists."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "'Passed at launch' is the trap",
              "text": "If a scenario emphasizes that a model was tested for bias before deployment and the team believes it is therefore fair, the correct answer involves ongoing or scheduled bias monitoring in production. If a scenario asks where bias originates, the correct answer is 'multiple stages', not 'training data' alone."
            }
          ],
          "keyTerms": [
            {
              "term": "Bias (in AI)",
              "def": "Systematic, unjustified differences in how an AI system treats or affects different groups of people."
            },
            {
              "term": "Bias drift",
              "def": "Growth in bias over time in a deployed model because live data differs from training data, even though the model itself has not changed."
            },
            {
              "term": "Proxy variable",
              "def": "A feature such as postcode or shopping pattern that correlates with a protected characteristic and can reintroduce bias even when the characteristic is removed."
            },
            {
              "term": "Disaggregated evaluation",
              "def": "Measuring model performance separately for each relevant group rather than only in aggregate."
            },
            {
              "term": "Automation bias",
              "def": "The human tendency to over-trust automated outputs and under-scrutinize them, which can amplify model bias in practice."
            },
            {
              "term": "Amazon SageMaker Clarify",
              "def": "An AWS capability that detects bias in data and models (pre-training, post-training and in production) and explains predictions through feature attributions."
            }
          ],
          "examTips": [
            "Bias can enter at problem framing, data collection, labeling, training, evaluation, deployment, feedback loops and over time in production; options naming only one stage are incomplete.",
            "Removing a protected attribute from the data does not remove bias because of proxy variables; answers relying solely on deletion are distractors.",
            "Bias-drift monitoring needs a baseline, a schedule, an allowed range and an alert path, mirroring general drift monitoring."
          ],
          "sources": [
            {
              "title": "Bias drift for models in production - Amazon SageMaker AI",
              "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-monitor-bias-drift.html"
            },
            {
              "title": "Fairness, model explainability and bias detection with SageMaker Clarify",
              "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-configure-processing-jobs.html"
            },
            {
              "title": "Amazon ditched AI recruitment software because it was biased against women (MIT Technology Review)",
              "url": "https://www.technologyreview.com/f/612253/amazon-ditched-ai-recruitment-software-because-it-was-biased-against-women/"
            }
          ]
        },
        {
          "id": "3.3.3",
          "skill": "Manage harmful content risks and intellectual property (IP) concerns for AI systems.",
          "title": "Harmful Content and Intellectual Property",
          "minutes": 15,
          "content": [
            {
              "type": "p",
              "text": "Generative AI introduces two risk families that traditional analytics never had: the system can **produce content that harms** people or the brand, and it can **create, consume or leak intellectual property** in ways that trigger legal claims. Both are managed through a combination of technical safeguards, contractual terms and policy, and both appear on the exam as scenario questions asking for the MOST appropriate mitigation."
            },
            {
              "type": "h",
              "text": "Harmful content risks"
            },
            {
              "type": "table",
              "headers": [
                "Risk",
                "Example",
                "Primary mitigation"
              ],
              "rows": [
                [
                  "Toxic or abusive output",
                  "Assistant insults a customer or produces hateful text",
                  "Content filters (hate, insults, sexual, violence, misconduct) with tuned strength; brand word filters"
                ],
                [
                  "Dangerous advice",
                  "Medical dosing, self-harm, legal or financial advice outside scope",
                  "Denied topics; safe fallback responses; escalation to humans"
                ],
                [
                  "Misinformation and deepfakes",
                  "Synthetic images or claims presented as real",
                  "Watermarking and labeling of AI-generated content; disclosure; approval workflows for public content"
                ],
                [
                  "Prompt attacks and jailbreaks",
                  "User manipulates the model into ignoring rules",
                  "Prompt-attack filters; input validation; least-privilege tools for agents"
                ],
                [
                  "Content inappropriate for audience",
                  "Adult content in a children's product",
                  "Strict filter settings; age-appropriate design; human moderation sampling"
                ],
                [
                  "Reputational harm",
                  "Screenshots of a chatbot going viral",
                  "Red-teaming before launch; incident playbooks; communications plan"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Over-blocking is also a harm: a filter so strict it refuses legitimate requests destroys the value of the system and frustrates users. Mature governance measures both harmful-output rates and false-positive refusal rates and tunes filter strength per category and use case."
            },
            {
              "type": "h",
              "text": "Intellectual property concerns"
            },
            {
              "type": "table",
              "headers": [
                "IP concern",
                "What can go wrong",
                "Mitigation"
              ],
              "rows": [
                [
                  "Training data copyright",
                  "Models trained on copyrighted works without license; lawsuits against providers (for example, news publishers versus model developers; Getty Images versus Stability AI in the UK, where core copyright claims were dropped and the 2025 ruling left the training question open)",
                  "Prefer providers that document data provenance and offer indemnification; for your own fine-tuning, use licensed or owned data"
                ],
                [
                  "Output infringement",
                  "Generated text, code or images reproduce protected material",
                  "Provider output indemnities; output similarity checks; human review for published or commercial content"
                ],
                [
                  "Ownership of outputs",
                  "Unclear who owns AI-generated assets; in many jurisdictions purely AI-generated works may not be copyrightable",
                  "Contract terms assigning output rights; human creative contribution; legal guidance on registrability"
                ],
                [
                  "Trade-secret leakage via prompts",
                  "Employees paste confidential code, contracts or strategy into public tools; data used to train the provider's model",
                  "Approved-tools policy; enterprise services with no-training terms (Amazon Bedrock does not use customer inputs or outputs to train base models); PII and secret filters; training"
                ],
                [
                  "Model and data exfiltration",
                  "Fine-tuned model or proprietary dataset copied or exposed",
                  "Access controls, encryption, classification of the model at training-data sensitivity"
                ],
                [
                  "Trademark and brand misuse",
                  "Outputs mimic competitor brands or protected marks",
                  "Word filters for competitor names; brand review; note that trademark claims are typically excluded from provider indemnities"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "aws",
              "title": "AWS IP indemnification",
              "text": "Under Section 50.10 of the AWS Service Terms, AWS will defend customers against third-party claims that generative AI output from an Indemnified Generative AI Service infringes or misappropriates IP rights, and pay resulting judgments or settlements; AWS documentation describes this coverage as uncapped for generally available Amazon Nova models. The indemnified list includes generally available Amazon Nova and Amazon Titan models and several AWS services with embedded GenAI (for example, Amazon Q and Amazon Quick). Exclusions matter for governance: no coverage where the customer's inputs themselves infringe, where the customer disabled or failed to enable available filters and tools, where use breaches the agreement, where the customer fine-tuned or modified the service and the infringement would not otherwise have occurred, where the customer knew or should have known the output infringes, and for trademark claims. Third-party models available in Bedrock are covered by their own providers' terms, so check them during vendor selection."
            },
            {
              "type": "callout",
              "kind": "example",
              "title": "Policy as the first control",
              "text": "Samsung's 2023 restriction on public GenAI tools after engineers pasted confidential source code into a consumer chatbot illustrates the trade-secret problem: the data left company control permanently. The durable fix is not a ban but an approved enterprise alternative with no-training data terms, plus clear policy and training, so that productivity gains are kept and secrets are not."
            },
            {
              "type": "scenario",
              "situation": "A media company wants to use GenAI to produce images and copy for advertising campaigns at scale. Legal is worried about copyright claims on outputs and about ownership of the campaigns. Marketing is worried that filters will block edgy creative.",
              "question": "What should the strategist recommend?",
              "answer": "Select models whose providers offer output IP indemnification and document training-data provenance (on AWS, generally available Amazon Nova image and text models carry AWS indemnity, subject to keeping filters enabled and not feeding infringing inputs), keep content filters and word filters enabled and tune strength per campaign type rather than disabling them, require human creative review and a similarity check before publication (which also strengthens copyright ownership through human contribution), label synthetic imagery where required, and set contract terms with agencies on output ownership. Disabling filters to satisfy marketing would both increase harmful-content risk and void the indemnity."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "Indemnity has conditions",
              "text": "If an option says 'rely on the provider's IP indemnity' while also describing disabled safety filters, knowingly infringing inputs or an unmodified claim about trademarks, it is a trap: those are the standard exclusions. Correct answers pair indemnified models with enabled guardrails and human review."
            }
          ],
          "keyTerms": [
            {
              "term": "Harmful content",
              "def": "AI output that is toxic, abusive, dangerous, deceptive or inappropriate for the audience, including misinformation and deepfakes."
            },
            {
              "term": "IP indemnification",
              "def": "A provider's contractual promise to defend the customer against, and pay for, third-party claims that AI outputs infringe intellectual property rights, subject to exclusions."
            },
            {
              "term": "Indemnified Generative AI Service",
              "def": "The AWS Service Terms category covering generally available Amazon Nova and Amazon Titan models and certain AWS services whose outputs AWS will defend against IP claims."
            },
            {
              "term": "Trade-secret leakage",
              "def": "Loss of confidential business information when it is entered into AI tools that store it or use it for training outside the organization's control."
            },
            {
              "term": "Red-teaming",
              "def": "Deliberate adversarial testing of an AI system before and after launch to find harmful outputs, jailbreaks and data leaks."
            },
            {
              "term": "Content provenance and watermarking",
              "def": "Techniques for labeling or embedding signals in AI-generated content so that it can be identified as synthetic."
            }
          ],
          "examTips": [
            "For harmful content, match the risk to the Bedrock Guardrails policy: toxic output = content filters; out-of-scope advice = denied topics; competitor or profanity = word filters; prompt manipulation = prompt-attack filter.",
            "For IP, three levers appear in correct answers: indemnified or provenance-documented models, enterprise no-training data terms, and human review before publication.",
            "A total ban on GenAI is rarely the best answer; the exam prefers approved enterprise alternatives with policy and training."
          ],
          "sources": [
            {
              "title": "AWS Service Terms (Section 50.10, Indemnified Generative AI Services)",
              "url": "https://aws.amazon.com/service-terms/"
            },
            {
              "title": "Responsible use - Amazon Nova (Intellectual Property)",
              "url": "https://docs.aws.amazon.com/nova/latest/userguide/responsible-use.html"
            },
            {
              "title": "Detect and filter harmful content by using Amazon Bedrock Guardrails",
              "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
            },
            {
              "title": "The first major UK ruling on generative AI and IP rights (DWF)",
              "url": "https://dwfgroup.com/en/news-and-insights/insights/2025/11/the-first-major-uk-ruling-on-generative-ai-and-ip-rights"
            },
            {
              "title": "Samsung bans ChatGPT among employees after sensitive code leak (Forbes Australia)",
              "url": "https://www.forbes.com.au/news/innovation/samsung-bans-chatgpt-among-employees-after-sensitive-code-leak/"
            }
          ]
        },
        {
          "id": "3.3.4",
          "skill": "Identify and mitigate risks related to AI system reliability (for example, hallucinations, data quality degradation, model drift).",
          "title": "Reliability: Hallucinations, Data Quality, Drift",
          "minutes": 14,
          "content": [
            {
              "type": "p",
              "text": "An AI system is **reliable** when it keeps producing correct, consistent outputs over time and across the range of inputs it meets in practice. The exam names three reliability threats: **hallucinations** (confident but false output), **data quality degradation** (the inputs feeding the system deteriorate) and **model drift** (the model's fit to reality decays). Each has a distinct cause and a distinct mitigation set, and questions test whether you can tell them apart and choose the right fix."
            },
            {
              "type": "h",
              "text": "Hallucinations"
            },
            {
              "type": "p",
              "text": "Foundation models are token-prediction engines, not information-retrieval systems; AWS's own service cards state that completions may contradict the prompt or verifiable facts and may be written with unwarranted confidence. Hallucinations are therefore an inherent property to be managed, not a bug to be eliminated. Business consequences range from embarrassing to legally binding, as the Air Canada chatbot case showed."
            },
            {
              "type": "table",
              "headers": [
                "Mitigation",
                "How it works",
                "When to use"
              ],
              "rows": [
                [
                  "Retrieval Augmented Generation (RAG)",
                  "Ground responses in your own authoritative documents retrieved at query time (for example, Amazon Bedrock Knowledge Bases)",
                  "Any use case requiring current, proprietary or policy-accurate answers"
                ],
                [
                  "Citations and source attribution",
                  "Show users which document supports each statement so they can verify",
                  "Customer-facing and professional use; builds trust and enables checking"
                ],
                [
                  "Contextual grounding checks",
                  "Score the response for grounding in the source and relevance to the question; block below a threshold",
                  "RAG applications on Amazon Bedrock; summarization and question answering"
                ],
                [
                  "Automated Reasoning checks",
                  "Validate responses against formal logic rules derived from policy documents",
                  "Rule-heavy domains such as HR, benefits, pricing and compliance"
                ],
                [
                  "Confidence thresholds and escalation",
                  "Route low-confidence or ungrounded answers to a safe fallback or a human",
                  "Consequential or high-value interactions"
                ],
                [
                  "Prompt design and scope limits",
                  "Instruct the model to say 'I do not know', restrict to approved topics, lower creativity settings for factual tasks",
                  "All deployments; cheap first line"
                ],
                [
                  "Evaluation sets and human feedback",
                  "Measure hallucination rate against a curated question set before launch and continuously",
                  "Release criteria and monitoring"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Data quality degradation"
            },
            {
              "type": "ul",
              "items": [
                "Causes: broken or changed upstream feeds, schema changes, duplicated or stale records, sensor faults, declining completeness as processes change, knowledge bases that are never refreshed.",
                "Symptoms: rising error rates without a model change, more 'unknown' or default outputs, odd distributions in monitoring reports, customer complaints about outdated answers.",
                "Mitigations: data quality monitoring against a baseline (completeness, validity, freshness), data ownership and stewardship (someone accountable for each source), automated validation before data reaches the model, scheduled refresh of RAG knowledge bases with content owners, and alerts tied to a response playbook."
              ]
            },
            {
              "type": "h",
              "text": "Model drift"
            },
            {
              "type": "ul",
              "items": [
                "Data drift (inputs change) and concept drift (the input-outcome relationship changes) both reduce accuracy over time even if the model is untouched.",
                "Mitigations: monitor prediction quality and input distributions against the training baseline (SageMaker Model Monitor is the AWS reference example), set retraining triggers, keep champion-challenger evaluation so a new model must beat the old on a held-out set before replacing it, and re-test when a vendor releases a new foundation-model version.",
                "Governance point: assign an owner and a review cadence for every production model; drift is a maintenance obligation, not an incident."
              ]
            },
            {
              "type": "table",
              "headers": [
                "Symptom",
                "Most likely cause",
                "First action"
              ],
              "rows": [
                [
                  "Assistant states policy details that do not exist",
                  "Hallucination (ungrounded generation)",
                  "Ground in authoritative sources, add grounding checks and citations"
                ],
                [
                  "Forecast accuracy declines gradually over months",
                  "Model drift (data or concept)",
                  "Compare live inputs and outcomes to baseline; retrain on recent data"
                ],
                [
                  "Sudden spike in errors after a system integration change",
                  "Data quality degradation (upstream change)",
                  "Validate inputs; check schema and feed; fix the source"
                ],
                [
                  "Assistant gives outdated prices after a price change",
                  "Stale knowledge base (data freshness)",
                  "Refresh and re-index content; assign content ownership"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "aws",
              "title": "AWS reliability toolkit at a glance",
              "text": "Amazon Bedrock Knowledge Bases provides managed RAG with source attribution (citations). Amazon Bedrock Guardrails contextual grounding checks and Automated Reasoning checks detect hallucinations. Bedrock model evaluation compares models for accuracy and robustness. Amazon SageMaker Model Monitor is the canonical example of drift and data quality monitoring for custom models (now closed to new customers, but the concepts stand). The strategist's role is to require these controls in release criteria and operating budgets."
            },
            {
              "type": "scenario",
              "situation": "A financial-advice firm's GenAI assistant, built on a foundation model with no retrieval layer, has twice quoted fund fees incorrectly to clients. The CTO proposes switching to a larger, more expensive model.",
              "question": "Is this the right fix?",
              "answer": "No. The failures are hallucinations caused by asking a token-prediction model to recall facts it was never reliably given. A larger model may hallucinate less often but will still invent fees. The appropriate fix is to ground the assistant in the firm's authoritative fee documents using RAG with citations, add contextual grounding checks so ungrounded answers are blocked, route fee questions below a confidence threshold to a human adviser, and add fee-accuracy questions to a pre-release evaluation set. Given regulatory exposure for financial advice, denied-topic controls and human review for personalized recommendations are also warranted."
            },
            {
              "type": "callout",
              "kind": "exam-tip",
              "title": "Bigger model is the distractor",
              "text": "For hallucination questions, 'use a larger or newer model', 'increase temperature' or 'add more training data' are almost always wrong. Grounding (RAG), citations, grounding checks, confidence thresholds and human escalation are the right family. For drift, 'retrain once' without monitoring is incomplete; the answer must include ongoing monitoring against a baseline."
            }
          ],
          "keyTerms": [
            {
              "term": "Hallucination",
              "def": "A confident, fluent AI output that is factually incorrect, unsupported by sources or contradicts the prompt."
            },
            {
              "term": "Retrieval Augmented Generation (RAG)",
              "def": "A technique that retrieves relevant authoritative documents at query time and supplies them to the model so answers are grounded in trusted content."
            },
            {
              "term": "Amazon Bedrock Knowledge Bases",
              "def": "A managed RAG capability in Amazon Bedrock that connects foundation models to an organization's data sources and returns responses with source citations."
            },
            {
              "term": "Confidence threshold",
              "def": "A minimum score (for example, grounding or model confidence) below which an output is blocked, replaced with a safe fallback or escalated to a human."
            },
            {
              "term": "Data quality degradation",
              "def": "Deterioration in the completeness, accuracy, freshness or consistency of data feeding an AI system, often from upstream changes."
            },
            {
              "term": "Model drift",
              "def": "Decline in a model's predictive performance over time because the input data or the input-outcome relationship has changed since training."
            }
          ],
          "examTips": [
            "Distinguish the three: hallucination = model invents; data quality degradation = inputs deteriorate; model drift = world changes relative to training. Each has its own first action.",
            "Citations do not guarantee correctness but enable verification; the exam treats them as a transparency and veracity control, especially with grounding checks.",
            "Reliability controls belong in release criteria and in ongoing operating budgets; an answer that treats them as a one-time pre-launch task is incomplete."
          ],
          "sources": [
            {
              "title": "Use contextual grounding check to filter hallucinations in responses",
              "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding-check.html"
            },
            {
              "title": "Amazon Bedrock Knowledge Bases",
              "url": "https://aws.amazon.com/bedrock/knowledge-bases"
            },
            {
              "title": "AWS AI Service Cards - Amazon Nova Micro, Lite, Pro, and Premier (Veracity and Information Retrieval sections)",
              "url": "https://docs.aws.amazon.com/ai/responsible-ai/nova-micro-lite-pro/overview.html"
            },
            {
              "title": "Data and model quality monitoring with Amazon SageMaker Model Monitor",
              "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html"
            },
            {
              "title": "BC Tribunal Confirms Companies Remain Liable for Information Provided by AI Chatbot (American Bar Association)",
              "url": "https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/"
            }
          ]
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "d3-q01",
      "skill": "3.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A mortgage lender discovers that its AI underwriting model declines applicants from two neighborhoods at nearly twice the rate of applicants with equivalent credit histories elsewhere. Which responsible AI dimension does this issue MOST directly concern?",
      "options": [
        "Explainability",
        "Fairness",
        "Controllability",
        "Veracity and robustness"
      ],
      "answer": [
        1
      ],
      "explanation": "Fairness is defined by AWS as considering impacts on different groups of stakeholders; systematically worse outcomes for applicants from certain neighborhoods with equivalent credit profiles is a fairness problem (and likely a fair-lending compliance issue). Explainability concerns understanding why a specific decision was made, controllability concerns the ability to monitor and steer the system, and veracity and robustness concern correctness under varied inputs. None of those is the primary issue here."
    },
    {
      "id": "d3-q02",
      "skill": "3.1.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A retailer deploys a GenAI shopping assistant. Customers are not told they are chatting with an AI system, and the assistant has no published description of its limitations. According to AWS's responsible AI dimensions, which dimension is the company neglecting?",
      "options": [
        "Transparency",
        "Explainability",
        "Safety",
        "Privacy and security"
      ],
      "answer": [
        0
      ],
      "explanation": "Transparency is enabling stakeholders to make informed choices about their engagement with an AI system, which includes disclosing that they are interacting with AI and communicating limitations (the EU AI Act also requires chatbot disclosure). Explainability is about understanding specific outputs, not disclosure. Safety concerns harmful outputs, and privacy and security concern data and model protection; neither is described in the scenario."
    },
    {
      "id": "d3-q03",
      "skill": "3.1.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A health insurer's data science team reports that a complex deep-learning model predicts claim fraud 5 percentage points more accurately than a transparent rules-plus-scoring model. Regulators require the insurer to give claimants specific reasons when claims are denied. The COO wants to maximize fraud savings. What is the MOST appropriate recommendation?",
      "options": [
        "Deploy the deep-learning model for all decisions because higher accuracy reduces harm to honest claimants overall",
        "Use the deep-learning model to prioritize claims for human investigation, and base any customer-facing denial on reasons a person can state and defend",
        "Deploy the transparent model only and abandon the deep-learning model to avoid any regulatory risk",
        "Deploy the deep-learning model and provide claimants with a generic statement that an algorithm flagged their claim"
      ],
      "answer": [
        1
      ],
      "explanation": "The correct answer captures most of the value (better triage) while meeting the explainability and fairness obligation for consequential decisions: a wrong flag is reversible because a human investigates, and denials remain explainable. Option A ignores the regulatory requirement for specific reasons. Option C leaves significant value on the table when a proportionate design exists. Option D fails the explainability requirement because a generic statement is not a specific reason."
    },
    {
      "id": "d3-q04",
      "skill": "3.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A marketing team wants to launch a GenAI campaign generator in two weeks to hit a seasonal window. The responsible AI office says a full bias and safety review takes six weeks. Which approach BEST balances the business objective with responsible AI principles?",
      "options": [
        "Skip the review for this launch and schedule it after the seasonal window closes",
        "Delay the launch until the full six-week review is complete regardless of the seasonal window",
        "Launch a limited pilot with guardrails enabled, human review of all published content, and defined criteria for expanding scope after the review completes",
        "Launch at full scale with content filters disabled to avoid blocking creative output, and monitor social media for complaints"
      ],
      "answer": [
        2
      ],
      "explanation": "A limited, monitored pilot with guardrails and human review of outputs is the proportionate resolution the exam rewards: it captures time-sensitive value while bounding risk and documenting a path to full launch. Skipping review (A) is not a defensible tradeoff. Delaying indefinitely (B) ignores the business objective when a safer middle path exists. Disabling filters and relying on complaint monitoring (D) increases harmful-content risk and would void output IP indemnity conditions."
    },
    {
      "id": "d3-q05",
      "skill": "3.1.3",
      "type": "single",
      "difficulty": "easy",
      "question": "A company's compliance team learns of a GenAI prototype for drafting customer letters only when it is ready for production. The prototype has no record of data consent, no success criteria for accuracy, and no plan for human review. Which practice would MOST directly have prevented this situation?",
      "options": [
        "Running a Well-Architected review immediately before go-live",
        "Establishing an AI use-case intake process that routes projects to governance review at ideation",
        "Purchasing a larger foundation model with better built-in safety",
        "Requiring the legal team to approve all production deployments"
      ],
      "answer": [
        1
      ],
      "explanation": "Governance by design means responsible AI requirements enter at use-case definition; an intake process that registers and risk-tiers projects at ideation ensures compliance, consent, release criteria and oversight are designed in. A pre-go-live review (A) and legal approval at deployment (D) happen too late to shape data and architecture choices. A larger model (C) does not address consent, criteria or oversight."
    },
    {
      "id": "d3-q06",
      "skill": "3.1.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "A bank is planning a new AI initiative to prioritize collections calls. The program manager asks which responsible AI activities should occur during the planning phase, before any model is built. Which TWO activities belong in planning?",
      "options": [
        "Define measurable release criteria for accuracy, fairness and safety",
        "Run bias-drift monitoring on live predictions",
        "Assess benefits and risks for each affected stakeholder group and assign a risk tier",
        "Tune the content filter strength based on production false-positive rates",
        "Retrain the model on the most recent quarter of data"
      ],
      "answer": [
        0,
        2
      ],
      "explanation": "The AWS Responsible AI Lens places 'assess benefits and risks' and 'define release criteria' early in the lifecycle, before datasets and systems are designed; these decisions shape everything that follows. Bias-drift monitoring (B) and filter tuning on production data (D) are operate-phase activities, and retraining on recent data (E) presupposes a model already exists."
    },
    {
      "id": "d3-q07",
      "skill": "3.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A telecommunications company's RAG-based support assistant on Amazon Bedrock occasionally states plan features that do not appear in the company's documentation. The company wants to automatically detect and block these responses. Which Amazon Bedrock Guardrails capability is MOST appropriate?",
      "options": [
        "Denied topics",
        "Sensitive information filters",
        "Contextual grounding checks",
        "Word filters"
      ],
      "answer": [
        2
      ],
      "explanation": "Contextual grounding checks score a response for grounding in the retrieved source and relevance to the query and block responses below a threshold, which is exactly how Bedrock Guardrails detects hallucinations in RAG applications. Denied topics block defined subject areas, sensitive information filters mask PII, and word filters block specific words or phrases; none evaluates whether a response is supported by the source material."
    },
    {
      "id": "d3-q08",
      "skill": "3.1.4",
      "type": "multi",
      "difficulty": "hard",
      "question": "A logistics company is designing a GenAI agent that can approve customer refunds during chat. Which TWO design decisions are MOST consistent with appropriate human oversight?",
      "options": [
        "Require a human to approve every refund the agent proposes regardless of amount",
        "Allow automatic refunds below a defined value threshold and route higher-value or repeat requests to a human approver",
        "Give the agent full autonomy and review refund totals in the quarterly financial close",
        "Maintain a kill switch and aggregate alerts so operations staff can pause the refund tool if volumes spike",
        "Increase the model's temperature so it is more flexible in handling unusual refund requests"
      ],
      "answer": [
        1,
        3
      ],
      "explanation": "Confidence- or value-based routing (B) applies human-in-the-loop review where financial impact is highest while preserving speed for low-risk cases, and a kill switch with monitoring (D) provides human-on-the-loop controllability for an irreversible action. Approving every refund manually (A) destroys the value and does not scale. Quarterly review (C) is far too late for irreversible payments. Raising temperature (E) increases output variability and has nothing to do with oversight."
    },
    {
      "id": "d3-q09",
      "skill": "3.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "An HR department wants a GenAI assistant that answers employee questions about leave entitlements, which are defined in a detailed policy document. Legal insists that answers must never contradict the written policy. Which Amazon Bedrock Guardrails capability BEST addresses this requirement?",
      "options": [
        "Automated Reasoning checks that validate responses against logic rules derived from the policy document",
        "Content filters set to the highest strength for all categories",
        "Word filters that block the names of competitors",
        "Image content filters applied to uploaded documents"
      ],
      "answer": [
        0
      ],
      "explanation": "Automated Reasoning checks encode policy documents as formal logic rules and validate whether a response is consistent with them, flagging contradictions and suggesting corrections; this is designed for rule-heavy domains such as HR policies. Content filters address harmful categories, word filters block specific terms, and image filters address visual content; none verifies policy consistency."
    },
    {
      "id": "d3-q10",
      "skill": "3.2.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A manufacturer's AI projects are run independently by three business units, each selecting vendors and policies on its own. After two privacy complaints, the CEO asks for a governance structure. Which proposal BEST provides cross-functional representation and clear accountability?",
      "options": [
        "Appoint the CIO as sole approver of all AI projects across the company",
        "Create an executive-sponsored AI steering committee including legal, privacy, security, HR, finance and the business units, supported by a central responsible AI office, with a RACI making each product owner accountable for their system",
        "Allow each business unit to continue independently but require a quarterly report to the board",
        "Form a committee of data scientists from each unit to set technical standards for model quality"
      ],
      "answer": [
        1
      ],
      "explanation": "The correct option combines cross-functional membership (legal, privacy, security, HR, finance, business) with clear accountability through a RACI and a central enabling office, which is the pattern the exam rewards. A single approver (A) lacks multidisciplinary perspective and becomes a bottleneck. Continued autonomy with reporting (C) preserves the structure that caused the complaints. A data-scientist-only committee (D) is not cross-functional and does not address accountability for privacy."
    },
    {
      "id": "d3-q11",
      "skill": "3.2.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A US staffing company plans to use an AI tool trained on historical hiring outcomes to rank job candidates for clients in the United States and Germany. Which statement BEST describes the compliance exposure the strategist should flag?",
      "options": [
        "Only US anti-discrimination law applies because the company is headquartered in the US",
        "The tool is minimal risk under the EU AI Act because it only ranks rather than decides, so no additional obligations apply",
        "The German deployments fall under EU AI Act high-risk obligations for employment, candidate data is governed by GDPR including Article 22 safeguards, and US anti-discrimination law applies to ranking outcomes",
        "Because the tool is provided by a vendor, all regulatory obligations rest with the vendor"
      ],
      "answer": [
        2
      ],
      "explanation": "Regulations stack: recruitment and candidate evaluation are high-risk use cases under the EU AI Act, candidate data is personal data under GDPR (with Article 22 rights to human intervention for significant automated decisions), and US employment discrimination law applies to disparate impact. The Act applies to systems affecting people in the EU regardless of provider location (A). Ranking that materially influences hiring is not minimal risk (B). Deployers retain obligations such as human oversight and lawful data use even when using a vendor tool (D)."
    },
    {
      "id": "d3-q12",
      "skill": "3.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A hospital group wants to use a GenAI service to summarize patient records. The vendor states the service is 'HIPAA eligible'. What does this mean for the hospital's compliance obligations?",
      "options": [
        "The workload is automatically HIPAA compliant once the hospital starts using the service",
        "The service can be used with protected health information under a Business Associate Addendum, but the hospital remains responsible for configuring, monitoring and operating the workload in line with HIPAA rules",
        "HIPAA no longer applies because the data is processed by a third party",
        "The hospital must obtain FDA approval before using the service"
      ],
      "answer": [
        1
      ],
      "explanation": "HIPAA eligibility means the provider supports use with PHI under a BAA; under the shared responsibility model the customer still owns access controls, minimum-necessary use, audit logging and operational compliance. Eligibility is not compliance (A). Using a processor does not remove the covered entity's obligations (C). FDA approval relates to medical devices, not to HIPAA data handling for record summarization (D)."
    },
    {
      "id": "d3-q13",
      "skill": "3.2.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A pharmaceutical company is building an internal GenAI assistant on Amazon Bedrock that retrieves from clinical trial documents, some of which contain patient identifiers and unpublished results. Under the AWS shared responsibility model, which security measure is the CUSTOMER responsible for?",
      "options": [
        "Physical security of the data centers that host Amazon Bedrock",
        "Patching the underlying infrastructure that runs the foundation models",
        "Classifying the documents and restricting retrieval so users can only access documents they are authorized to read",
        "Preventing third-party model providers from accessing customer prompts"
      ],
      "answer": [
        2
      ],
      "explanation": "Security in the cloud, including data classification, identity and access management and application-level access control before data reaches the model, is the customer's responsibility. Physical security (A) and infrastructure patching (B) are AWS responsibilities (security of the cloud). Bedrock's architecture already prevents model providers from accessing prompts and completions (D), which is part of the managed service AWS operates."
    },
    {
      "id": "d3-q14",
      "skill": "3.2.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "Employees at a consulting firm have been pasting client contracts into a public consumer chatbot to summarize them. The CISO wants to reduce trade-secret and confidentiality risk without eliminating productivity gains. Which TWO actions are MOST appropriate?",
      "options": [
        "Publish an approved-tools policy and train staff on what data may be entered into which tools",
        "Provide an enterprise GenAI service whose terms state that customer inputs and outputs are not used to train the provider's models",
        "Block all generative AI tools at the network level indefinitely",
        "Require employees to delete chatbot history after each session",
        "Ask the public chatbot provider to sign a non-disclosure agreement after the fact"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "Consumer-app use (Scope 1 in the AWS Generative AI Security Scoping Matrix) is governed by policy and training, and the durable fix is an approved enterprise alternative with no-training data terms (Amazon Bedrock, for example, does not use customer inputs or outputs to train base models). A blanket indefinite ban (C) forfeits productivity and tends to drive shadow AI. Deleting history (D) does not recall data already processed by the provider. A retroactive NDA (E) is impractical and does not undo exposure."
    },
    {
      "id": "d3-q15",
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "easy",
      "question": "Which of the following AI uses would be classified as HIGH RISK under the EU AI Act risk tiers?",
      "options": [
        "A spam filter for corporate email",
        "An AI system that scores job applicants during recruitment",
        "A customer-service chatbot that discloses it is an AI",
        "An AI-powered non-player character in a video game"
      ],
      "answer": [
        1
      ],
      "explanation": "Recruitment and employee evaluation are listed high-risk use cases under the EU AI Act, carrying obligations such as risk management, data governance, logging, human oversight and conformity assessment. Spam filters and video games are minimal-risk examples cited by the European Commission, and a chatbot that discloses it is AI falls under the transparency tier."
    },
    {
      "id": "d3-q16",
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A multinational wants to demonstrate to customers and regulators, through independent third-party certification, that it manages AI responsibly across its lifecycle. Which framework is the MOST appropriate basis?",
      "options": [
        "NIST AI Risk Management Framework",
        "AWS Well-Architected Responsible AI Lens",
        "ISO/IEC 42001",
        "OECD AI Principles"
      ],
      "answer": [
        2
      ],
      "explanation": "ISO/IEC 42001:2023 is the first international, certifiable AI management system standard, audited by independent certification bodies, so it fits a need for externally verifiable assurance. The NIST AI RMF is a voluntary framework and is not a certification. The Responsible AI Lens is AWS best-practice guidance, explicitly not a compliance checklist. The OECD AI Principles are high-level intergovernmental principles, not a certifiable standard."
    },
    {
      "id": "d3-q17",
      "skill": "3.2.4",
      "type": "multi",
      "difficulty": "hard",
      "question": "A bank's chief risk officer can staff rigorous governance review for only a few of twelve proposed GenAI projects. Which TWO projects should receive the most rigorous review under a risk-classification approach?",
      "options": [
        "An internal assistant that searches HR policy documents for employees",
        "A model that automatically adjusts customers' credit limits",
        "A tool that drafts internal meeting summaries from recorded calls",
        "A system that flags and blocks customer transactions as suspected fraud without human review",
        "A chatbot that answers questions about branch opening hours"
      ],
      "answer": [
        1,
        3
      ],
      "explanation": "Systems that make or materially influence consequential decisions about customers (credit limits, blocking transactions) are high risk under EU AI Act logic (creditworthiness and essential services) and attract fair-lending and model-risk obligations, so they warrant the most rigorous review. Internal policy search (A), meeting summaries (C) and opening-hours chatbots (E) are minimal or transparency-tier uses that can proceed under lightweight checklists with standard guardrails and disclosure."
    },
    {
      "id": "d3-q18",
      "skill": "3.3.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A software company's GenAI support assistant achieved 35 percent ticket deflection at launch. Six months later deflection has fallen to 22 percent; during that period the vendor released two model versions and the company changed its pricing pages. No one can explain the decline. What should the strategist direct FIRST?",
      "options": [
        "Switch to a different foundation-model vendor",
        "Establish monitoring that compares current grounding scores, question topics, escalation rates and ratings with the launch baseline, segmented by model version and content changes",
        "Retrain the assistant on all historical tickets",
        "Increase the size of the knowledge base by adding all internal documents"
      ],
      "answer": [
        1
      ],
      "explanation": "The decline is a symptom of missing production monitoring: without a baseline comparison segmented by model version and content change, the cause cannot be diagnosed. Switching vendors (A), retraining (C) or indiscriminately enlarging the knowledge base (D) are actions without diagnosis and may not address stale pricing content or an unevaluated model update."
    },
    {
      "id": "d3-q19",
      "skill": "3.3.1",
      "type": "single",
      "difficulty": "easy",
      "question": "Why do AI systems in production require ongoing monitoring that traditional rule-based software typically does not?",
      "options": [
        "AI systems consume more compute, so costs must be tracked",
        "The data an AI system sees and the real-world relationships it learned can change over time, degrading performance even when the system itself is unchanged",
        "AI systems cannot be tested before deployment",
        "Regulators require monitoring only for AI systems and never for other software"
      ],
      "answer": [
        1
      ],
      "explanation": "Data drift and concept drift mean a model's accuracy can decay without any code change, which is why baselines, drift monitoring and response playbooks are needed. Cost tracking (A) is relevant but not the distinguishing reason. AI systems can and must be tested pre-deployment (C). Regulatory monitoring requirements exist for many kinds of software (D)."
    },
    {
      "id": "d3-q20",
      "skill": "3.3.2",
      "type": "single",
      "difficulty": "hard",
      "question": "An insurer's claims-triage model passed a fairness review at launch. Eighteen months later, claims from older policyholders are being routed to lengthy manual investigation at a disproportionate rate. The data science team notes the model has not been changed since launch. What is the MOST likely explanation and the appropriate response?",
      "options": [
        "The launch review was sufficient; the complaint should be dismissed because the model is unchanged",
        "Bias drift: live data has diverged from training data, so the insurer should run disaggregated analysis against the launch baseline and institute scheduled bias-drift monitoring with alert thresholds",
        "The model was hacked; the insurer should rotate all credentials",
        "Protected attributes should be removed from the training data and the model redeployed without further monitoring"
      ],
      "answer": [
        1
      ],
      "explanation": "A model that was fair at launch can become unfair in production when the distribution of live data shifts; this is bias drift, and the response is disaggregated measurement against the baseline plus ongoing scheduled monitoring. Launch review alone is insufficient by definition (A). Nothing suggests a security breach (C). Removing protected attributes does not remove bias because of proxy variables, and 'without further monitoring' repeats the original failure (D)."
    },
    {
      "id": "d3-q21",
      "skill": "3.3.2",
      "type": "multi",
      "difficulty": "medium",
      "question": "A retailer is reviewing where bias could enter its new AI-driven credit-offer system. Which THREE lifecycle stages can introduce bias?",
      "options": [
        "Defining the prediction target based on who historically received offers",
        "Collecting training data that under-represents certain customer segments",
        "Encrypting the model artifacts at rest",
        "Deploying the model to a market it was never evaluated on",
        "Choosing a cloud Region for hosting"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "Bias can enter at problem framing (a target that encodes past unfair allocation), data collection (under-representation) and deployment (applying a model to a population outside its evaluation scope), among other stages. Encryption at rest (C) and Region selection (E) are security and infrastructure choices that do not affect how the model treats groups."
    },
    {
      "id": "d3-q22",
      "skill": "3.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A media company plans to generate advertising images with a generally available Amazon Nova model on Amazon Bedrock and wants to rely on AWS's intellectual property indemnification for the outputs. Which practice would put that protection at risk?",
      "options": [
        "Keeping Amazon Bedrock Guardrails content filters enabled",
        "Disabling available safety filters to allow edgier creative output",
        "Having a human reviewer check images before publication",
        "Using the company's own licensed brand assets as inputs"
      ],
      "answer": [
        1
      ],
      "explanation": "The AWS Service Terms exclude indemnity coverage where the customer disabled or failed to enable available filters and tools (and also where inputs infringe, where the customer modified the service, or for trademark claims). Keeping filters on (A), human review (C) and using properly licensed inputs (D) are all consistent with maintaining coverage and reducing harmful-content and IP risk."
    },
    {
      "id": "d3-q23",
      "skill": "3.3.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "A bank's public GenAI assistant must never provide investment advice and must never reproduce customers' account numbers in its responses. Which TWO Amazon Bedrock Guardrails capabilities address these requirements?",
      "options": [
        "Denied topics configured to block investment advice",
        "Sensitive information filters configured to mask account numbers and other PII",
        "Contextual grounding checks with a high relevance threshold",
        "Increasing the model's maximum response length",
        "Automated Reasoning checks against the bank's holiday calendar"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "Denied topics block defined subject areas such as investment advice, and sensitive information filters block or mask PII such as account numbers in prompts and responses. Contextual grounding checks (C) address hallucination relative to a source, not topic scope or PII. Response length (D) is unrelated. Automated Reasoning checks (E) validate policy logic, and a holiday calendar is irrelevant to the stated requirements."
    },
    {
      "id": "d3-q24",
      "skill": "3.3.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A financial-advice firm's GenAI assistant, built directly on a foundation model with no retrieval layer, has twice quoted fund fees incorrectly to clients. The CTO proposes switching to a larger, more expensive model. What should the strategist recommend instead?",
      "options": [
        "Approve the larger model because larger models do not hallucinate",
        "Ground the assistant in the firm's authoritative fee documents using RAG with citations, add contextual grounding checks, and route low-confidence fee questions to a human adviser",
        "Raise the model's temperature so it produces more varied answers",
        "Remove fee questions from the evaluation set so the error rate looks acceptable"
      ],
      "answer": [
        1
      ],
      "explanation": "The failures are hallucinations caused by asking a token-prediction model to recall facts it was never reliably given; grounding through RAG with citations, grounding checks and human escalation addresses the root cause. Larger models still hallucinate (A). Higher temperature increases variability (C). Manipulating the evaluation set hides the problem rather than fixing it (D)."
    },
    {
      "id": "d3-q25",
      "skill": "3.3.4",
      "type": "single",
      "difficulty": "hard",
      "question": "A utility's demand-forecasting model shows a sudden spike in errors the day after an upstream billing system migration, with no change to the model or to weather patterns. Which reliability risk is MOST likely, and what is the appropriate first action?",
      "options": [
        "Model drift; retrain the model on the last five years of data",
        "Hallucination; add contextual grounding checks to the forecast outputs",
        "Data quality degradation from the upstream change; validate the input feed and schema and fix the source before considering retraining",
        "Bias drift; run a fairness analysis by customer segment"
      ],
      "answer": [
        2
      ],
      "explanation": "A sudden error spike coinciding with a system migration points to data quality degradation (a changed or broken input feed), so the first action is to validate inputs and fix the source. Model drift (A) is gradual and unrelated to a migration event. Hallucination (B) applies to generative outputs, not numeric forecasts. Bias drift (D) concerns group-level fairness and does not explain the pattern."
    }
  ]
};
