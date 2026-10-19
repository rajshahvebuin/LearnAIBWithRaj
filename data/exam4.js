window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
window.AIB_DATA.exams = window.AIB_DATA.exams || [];

window.AIB_DATA.exams.push({
  "id": "exam4",
  "title": "Practice Exam 4",
  "durationMinutes": 130,
  "description": "Full-length 65-question paper at the hard end of the scale: trade-offs, sequencing and 'what should the strategist do FIRST' decisions.",
  "questions": [
    {
      "id": "e4-01",
      "domain": 2,
      "skill": "2.1.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A mining company has budget to move only one of two AI pilots forward this year. The ore-grade prediction pilot met its accuracy target, but its projected value depends on a sensor upgrade that will not be funded until next year. The haul-truck maintenance pilot delivers modest but independently verified savings today and needs no further dependencies. What should the AI strategist recommend?",
      "options": [
        "Scale the ore-grade pilot because its potential value is higher, and request that the sensor upgrade be accelerated",
        "Scale the haul-truck maintenance pilot now and pause the ore-grade pilot with a documented restart condition tied to the sensor funding",
        "Terminate the ore-grade pilot because an initiative that cannot deliver value this year has failed",
        "Scale both pilots at half scope so that neither team loses momentum"
      ],
      "answer": [1],
      "explanation": "Prioritisation under skill 2.1.3 weighs value, feasibility, sustainability and alignment, and the available decisions are scale, pause or terminate. The maintenance pilot is feasible and already proven, so it earns scaling. The ore-grade pilot is promising but blocked by an unfunded dependency, which is the textbook case for a pause with an explicit restart trigger rather than a termination that throws away validated work. Scaling the higher-potential pilot ignores a hard feasibility constraint, and splitting the budget in half typically leaves both initiatives under-resourced with neither producing production value."
    },
    {
      "id": "e4-02",
      "domain": 1,
      "skill": "1.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A professional sports franchise uses a dynamic ticket-pricing model. The data team explains that the model is retrained every Monday on the latest sales history and then scores every unsold seat once an hour throughout the week. Which statement correctly describes these two activities?",
      "options": [
        "Both activities are training, because the model learns something new each time it runs",
        "The weekly retraining is training on historical data; the hourly scoring is inference that produces price predictions",
        "The weekly retraining is inference; the hourly scoring is training on live data",
        "Both activities are inference, because the model already exists"
      ],
      "answer": [1],
      "explanation": "Skill 1.1.1 tests the vocabulary of training versus inference. Training is the periodic process of learning patterns from historical data and producing an updated model; inference is the use of that fixed model to generate predictions, here an hourly price for each seat. Hourly scoring does not change the model, so it is not training. The weekly job does change the model, so it is not inference. Calling both activities training, or both inference, confuses the learning step with the prediction step, which matters when business leaders plan compute costs and refresh cadences."
    },
    {
      "id": "e4-03",
      "domain": 3,
      "skill": "3.1.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A cosmetics company built a foundation-shade matching model for its app. Testing shows recommendation accuracy is 94 percent for lighter skin tones but 71 percent for the darkest tones because of under-representation in training images. Marketing wants to launch before the holiday season, the company's biggest sales period. Which approach BEST balances the business objective with responsible AI principles?",
      "options": [
        "Launch to all customers with a disclaimer that results may vary, and fix the gap in a later release",
        "Set a minimum accuracy parity threshold as a release gate, launch only where it is met with a human beauty-advisor fallback for low-confidence results, disclose the limitation, and fund representative data collection with a committed date",
        "Launch only for customers whose tones score well and avoid mentioning the limitation so the brand is not damaged",
        "Postpone the launch indefinitely until the model performs identically for every tone"
      ],
      "answer": [1],
      "explanation": "Skill 3.1.2 asks the strategist to navigate conflicts between revenue goals and responsible AI dimensions, here fairness and transparency. A measurable parity threshold used as a release gate, a human fallback for affected customers, honest disclosure and a funded remediation plan preserve most of the seasonal opportunity while refusing to ship a knowingly unequal experience. A disclaimer alone does not cure disparate performance. Launching selectively while hiding the limitation violates transparency and invites reputational and regulatory harm. An indefinite postponement abandons the business objective without defining what success looks like, so it is neither a trade-off nor a plan."
    },
    {
      "id": "e4-04",
      "domain": 4,
      "skill": "4.4.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A construction group has nine regional operating companies, each with its own IT function, different building codes and different union agreements. Head office wants consistent AI governance, shared platforms and reuse of successful solutions, but regional leaders insist that use cases must be chosen and delivered locally. Which center of excellence (COE) operating model is MOST appropriate?",
      "options": [
        "A fully centralized COE that selects, builds and operates every AI solution for all regions",
        "A fully federated model in which each region runs its own AI team and head office issues optional guidelines",
        "A hub-and-spoke model in which a central hub owns standards, platform, governance and reusable assets, while embedded regional spokes prioritize and deliver local use cases",
        "An outsourced COE run by a systems integrator that reports to the group CIO"
      ],
      "answer": [2],
      "explanation": "Skill 4.4.3 covers COE design choices. The hub-and-spoke model resolves the stated conflict: the hub provides the consistency head office wants (governance, platform, patterns, reuse) while spokes keep use-case selection and delivery close to regional codes, labour agreements and customers. A fully centralized COE becomes a bottleneck and lacks the local knowledge the regions correctly demand. A fully federated model preserves autonomy but recreates the duplication and inconsistent governance the group is trying to eliminate. Outsourcing the COE transfers institutional learning to a vendor and does not address the central-versus-regional tension at all."
    },
    {
      "id": "e4-05",
      "domain": 2,
      "skill": "2.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A veterinary chain will roll out a generative AI clinical-notes assistant to 300 veterinarians in six weeks. The project team proposes measuring consultation time three months after launch and comparing it with veterinarians' recollection of how long notes used to take. What should the AI strategist do FIRST?",
      "options": [
        "Approve the plan, because three months is enough time for the effect to appear",
        "Extract objective pre-launch baselines now from the practice-management system, such as average note-completion time and notes finished per consultation day",
        "Ask the vendor for its published benchmark of time savings and use that as the baseline",
        "Survey veterinarians after launch about how much faster they feel"
      ],
      "answer": [1],
      "explanation": "Skill 2.2.2 is about establishing baselines before an AI solution goes live so adoption effects can be measured credibly. Once the assistant is in use, the pre-launch state can no longer be observed directly, and recollection is subject to recency and expectation bias. Pulling objective metrics from system logs now is the one action that cannot be done later. A vendor benchmark reflects other organisations and will not survive CFO scrutiny. Post-launch perception surveys capture a useful intangible signal but cannot substitute for a measured baseline of the tangible time-savings claim."
    },
    {
      "id": "e4-06",
      "domain": 1,
      "skill": "1.2.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A public transport operator needs two capabilities: determining whether a passenger qualifies for a concession fare under published statutory eligibility rules, and predicting which bus services are likely to run late tomorrow. A vendor proposes a single machine learning solution for both. What is the MOST appropriate response?",
      "options": [
        "Accept the proposal, because machine learning handles both deterministic and probabilistic problems equally well",
        "Use rule-based automation for concession eligibility and machine learning for delay prediction, because one problem is fully specified and the other is pattern-based",
        "Use machine learning for eligibility to reduce rule-maintenance effort and fixed time buffers for delay prediction",
        "Reject AI for both and continue manual processing"
      ],
      "answer": [1],
      "explanation": "Skill 1.2.1 asks when rules are preferable to AI. Concession eligibility is defined exhaustively by statute, must be applied identically every time and must be explainable to passengers, so a rules engine is cheaper, auditable and more accurate than a learned approximation. Delay prediction depends on weather, traffic and demand patterns that cannot be written as fixed rules, so ML adds value. Applying ML to a deterministic policy introduces unnecessary error and opacity; applying static buffers to a dynamic prediction problem wastes the available data. Rejecting AI entirely forgoes the genuine value in the prediction use case."
    },
    {
      "id": "e4-07",
      "domain": 3,
      "skill": "3.2.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A wealth management firm in the European Union plans an AI system that profiles each client's risk appetite and recommends portfolios. Compliance notes that investment advice is not listed as a high-risk use in the EU AI Act, while the firm's sector regulator already requires a documented, explainable suitability rationale for every recommendation. How should the AI strategist frame the compliance approach?",
      "options": [
        "Treat the system as high-risk under the EU AI Act and defer launch until the postponed high-risk obligations apply",
        "Treat the system as minimal risk under the EU AI Act and conclude that no AI-specific compliance work is required",
        "Design to the sector regulator's suitability and record-keeping obligations now, since the EU AI Act risk tier does not displace existing financial regulation, and document the AI Act classification rationale",
        "Classify the system as a prohibited practice because it profiles individuals"
      ],
      "answer": [2],
      "explanation": "Skill 3.2.2 covers conflicts between horizontal AI regulation and sector rules. The EU AI Act layers on top of existing law; a lower AI Act tier does not relieve a firm of suitability, explainability and record-keeping duties under financial-services regulation, which are the binding constraints here. Treating the system as high-risk and waiting for deferred deadlines misreads the Act and delays value for no compliance gain. Concluding that minimal risk means no work ignores the sector regulator entirely. Profiling for investment advice is not among the Act's prohibited practices, so the prohibition framing is simply wrong."
    },
    {
      "id": "e4-08",
      "domain": 4,
      "skill": "4.1.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A staffing agency wants to scale an AI candidate-matching tool from one office to all 40. A capability assessment finds a modern data platform, trained recruiters and an engaged executive sponsor, but no policy on how recruiters should review AI rankings and no named owner accountable for the tool's outcomes. Which capability gap should be closed FIRST?",
      "options": [
        "Technology, by migrating the tool to a more scalable platform",
        "People, by hiring additional data scientists",
        "Governance, by defining accountability for outcomes and a review policy before wider rollout",
        "Process, by documenting the recruiter onboarding flow"
      ],
      "answer": [2],
      "explanation": "Skill 4.1.3 asks the strategist to locate the specific gap across people, process, technology and governance. The evidence rules out technology and people: the platform is modern and recruiters are trained. The missing elements, accountability for outcomes and rules for human review of AI rankings, are governance, and they matter acutely because employment screening is a regulated, high-impact use. Scaling without an accountable owner multiplies risk 40-fold. Documenting onboarding flow is a process improvement that does not address who is answerable when a ranking is challenged, so it comes after governance is in place."
    },
    {
      "id": "e4-09",
      "domain": 2,
      "skill": "2.1.2",
      "type": "multi",
      "difficulty": "hard",
      "question": "An aerospace component supplier wants a generative AI assistant for its maintenance manuals, which contain export-controlled technical data. It has nine months, a modest budget and no in-house machine learning staff. Three vendors have submitted proposals. Which TWO factors should MOST strongly drive the build-buy-partner decision? (Select TWO.)",
      "options": [
        "Whether each option can keep controlled technical data within the required jurisdiction and access boundaries, with contractual and audit evidence",
        "The number of logos on each vendor's customer reference slide",
        "The gap between the supplier's current capabilities and the nine-month timeline, and which option credibly closes it",
        "Which vendor's foundation model ranks highest on a public benchmark leaderboard",
        "Which vendor offers the longest free trial period",
        "Whether the vendor's user interface uses the supplier's brand colours"
      ],
      "answer": [0, 2],
      "explanation": "Skill 2.1.2 lists budget, timeline, capabilities, vendor proposals and regulatory compliance as the decision factors. Export-controlled data makes jurisdiction and access control a non-negotiable regulatory constraint that can eliminate options outright. The capability-versus-timeline gap determines whether building is even feasible without ML staff, pointing toward buying or partnering. Customer logos and leaderboard rank are marketing signals, not evidence of fit for controlled data or this timeline. Trial length and interface styling are convenience details that should never outweigh compliance and delivery feasibility in a regulated, time-boxed decision."
    },
    {
      "id": "e4-10",
      "domain": 1,
      "skill": "1.3.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A broadcaster's newsroom assistant includes the full 40-page editorial style guide and the complete transcript of a six-hour live event in every prompt. Costs have risen sharply and responses are slow. What is the MOST cost-effective change?",
      "options": [
        "Move the workload to the Priority service tier so responses arrive faster",
        "Send only the transcript segments relevant to each request and retrieve applicable style rules on demand, so fewer tokens are processed per call",
        "Purchase Provisioned Throughput so that the long prompts are processed at a fixed hourly rate",
        "Fine-tune a model on the style guide and keep sending the full transcript"
      ],
      "answer": [1],
      "explanation": "Skill 1.3.2 covers how tokens and context windows affect generative AI cost and performance. Every token in a prompt is processed and billed, and very long contexts also slow responses and can push the model to lose detail. Sending only relevant segments and retrieving rules when needed attacks the root cause. The Priority tier carries a premium over Standard pricing and does nothing about token volume. Provisioned Throughput changes how capacity is billed, not how many tokens are consumed, and suits steady high volume rather than oversized prompts. Fine-tuning for style might remove the guide but leaves the six-hour transcript in every call."
    },
    {
      "id": "e4-11",
      "domain": 3,
      "skill": "3.1.4",
      "type": "multi",
      "difficulty": "hard",
      "question": "A veterinary chain is designing a generative AI triage assistant that answers pet owners' calls after hours. The chain wants to reduce on-call veterinarian workload while ensuring animals in danger get help. Which THREE design elements are MOST appropriate for human oversight? (Select THREE.)",
      "options": [
        "Explicit escalation criteria, such as symptoms indicating poisoning, breathing difficulty or trauma, that immediately route the caller to the on-call veterinarian",
        "Automatic flagging of answers that are low-confidence or not grounded in the chain's approved clinical guidance for human follow-up",
        "Allowing the assistant to recommend medication doses when its confidence score is above 90 percent",
        "Removing the on-call veterinarian rota once the assistant reaches a 95 percent satisfaction rating",
        "Scheduled human review of a sample of transcripts to detect unsafe advice and refine escalation rules",
        "Reviewing transcripts only after a pet owner files a complaint"
      ],
      "answer": [0, 1, 4],
      "explanation": "Skill 3.1.4 covers when AI requires human oversight and which safeguards fit. Escalation criteria define the circumstances that must bypass the assistant; grounding and confidence flags act as hallucination detection; and sampled transcript review provides ongoing assurance and improvement. Letting the assistant dose medication on a confidence score confuses model confidence with clinical safety and removes the human from a high-consequence decision. Removing the on-call rota eliminates the escalation path the other safeguards depend on. Complaint-driven review is reactive and only catches harm after it has occurred, which is not oversight in a safety-relevant setting."
    },
    {
      "id": "e4-12",
      "domain": 4,
      "skill": "4.3.3",
      "type": "multi",
      "difficulty": "easy",
      "question": "A public transport operator will introduce AI-assisted timetable planning over the next year. The planners' union has asked for details, but management wants to say nothing until every decision is final. Which TWO actions are MOST likely to reduce workforce anxiety and resistance? (Select TWO.)",
      "options": [
        "Share what is known now, including the implementation timeline, what has not yet been decided and when those decisions will be made",
        "Wait until the rollout is complete and then announce the changes in a single communication",
        "Promise that no planning role will ever change as a result of the tool",
        "Explain how planner roles are expected to shift toward reviewing and adjusting AI-generated timetables, and what support and training will be provided",
        "Communicate only with managers and let information reach planners informally"
      ],
      "answer": [0, 3],
      "explanation": "Skill 4.3.3 calls for transparent communication that addresses timelines, outcome expectations and effects on roles. Being open about what is known and unknown, with a date for pending decisions, replaces rumour with a credible process, and describing the expected shift in planner responsibilities with concrete support addresses the fear directly. Silence until completion maximises the rumour period and signals distrust. Promising that nothing will change is not credible and destroys trust when roles inevitably evolve. Relying on managers to let information trickle down informally guarantees inconsistent messages and feeds the union's concern that staff are being kept in the dark."
    },
    {
      "id": "e4-13",
      "domain": 2,
      "skill": "2.1.4",
      "type": "single",
      "difficulty": "hard",
      "question": "Farmers complain to an agritech distributor that seed deliveries arrive late. Management proposes an AI model to predict late deliveries. A process review shows that orders are written on paper by field agents and entered into the system up to three days later, and that the warehouse already ships within 24 hours of receiving an order. What should the AI strategist recommend?",
      "options": [
        "Build the prediction model so farmers can at least be warned about late deliveries",
        "Fix the order-capture process first, for example with same-day digital order entry, and reassess whether any prediction problem remains",
        "Buy a third-party logistics AI platform to optimise warehouse operations",
        "Train the model on the paper order dates once they have been digitised"
      ],
      "answer": [1],
      "explanation": "Skill 2.1.4 asks the strategist to recognise when AI is not the appropriate solution. The root cause is a three-day manual data-entry lag, a process problem that no predictive model can remove; predicting lateness would merely forecast a delay the company is itself creating. Fixing order capture removes the cause and may eliminate the complaint entirely. A logistics optimisation platform targets the warehouse, which is already performing well. Digitising historical paper dates to train a model still treats the symptom and would embed the broken process into the training data rather than fix it."
    },
    {
      "id": "e4-14",
      "domain": 1,
      "skill": "1.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A stadium operator is choosing between two designs for an AI agent that handles ticketing changes, catering orders and security alerts: a single agent with access to 30 tools, or a supervisor agent that orchestrates three specialist agents, one per function. What is the MAIN strategic benefit of the supervisor-and-specialist orchestration pattern?",
      "options": [
        "It eliminates the need for human oversight because each specialist is an expert",
        "It guarantees that the agents will never produce incorrect outputs",
        "Each specialist has a bounded scope and tool set, making accountability, testing, permissions and updates easier to govern independently",
        "It is always cheaper to run than a single agent"
      ],
      "answer": [2],
      "explanation": "Skill 1.2.2 covers core agent capabilities, including orchestration strategies and agent-to-agent communication. A supervisor delegating to specialists with narrow scopes limits what each agent can do, which simplifies permissions, testing, ownership and change management, and contains the blast radius of an error. Orchestration does not remove the need for oversight; security alerts in particular still require escalation paths. No architecture guarantees correct outputs; hallucination and tool misuse remain risks. Running several agents often costs more, not less, so cost is not the benefit; governability and modularity are."
    },
    {
      "id": "e4-15",
      "domain": 3,
      "skill": "3.3.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "A cosmetics brand wants to use generative AI to produce advertising images, including synthetic human faces and artwork, for global campaigns. Legal has raised intellectual property (IP) and harmful-content concerns. Which TWO measures are MOST appropriate? (Select TWO.)",
      "options": [
        "Prohibit prompts that reference named living artists, celebrities or competitor brands, and enforce the rule with guardrail policies and prompt review",
        "Prefer providers that offer IP indemnification for generated outputs and route all campaign assets through legal review before publication",
        "Use a free consumer image tool because outputs from such tools have no copyright owner and therefore carry no IP risk",
        "Disclose that images are AI-generated and treat the disclosure as sufficient protection against IP claims",
        "Generate images in the recognisable style of a popular illustrator because artistic style is never protected"
      ],
      "answer": [0, 1],
      "explanation": "Skill 3.3.3 covers harmful-content and IP risk management. Preventing prompts that target identifiable people, artists or brands, backed by guardrails and review, reduces likeness and trade-mark exposure at the source. Choosing providers with output indemnification and keeping human legal review before publication manages residual IP risk and brand-safety concerns together. Consumer tools often have permissive training and data-use terms that increase, not remove, exposure, and the absence of a copyright owner does not shield the brand from third-party claims. Disclosure addresses transparency, not IP. Imitating an identifiable illustrator invites passing-off and reputational claims regardless of how style law is argued."
    },
    {
      "id": "e4-16",
      "domain": 4,
      "skill": "4.4.5",
      "type": "multi",
      "difficulty": "hard",
      "question": "An agritech company's crop-disease detection app succeeded in a pilot with 200 farmers, and leadership wants it available to 50,000 farmers next season. Which TWO gates should be mandatory before the app is treated as production-grade? (Select TWO.)",
      "options": [
        "A named operational owner, with monitoring, incident response and support commitments defined for the service",
        "Governance sign-off covering risk classification, data privacy, model documentation and a rollback plan",
        "Achieving 100 percent detection accuracy in the pilot regions",
        "Rewriting the pilot code in-house so that no vendor components remain",
        "Switching to the cheapest available model before launch to protect margins",
        "A launch event with the agricultural press to drive sign-ups"
      ],
      "answer": [0, 1],
      "explanation": "Skill 4.4.5 addresses the transition from experimental to production-grade, which is defined by governance and operational readiness rather than by headcount or marketing. Operational ownership with monitoring and support ensures someone is accountable when 50,000 users experience problems; governance sign-off with documentation and rollback ensures risk, privacy and recovery have been considered. Perfect accuracy is unattainable and is not a production criterion; agreed thresholds are. Eliminating vendor components is an architecture preference, not a readiness gate. Choosing the cheapest model without evaluation can degrade performance, and a press launch is a go-to-market activity, not a precondition."
    },
    {
      "id": "e4-17",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A broadcaster runs three generative AI workloads on Amazon Bedrock: live subtitle correction during prime time that must respond with the lowest possible latency, nightly tagging of its 200,000-hour archive that only needs to finish within a few days, and an internal research assistant whose users accept slower responses. Which assignment is MOST cost-effective while meeting each requirement?",
      "options": [
        "Priority tier for all three workloads to ensure consistent quality",
        "Batch inference for all three workloads to maximise the discount",
        "Priority tier for live subtitles, batch inference for archive tagging, and the Flex tier for the research assistant",
        "Flex tier for live subtitles, Priority tier for archive tagging, and batch inference for the research assistant"
      ],
      "answer": [2],
      "explanation": "Skill 2.2.5 covers matching pricing options to workload patterns. Amazon Bedrock's Priority tier carries a premium over Standard in exchange for prioritised processing, which only the live subtitle workload justifies. Batch inference is offered at a substantial discount for jobs that can be submitted in bulk and wait for results, matching the multi-day archive tagging. The Flex tier offers a discount for workloads tolerant of higher latency, which fits the research assistant. Paying the premium for everything wastes money; batching an interactive workload is impossible; and giving live subtitles the slowest tier while paying a premium for a job that can wait inverts the requirements."
    },
    {
      "id": "e4-18",
      "domain": 1,
      "skill": "1.1.3",
      "type": "single",
      "difficulty": "easy",
      "question": "A mining company has two AI goals: an assistant that answers questions from 20 years of geological survey reports stored as PDF files, and a model that predicts conveyor-belt failures from hourly sensor readings stored in database tables. Which statement about the data involved is correct?",
      "options": [
        "Both sources are structured data, because both are stored electronically",
        "The reports are unstructured data well suited to generative AI retrieval, while the sensor tables are structured data well suited to traditional machine learning prediction",
        "The reports are structured data because they follow a template, while sensor readings are unstructured because they arrive continuously",
        "Both sources are unstructured data, so only generative AI can use them"
      ],
      "answer": [1],
      "explanation": "Skill 1.1.3 tests the structured-versus-unstructured distinction and why it matters for solution choice. Free-text PDF reports lack a fixed schema, so they are unstructured and are the natural input for retrieval-augmented generative AI. Hourly sensor readings in tables have defined columns and types, so they are structured and suit traditional predictive modelling. Electronic storage alone does not make data structured, a document template does not create a queryable schema, and continuous arrival does not make numeric readings unstructured. Treating both as unstructured would misdirect the failure-prediction work toward the wrong class of tool."
    },
    {
      "id": "e4-19",
      "domain": 3,
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "hard",
      "question": "A wealth management firm classified every generative AI use case as high risk and routed all of them through the same six-month review. A backlog of 30 requests has formed, including an internal meeting summarizer, a marketing copy drafter and an automated portfolio-rebalancing agent that moves client money. Business units have started using unapproved tools. What should the AI strategist recommend?",
      "options": [
        "Remove the review process so that teams can innovate freely",
        "Adopt a tiered classification based on factors such as autonomy, reversibility, affected persons and regulatory exposure, with a lightweight path for low-risk cases and deep review reserved for cases like the rebalancing agent",
        "Classify use cases by vendor, approving all cases from established vendors automatically",
        "Keep the uniform process but hire more reviewers to clear the backlog"
      ],
      "answer": [1],
      "explanation": "Skill 3.2.4 is about applying risk classification to prioritise governance effort. Uniform treatment of a meeting summarizer and a money-moving agent misallocates scarce review capacity and, as the shadow-AI symptom shows, pushes teams around governance altogether. Proportionate tiers based on impact factors concentrate scrutiny where harm is possible. Removing review eliminates oversight of genuinely high-risk systems. Vendor reputation says nothing about the use case's consequences; the same model can draft marketing copy or move money. Adding reviewers to a mis-designed process increases cost while preserving the underlying mismatch between risk and effort."
    },
    {
      "id": "e4-20",
      "domain": 4,
      "skill": "4.2.2",
      "type": "multi",
      "difficulty": "medium",
      "question": "A staffing group owns three recruitment brands with separate candidate databases collected under different consent terms. The group wants a shared AI matching capability, but brand leaders fear losing control of their data. Which TWO elements of a data strategy MOST directly address this situation? (Select TWO.)",
      "options": [
        "Defined data ownership roles for each brand's data, with a data-sharing agreement that specifies permitted uses and respects each brand's consent terms",
        "Copying all three databases into one central repository immediately so that the AI team can start building",
        "Governed access through shared definitions and controlled interfaces rather than a forced physical merge, so brands retain stewardship while enabling cross-brand use",
        "Allowing each brand to keep its silo and building three separate matching models",
        "Purchasing an external candidate database to avoid the internal negotiation"
      ],
      "answer": [0, 2],
      "explanation": "Skill 4.2.2 covers data strategy, ownership and sharing frameworks as the foundation for AI. Clear ownership plus a sharing agreement resolves the control concern and keeps consent obligations intact, while governed access with common definitions lets the group use data across brands without stripping stewardship away. An immediate central copy ignores consent differences and triggers exactly the loss of control the brands fear. Three separate models perpetuate the silos and forfeit the cross-brand value. Buying external data sidesteps the strategic asset the group already has and does nothing to fix the internal foundation."
    },
    {
      "id": "e4-21",
      "domain": 2,
      "skill": "2.3.4",
      "type": "single",
      "difficulty": "hard",
      "question": "A regional veterinary chain operates in a sector where AI adoption is low. A well-funded national consolidator has announced an AI-first operating model and a large AI budget. The chain's CFO proposes matching the consolidator's announced AI spend dollar for dollar. What should the AI strategist advise?",
      "options": [
        "Match the spend, because under-investing against an AI-first competitor is the greater risk",
        "Invest minimally in back-office automation and wait to see whether the consolidator succeeds",
        "Size investment to the chain's own maturity and strategic position: fund data and governance foundations plus a small number of high-value use cases built on proprietary clinical records, with stage gates to increase spend as results appear",
        "Redirect the entire budget to marketing to defend market share"
      ],
      "answer": [2],
      "explanation": "Skill 2.3.4 requires setting investment levels from industry maturity, competitive dynamics and one's own position rather than copying rivals. Matching a larger competitor's budget ignores the chain's absorptive capacity and would fund initiatives it cannot yet execute. Waiting cedes the window while the competitor builds a data and capability lead in a low-maturity sector where early movers can establish advantage. A staged plan anchored on the chain's distinctive asset, its clinical records, and expanded through gates balances urgency with discipline. Shifting everything to marketing addresses symptoms of competition without building any durable capability."
    },
    {
      "id": "e4-22",
      "domain": 1,
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "An HR technology company serves 500 employer clients, each with its own policy handbook that changes several times a year. It plans to fine-tune a separate foundation model for each client so the assistant knows each client's policies. Which concern is MOST important for the AI strategist to raise?",
      "options": [
        "Fine-tuning is primarily suited to teaching style and format, not to reliably injecting frequently changing facts, so Retrieval Augmented Generation (RAG) over each client's documents with per-client access controls would be more accurate and far cheaper to maintain",
        "Fine-tuning 500 models is acceptable as long as each client pays for its own model",
        "The company should fine-tune one model on all 500 handbooks to save money",
        "Prompt engineering alone will solve the problem if the prompts are long enough"
      ],
      "answer": [0],
      "explanation": "Skill 1.3.3 asks when RAG versus fine-tuning improves responses. Policy content is factual, client-specific and volatile, which is precisely the profile RAG handles: documents are updated and immediately reflected, answers can cite sources, and tenant isolation is enforced at retrieval. Fine-tuning bakes knowledge into weights, lags every policy change and multiplies cost by 500. Making clients pay does not fix staleness or accuracy. A single model trained on all handbooks would blur clients' policies together, a confidentiality and accuracy failure. Stuffing entire handbooks into prompts hits context limits and cost, which is why retrieval exists."
    },
    {
      "id": "e4-23",
      "domain": 3,
      "skill": "3.3.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A staffing agency's candidate-ranking model passed a fairness audit at launch. Recruiters generally accept only the top five ranked candidates, and the model is retrained quarterly on which candidates recruiters advanced. After a year, candidates from certain universities almost never appear in the top five. At which stage has bias MOST likely entered, and what does it imply?",
      "options": [
        "Only in the original training data, so the launch audit must have been faulty",
        "In the post-deployment feedback loop, where recruiter selections shaped by earlier rankings become retraining data, which is why ongoing monitoring for bias drift is required",
        "In the algorithm's code, which should be rewritten",
        "Nowhere, because a model that passed an audit cannot become biased"
      ],
      "answer": [1],
      "explanation": "Skill 3.3.2 stresses that bias can enter at multiple lifecycle stages and can drift after deployment. Here the model's own rankings constrain what recruiters see, their choices are fed back as labels, and each retraining amplifies the pattern, a classic feedback loop that a one-time launch audit cannot detect. Blaming only the original data ignores a year of retraining on new, skewed labels. Rewriting code misdiagnoses a data and process problem as a programming defect. The claim that an audited model cannot become biased is exactly the assumption that monitoring for bias drift is designed to challenge."
    },
    {
      "id": "e4-24",
      "domain": 4,
      "skill": "4.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A construction company's CIO states that the firm has reached enterprise-scale AI maturity because it is running 40 AI pilots across its divisions. Which indicator would MOST credibly distinguish enterprise-scale maturity from the experimentation stage?",
      "options": [
        "The total number of pilots running at the same time",
        "AI embedded in core business processes with production operations, governance, measured business value and reuse of shared platforms and patterns",
        "The size of the budget allocated to AI experiments",
        "The number of foundation models the company has evaluated"
      ],
      "answer": [1],
      "explanation": "Skill 4.1.2 applies maturity models to locate an enterprise on its AI journey. Maturity is defined by how AI is operated and valued, not by activity volume: enterprise scale means production systems inside core processes, governance and operations in place, value tracked against baselines, and reuse across the organisation. Many simultaneous pilots without production conversion is a hallmark of the experimentation stage, sometimes called pilot purgatory. Budget size measures input rather than capability, and the count of models evaluated indicates exploration, not deployment. The CIO's claim therefore mistakes breadth of experimentation for depth of adoption."
    },
    {
      "id": "e4-25",
      "domain": 2,
      "skill": "2.2.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A football club is evaluating a generative AI fan-engagement assistant. Annual platform fees are 180,000 dollars, implementation is a one-time 120,000 dollars, change management is a one-time 50,000 dollars, and ongoing monitoring staff cost 90,000 dollars per year. Expected benefits are 300,000 dollars per year in incremental merchandise revenue and 150,000 dollars per year in avoided support costs. What should the AI strategist conclude about return on investment (ROI)?",
      "options": [
        "First-year ROI is about 67 percent, because one-time costs should be excluded from ROI",
        "First-year ROI is about 2 percent and second-year ROI is about 67 percent, so the business case should be presented over multiple years rather than judged on year one alone",
        "ROI is negative in every year, so the initiative should be rejected",
        "ROI is about 150 percent, because benefits of 450,000 dollars exceed platform fees of 180,000 dollars"
      ],
      "answer": [1],
      "explanation": "Skill 2.2.3 requires a comprehensive ROI view that includes all costs. Year one costs are 180,000 plus 120,000 plus 50,000 plus 90,000, or 440,000 dollars, against 450,000 dollars of benefit, giving roughly 2 percent. From year two, one-time costs fall away, leaving 270,000 dollars against 450,000 dollars, about 67 percent. Excluding one-time costs from year one overstates early returns and is the error the CFO will catch. The initiative is not negative in any year. Comparing benefits only with platform fees omits implementation, change and monitoring costs, the classic incomplete total-cost mistake."
    },
    {
      "id": "e4-26",
      "domain": 1,
      "skill": "1.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "An aerospace supplier's visual defect-detection model has plateaued below its target despite the team doubling the number of training images. A review finds that the eight quality inspectors who labelled the images frequently categorised the same type of surface defect differently. What should the AI strategist conclude?",
      "options": [
        "More compute is needed, because the model is too small for the volume of images",
        "The limiting factor is label consistency, a data quality problem; standardising labelling criteria and re-labelling ambiguous cases will do more than adding images",
        "The model should be deployed anyway, because accuracy will improve with use in production",
        "The problem is that the images are unstructured data and should be converted to tables"
      ],
      "answer": [1],
      "explanation": "Skill 1.1.4 explains why data quality determines AI outcomes. A model learns the patterns in its labels; when inspectors disagree about what a defect is called, the model is taught contradictory targets, and adding more inconsistently labelled images simply adds more noise. Fixing the labelling standard addresses the root cause. More compute cannot resolve contradictions in the ground truth. Models do not spontaneously improve in production unless retrained on better data, and deploying a known-underperforming inspector in aerospace carries safety and liability risk. Images are inherently unstructured and well suited to vision models; converting them to tables is not meaningful."
    },
    {
      "id": "e4-27",
      "domain": 3,
      "skill": "3.1.3",
      "type": "single",
      "difficulty": "hard",
      "question": "An HR technology company has a fixed nine-month deadline for a new AI feature that screens job applications. To protect the date, the product manager proposes deferring fairness testing and privacy review to a post-launch hardening sprint. What should the AI strategist recommend?",
      "options": [
        "Accept the deferral, because responsible AI work is most efficient once the model is finished",
        "Require fairness and privacy requirements to be defined now as design criteria and release gates, because retrofitting them later costs more and leaves a regulated high-impact feature exposed at launch",
        "Cancel the feature, because any schedule pressure is incompatible with responsible AI",
        "Deliver the feature to a small group of clients without the reviews and let their feedback replace the fairness testing"
      ],
      "answer": [1],
      "explanation": "Skill 3.1.3 is about governance by design: embedding responsible AI practices at planning and design time rather than bolting them on. Employment screening is a regulated, high-impact use, so fairness and privacy are requirements of the product, not optional polish; defining them early shapes data choices, features and evaluation, whereas late discovery forces expensive rework or a risky launch. Deferral treats compliance as a cleanup task. Cancelling overreacts; schedule pressure is normal and can be managed through scoping. Shipping to a few clients without testing exposes real applicants to untested decisions and does not substitute for structured evaluation."
    },
    {
      "id": "e4-28",
      "domain": 4,
      "skill": "4.3.6",
      "type": "single",
      "difficulty": "medium",
      "question": "A broadcaster is introducing generative AI that drafts subtitles and captions for recorded programmes. It employs 60 caption editors. Leadership wants to decide how the editors' roles should change. Which approach BEST balances human strengths with AI capabilities?",
      "options": [
        "Automate all captioning and redeploy editors to unrelated administrative roles",
        "Keep every workflow unchanged and use the AI output only as an optional reference",
        "Route routine content to AI drafting with editor review, assign live broadcasts, strong accents, humour and culturally sensitive material to editors, and give editors authority to override and escalate quality issues",
        "Reduce the editing team immediately to the number needed to spot-check 5 percent of output"
      ],
      "answer": [2],
      "explanation": "Skill 4.3.6 asks how to move roles from manual production to oversight and collaboration while matching human strengths such as judgement, cultural awareness and creativity to the work that needs them. Routine drafting is where AI excels; nuance, humour, live conditions and sensitivity are where human editors add most value, and oversight authority keeps quality accountable. Full automation discards expertise and risks accuracy and accessibility failures. Treating AI as an optional reference captures almost no value. Cutting the team to a tiny spot-check function before the new workflow has proven itself removes the oversight capacity the transition depends on."
    },
    {
      "id": "e4-29",
      "domain": 2,
      "skill": "2.1.5",
      "type": "multi",
      "difficulty": "hard",
      "question": "A public transport operator must move its passenger-information chatbot from a third-party AI platform to Amazon Bedrock within four months. The current prompts were tuned to the old vendor's model, two years of conversation history sit in the vendor's proprietary format, and the chatbot must stay available during the summer festival season. Which TWO actions should the AI strategist prioritise FIRST? (Select TWO.)",
      "options": [
        "Build an evaluation set from real passenger queries and run the old and new solutions in parallel to compare answer quality and cost before cutover",
        "Secure export of conversation history and knowledge content in portable formats while the vendor contract is still active",
        "Schedule the cutover for the festival weekend so the new system is tested under maximum load",
        "Copy the existing prompts verbatim, since prompts behave the same on any foundation model",
        "Cancel the vendor contract immediately to avoid paying for two platforms",
        "Begin staff retraining after the migration is complete"
      ],
      "answer": [0, 1],
      "explanation": "Skill 2.1.5 covers transitions between AI platforms with attention to business continuity, cost, data readiness and performance impact. Parallel evaluation on real queries protects performance and quantifies cost before passengers are exposed, and extracting data in portable formats while access still exists protects the asset that makes the new system useful. Cutting over at peak demand maximises the impact of any failure. Prompts are model-specific and generally need re-tuning. Cancelling the vendor first removes the fallback and the data-export window. Deferring staff training until after migration guarantees operational confusion during the most fragile period."
    },
    {
      "id": "e4-30",
      "domain": 1,
      "skill": "1.2.4",
      "type": "single",
      "difficulty": "medium",
      "question": "An agritech company published a list of blocked generative AI tools after agronomists were found uploading customer field photos to consumer apps. Six months later, staff are using several new apps that were not on the list, and nobody knows whether those apps are acceptable. What should the AI strategist recommend?",
      "options": [
        "Extend the blocked list each time a new tool is discovered",
        "Introduce a transparent three-state classification of approved, under evaluation and blocked tools, with a default status for unlisted tools, an intake process for requests and an approved alternative for the common need",
        "Block all generative AI tools at the network level until further notice",
        "Rely on an annual policy reminder to employees"
      ],
      "answer": [1],
      "explanation": "Skill 1.2.4 covers transparent classification of AI tools to mitigate shadow AI. A blocklist alone is reactive and silent about everything not yet listed, which is why unlisted tools proliferate. A published approved, under-evaluation and blocked scheme with a default treatment for unknown tools, a path to request evaluation, and a sanctioned alternative gives employees a legitimate route to the capability they need. Endlessly extending the blocklist repeats the failure. Blocking everything drives usage onto personal devices and forfeits productivity. An annual reminder changes nothing about the absent decision process."
    },
    {
      "id": "e4-31",
      "domain": 3,
      "skill": "3.2.1",
      "type": "multi",
      "difficulty": "hard",
      "question": "A mining company's AI governance board is chaired by the IT director and attended mainly by IT staff. Site operations teams ignore its decisions, and the safety regulator has asked who is accountable for an autonomous haulage decision model. Which TWO changes to the governance structure are MOST important? (Select TWO.)",
      "options": [
        "Assign a single accountable business executive with authority over AI decisions, so that accountability is clear to the regulator and to operations",
        "Add site operations, health and safety, legal and data representatives with defined decision rights and an escalation path",
        "Restrict the board to IT members only so that decisions can be made faster",
        "Make board membership voluntary and rotate it among anyone interested",
        "Ask the haulage model vendor to chair the board, since it understands the model best",
        "Expand the board to 30 members so that every department feels included"
      ],
      "answer": [0, 1],
      "explanation": "Skill 3.2.1 calls for governance structures with cross-functional representation and clear accountability. The regulator's question exposes the absence of a named accountable executive, and the operations teams' disregard exposes the absence of the functions whose work the decisions affect. Naming an accountable business owner and adding operations, safety, legal and data with real decision rights fixes both. An IT-only board is the current failure in sharper form. Voluntary, rotating membership destroys continuity and accountability. A vendor chairing the board creates a conflict of interest and outsources accountability. Thirty members would make the body deliberative theatre rather than a decision-making forum."
    },
    {
      "id": "e4-32",
      "domain": 4,
      "skill": "4.4.6",
      "type": "single",
      "difficulty": "hard",
      "question": "A wealth management firm's AI adviser assistant succeeded in one country and leadership wants it live in all 12 countries where the firm operates within six months. Countries differ in data-residency rules, disclosure requirements and the availability of the chosen foundation model. Which approach BEST protects business continuity and performance during scaling?",
      "options": [
        "Deploy the same configuration simultaneously to all 12 countries to capture value fastest",
        "Roll out in waves grouped by regulatory similarity, with per-country readiness criteria covering data residency, disclosure rules, model availability and a manual fallback process, adjusting the plan after each wave",
        "Skip the most heavily regulated countries permanently to simplify the programme",
        "Let each country team re-build the assistant independently to respect local differences"
      ],
      "answer": [1],
      "explanation": "Skill 4.4.6 asks the strategist to weigh multiple factors during enterprise scaling so that continuity and performance are preserved. Waves grouped by regulatory similarity, gated by explicit readiness criteria and backed by a fallback, limit the blast radius of problems and allow learning between waves. A simultaneous identical deployment ignores the stated differences in residency, disclosure and model availability, so failures would be discovered in production across 12 markets at once. Permanently excluding regulated markets abandons value and signals that compliance and AI are incompatible. Twelve independent rebuilds destroy reuse and multiply governance and cost."
    },
    {
      "id": "e4-33",
      "domain": 2,
      "skill": "2.3.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "Three of a cosmetics company's competitors have launched augmented-reality virtual try-on features in the past year. The company holds skin-profile and purchase data on 10 million loyalty members, which no competitor has. Executives ask whether to copy the try-on feature. Which TWO conclusions should the AI strategist draw from the competitive landscape? (Select TWO.)",
      "options": [
        "Virtual try-on has become table stakes; acquire it quickly through a buy or partner route rather than building",
        "The proprietary loyalty data is the basis for a differentiated advantage, so build investment should focus on data-driven personalisation that competitors cannot replicate",
        "Because competitors moved first, the company has permanently lost the ability to compete on AI",
        "The company should ignore try-on because features that competitors already offer cannot create value",
        "Both capabilities should be built in-house from scratch to maximise control"
      ],
      "answer": [0, 1],
      "explanation": "Skill 2.3.1 is about reading the competitive landscape to decide where AI creates advantage. When every rival offers a feature, it becomes a parity requirement; the fastest route to parity is usually buying or partnering. Durable advantage comes from assets rivals lack, here a large proprietary dataset, so scarce build capacity belongs there. Declaring the race lost ignores the data asset. Ignoring try-on would leave a visible gap customers now expect. Building everything from scratch spends differentiating resources on a commodity feature and delays both initiatives."
    },
    {
      "id": "e4-34",
      "domain": 1,
      "skill": "1.1.2",
      "type": "single",
      "difficulty": "easy",
      "question": "A construction company is reviewing four proposed initiatives. Which one is BEST classified as traditional machine learning rather than generative AI or rule-based automation?",
      "options": [
        "An assistant that drafts requests for information to architects from brief notes",
        "A model that predicts the probability of cost overrun on a project from historical project attributes",
        "A workflow that automatically routes invoices above a fixed amount to a director for approval",
        "A chatbot that answers subcontractors' questions about site safety rules"
      ],
      "answer": [1],
      "explanation": "Skill 1.1.2 tests the distinction between AI, ML and GenAI. Predicting a cost-overrun probability from structured historical attributes is classic supervised machine learning: it learns patterns in past data to make a numeric or categorical prediction without creating new content. Drafting requests for information and answering free-form safety questions both generate new text, which places them in generative AI. Routing invoices above a threshold is a deterministic rule that involves no learning at all. Recognising which category a proposal belongs to shapes the data, skills, cost model and governance it will need."
    },
    {
      "id": "e4-35",
      "domain": 3,
      "skill": "3.3.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A public transport operator has moved a predictive maintenance model for its train fleet into production. The model recommends which units to pull from service for inspection. Which TWO risk controls are MOST important now that the model is live? (Select TWO.)",
      "options": [
        "Defined performance thresholds with alerting, and periodic comparison of predictions against actual failures found during inspections",
        "A documented fallback to the previous scheduled-maintenance regime if model performance drops below the threshold",
        "Disabling all logging to reduce storage costs now that the model has been validated",
        "Treating the pre-launch validation as sufficient and reviewing the model again only when the fleet is replaced",
        "Allowing the model to automatically cancel inspections without any engineer confirmation"
      ],
      "answer": [0, 1],
      "explanation": "Skill 3.3.1 addresses the need for risk controls and monitoring once AI systems are in production. Thresholds, alerting and comparison against ground truth detect degradation, and a rehearsed fallback keeps maintenance safe while the model is investigated. Disabling logging removes the evidence needed for monitoring, audit and incident analysis. A one-time pre-launch validation ignores drift in fleet condition, usage patterns and sensor behaviour over years of service. Allowing automatic cancellation of inspections without confirmation removes human oversight from a safety-critical decision, which is the opposite of a control."
    },
    {
      "id": "e4-36",
      "domain": 4,
      "skill": "4.2.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A veterinary chain has acquired 120 clinics that run seven different practice-management systems with species, breed and diagnosis coded inconsistently. A vendor offers to build a treatment-outcome prediction model quickly using only the 40 clinics on the most common system. What should the AI strategist do FIRST?",
      "options": [
        "Accept the offer, because 40 clinics is a large enough sample",
        "Assess data quality, accessibility and representativeness across all seven systems and define a common data model before deciding the scope of the first model",
        "Replace all seven practice-management systems with one platform before any AI work begins",
        "Start with a generative AI chatbot instead, since it does not need structured data"
      ],
      "answer": [1],
      "explanation": "Skill 4.2.1 is about evaluating data readiness, including quality, accessibility and the effect of silos. A model trained on one system's clinics may not generalise to the other 80 if patient mix, coding or practice patterns differ, and inconsistent coding will make outputs hard to interpret across the chain. Assessing readiness and agreeing on common definitions first lets the chain decide whether the subset is representative or merely convenient. Accepting the shortcut unexamined risks a model that fails on two-thirds of the network. A full system replacement delays everything for years. Switching to a chatbot dodges the question the business actually asked."
    },
    {
      "id": "e4-37",
      "domain": 2,
      "skill": "2.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A staffing agency's top strategic objective this year is to reduce time-to-fill for client vacancies. Which AI capability maps MOST directly to that outcome?",
      "options": [
        "Natural language processing that matches and ranks candidate profiles against job requirements",
        "Document extraction that speeds up supplier invoice processing",
        "A forecasting model for office energy consumption",
        "Image generation for recruitment advertising banners"
      ],
      "answer": [0],
      "explanation": "Skill 2.1.1 asks the strategist to map AI capabilities to specific business outcomes across functions. Time-to-fill is driven by how quickly suitable candidates are identified and shortlisted, so candidate-to-job matching using natural language processing attacks the objective directly. Invoice extraction improves finance efficiency, energy forecasting improves facilities cost, and generated banners may help marketing reach, but none shortens the core recruiting cycle. The exam rewards tracing the chain from capability to the stated business metric rather than choosing a capability that is merely useful somewhere in the organisation."
    },
    {
      "id": "e4-38",
      "domain": 1,
      "skill": "1.1.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A sports club's injury-risk model was trained on ten seasons of historical player data. This season the club introduced a new wearable sensor that measures muscle load. The head coach asks why the model cannot use the new measurement to improve its predictions immediately. Which explanation is MOST accurate?",
      "options": [
        "The model learned relationships only from the inputs present in its historical training data; a new measurement has no history for the model to learn from until enough data is collected and the model is retrained",
        "The model refuses the new data because wearable readings are unstructured",
        "The model can learn from the new sensor automatically during inference",
        "The new measurement should replace all historical data so the model can start fresh"
      ],
      "answer": [0],
      "explanation": "Skill 1.1.5 covers how models learn from historical data. A trained model encodes relationships between the features it saw during training and the outcomes; a feature that did not exist historically has no learned relationship, so it cannot contribute until a sufficient history is accumulated and a retraining cycle incorporates it. Numeric wearable readings are structured, not unstructured, so data type is not the barrier. Inference does not update a model; only training does. Discarding ten seasons of data would throw away the very history that makes injury prediction possible and leave a tiny new dataset."
    },
    {
      "id": "e4-39",
      "domain": 3,
      "skill": "3.2.3",
      "type": "single",
      "difficulty": "hard",
      "question": "An HR technology company is building a multi-tenant Retrieval Augmented Generation (RAG) assistant that answers employees' questions from their own employer's HR documents. Which access-control principle is MOST critical to establish in the design?",
      "options": [
        "A single shared knowledge base for all clients so the model has as much context as possible",
        "Strict per-tenant isolation with document-level permissions enforced at retrieval time, so an answer can never draw on another client's documents or on documents the asking employee is not entitled to see",
        "Granting the assistant administrator access to every client system to simplify integration",
        "Relying on the foundation model's own judgement to decide which documents are appropriate to share"
      ],
      "answer": [1],
      "explanation": "Skill 3.2.3 covers appropriate access controls and data security for AI systems. In a RAG design, the retrieval layer determines what the model can see, so tenant isolation and document-level permissions must be enforced there; managed knowledge-base services support permission filtering for exactly this reason. A single shared knowledge base makes cross-client leakage a matter of time. Granting broad administrator access violates least privilege and widens the blast radius of any compromise. Foundation models do not understand entitlements and cannot be trusted to enforce confidentiality; access decisions must be made by the system before content reaches the prompt."
    },
    {
      "id": "e4-40",
      "domain": 4,
      "skill": "4.1.1",
      "type": "multi",
      "difficulty": "easy",
      "question": "A mining company's AI readiness assessment reports strong cloud infrastructure, clean and accessible operational data and a committed executive team. However, site managers describe AI as a black box they will not act on, and no policies exist for approving or reviewing AI use. Which TWO readiness dimensions should receive investment FIRST? (Select TWO.)",
      "options": [
        "Technical infrastructure",
        "Cultural preparedness",
        "Data quality",
        "Governance frameworks",
        "Leadership alignment"
      ],
      "answer": [1, 3],
      "explanation": "Skill 4.1.1 covers assessing readiness across dimensions such as leadership alignment, data quality, cultural preparedness, technical infrastructure and governance. The assessment already rates infrastructure, data and leadership as strengths, so investing there yields little. Site managers' distrust is a cultural preparedness gap that will stall adoption regardless of model quality, and the absence of approval and review policies is a governance gap that leaves AI use unaccountable. Addressing both unblocks the strengths the company already has; spending on the strong dimensions first would be a classic misallocation."
    },
    {
      "id": "e4-41",
      "domain": 2,
      "skill": "2.2.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A public transport operator's objectives for a generative AI passenger assistant are to lower contact-centre cost and improve passenger satisfaction. The project team has proposed several KPIs. Which TWO KPIs measure business value rather than activity or technical output? (Select TWO.)",
      "options": [
        "Number of tokens processed per month",
        "Share of passenger contacts fully resolved by the assistant and the resulting cost per contact",
        "Number of prompt templates written by the team",
        "Passenger satisfaction score for assistant-handled interactions compared with agent-handled interactions",
        "Number of foundation model versions evaluated"
      ],
      "answer": [1, 3],
      "explanation": "Skill 2.2.1 asks for KPIs tied to tangible and intangible benefits. Containment and cost per contact translate directly into the tangible cost objective, and comparative satisfaction scores capture the intangible objective in a measurable way. Tokens processed is a consumption metric that rises with cost and says nothing about value. Prompt templates written and models evaluated are team activity counts; they may track effort but cannot show whether passengers are better served or costs are lower. The exam consistently distinguishes outcome KPIs from input and activity metrics."
    },
    {
      "id": "e4-42",
      "domain": 1,
      "skill": "1.1.6",
      "type": "single",
      "difficulty": "medium",
      "question": "A prime contractor tells an aerospace supplier that future contracts will require independent certification of the supplier's AI management practices. The supplier currently aligns its work to the NIST AI Risk Management Framework and uses ISO/IEC 23053 terminology. Which standard should the supplier pursue to meet the requirement?",
      "options": [
        "Continue with the NIST AI RMF, because it provides third-party certification",
        "ISO/IEC 23053, because it defines the framework for machine learning systems",
        "ISO/IEC 42001, because it is a certifiable management system standard for how an organisation governs AI",
        "The EU AI Act, because conformity with it is an international certification"
      ],
      "answer": [2],
      "explanation": "Skill 1.1.6 covers awareness of global frameworks and shared vocabulary. ISO/IEC 42001 specifies requirements for an AI management system and can be audited and certified by accredited bodies, which is what the customer is asking for. The NIST AI RMF is a voluntary risk framework with Govern, Map, Measure and Manage functions; it is valuable but not a certification scheme. ISO/IEC 23053 is a descriptive framework and vocabulary for AI systems using machine learning, not a management-system standard. The EU AI Act is legislation applying in the European Union, not a management certification an aerospace customer can require of a supplier."
    },
    {
      "id": "e4-43",
      "domain": 3,
      "skill": "3.1.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A public transport operator wants AI on station cameras to measure crowd density and trigger safety interventions. Privacy advocates have objected. Which TWO design choices apply responsible AI principles while still achieving the safety objective? (Select TWO.)",
      "options": [
        "Process video into anonymous crowd counts and discard identifiable footage, so no individual is identified or tracked",
        "Store all footage indefinitely so it can be used to train future models",
        "Publish clear signage and a public notice explaining what the system measures, what it does not do and how long data is kept",
        "Extend the system to identify known fare evaders since the cameras are already installed",
        "Disable the system whenever a privacy complaint is received"
      ],
      "answer": [0, 2],
      "explanation": "Skill 3.1.1 applies responsible AI dimensions such as privacy, transparency and safety to a business scenario. Anonymous aggregate counts with minimal retention deliver the safety signal without identification, which is privacy by design. Signage and a public notice satisfy transparency so passengers can make informed choices. Indefinite storage of identifiable footage violates data minimisation and creates a breach liability. Expanding to identify individuals is scope creep that converts a proportionate safety tool into surveillance and changes its regulatory profile entirely. Switching the system off on every complaint undermines the safety objective and is not a governance approach."
    },
    {
      "id": "e4-44",
      "domain": 4,
      "skill": "4.1.4",
      "type": "single",
      "difficulty": "hard",
      "question": "A broadcaster at the experimentation stage of AI maturity has a strategic objective of personalised streaming recommendations within 18 months. Viewer data is split across the linear TV, streaming and web analytics systems, and the budget is limited. Which development investment should the AI strategist prioritise FIRST?",
      "options": [
        "Hire a 20-person data science team to build proprietary models from scratch",
        "Unify viewer data across the three systems and deliver a production recommendation pilot on a managed service, building the data foundation the objective depends on",
        "Roll out generative AI productivity tools to all employees to raise maturity quickly",
        "Build an enterprise-wide agentic automation platform so every future use case is covered"
      ],
      "answer": [1],
      "explanation": "Skill 4.1.4 is about sequencing investments to the current maturity level and the strategic objective. Personalised recommendations require a unified view of each viewer, so the data foundation is the binding constraint, and a managed service lets an experimentation-stage organisation reach production without a large bench. Hiring 20 data scientists before the data exists creates expensive idle capacity. Broad productivity tools may be worthwhile but do not progress the stated objective. An enterprise agentic platform is an enterprise-scale maturity investment; adopting it from the experimentation stage skips the steps that make it usable."
    },
    {
      "id": "e4-45",
      "domain": 2,
      "skill": "2.1.3",
      "type": "single",
      "difficulty": "medium",
      "question": "An agritech company reviews three initiatives. Yield prediction shows verified value, is technically feasible and supports the growth strategy. Drone-based weed detection has unproven value and is blocked for two years by pending aviation regulation. A farmer chatbot has had low adoption for 12 months, has no business owner and no plan to change. Which set of decisions is MOST appropriate?",
      "options": [
        "Scale yield prediction, pause weed detection pending regulation, and terminate the chatbot",
        "Scale all three to demonstrate commitment to AI",
        "Terminate weed detection, pause yield prediction, and scale the chatbot with a marketing push",
        "Pause all three until an enterprise AI strategy is written"
      ],
      "answer": [0],
      "explanation": "Skill 2.1.3 requires scale, pause or terminate decisions based on value, feasibility, sustainability and alignment. Yield prediction meets every criterion and should be scaled. Weed detection has a time-bound external blocker and unproven value, which argues for a pause with a revisit date rather than killing an option that may become viable. The chatbot has failed on adoption, ownership and path to value, so continuing it consumes resources without prospect; termination is the disciplined call. Scaling everything ignores evidence, inverting the decisions rewards failure and penalises success, and freezing the portfolio for a strategy document stalls a proven initiative."
    },
    {
      "id": "e4-46",
      "domain": 1,
      "skill": "1.3.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A cosmetics company's marketing team uses a generative AI assistant to write product descriptions. Each marketer writes prompts differently, and output quality varies widely from person to person. Which change is MOST likely to produce consistent, usable descriptions?",
      "options": [
        "Ask the model to \"make it better\" whenever an output is weak",
        "Adopt shared prompt templates that specify the brand voice, the audience, required structure, length limits and two or three approved example descriptions",
        "Switch to a larger foundation model so that any prompt produces good output",
        "Allow only the most senior marketer to use the assistant"
      ],
      "answer": [1],
      "explanation": "Skill 1.3.1 covers basic prompt engineering principles: clear instructions, context, constraints on format and length, and examples of the desired output. Standardising these elements in shared templates removes the person-to-person variation the team is experiencing and makes quality repeatable. A vague request to improve gives the model no new information about what good looks like. A larger model may raise average quality but still cannot infer unstated brand voice and structure. Restricting access to one person reduces throughput and does not address why the prompts vary in the first place."
    },
    {
      "id": "e4-47",
      "domain": 3,
      "skill": "3.3.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A wealth management firm's generative AI assistant drafts weekly market commentary for relationship managers to send to clients. After months of good results, managers have stopped checking the figures. An audit finds several commentaries quoted index returns that were plausible but wrong. Which action is MOST appropriate?",
      "options": [
        "Ban the assistant and return to fully manual commentary",
        "Ground every numeric claim in a verified market data source with citations, add automated grounding checks that flag unsupported figures, and make manager sign-off of flagged items mandatory before sending",
        "Lower the model's creativity setting and continue as before",
        "Switch to a different foundation model vendor"
      ],
      "answer": [1],
      "explanation": "Skill 3.3.4 covers reliability risks such as hallucination and the controls that mitigate them. Plausible but wrong figures are classic hallucinations, and the deeper failure is that human oversight eroded as trust grew. Grounding in verified data with citations, automated contextual grounding checks and a mandatory review step for flagged content restore both accuracy and accountability. Banning the tool discards proven productivity gains. Adjusting creativity settings reduces variability but does not stop a model inventing a number when it lacks the fact. Changing vendor swaps one ungrounded model for another; the problem is the absence of grounding and review, not the brand of model."
    },
    {
      "id": "e4-48",
      "domain": 4,
      "skill": "4.3.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A cosmetics company's Chief Marketing Officer sponsors the AI programme, but supply chain and finance leaders see it as a marketing project and have not engaged. The sponsor proposes appointing AI champions by selecting the most technically skilled analysts in each department. What should the AI strategist recommend instead?",
      "options": [
        "Proceed with technically skilled analysts, since champions need to understand the technology deeply",
        "Secure visible sponsorship from the CEO and the heads of supply chain and finance, and appoint respected business leads in each function as champions with dedicated time, authority and accountability for outcomes",
        "Move the programme into IT so that no business sponsor is needed",
        "Pause the programme until every executive is equally enthusiastic"
      ],
      "answer": [1],
      "explanation": "Skill 4.3.1 is about executive sponsorship and empowering champions to sustain momentum across the enterprise. A programme sponsored by one function is perceived as that function's project, so alignment at the top and sponsorship from the disengaged functions must come first. Champions work through credibility and influence with their peers, so respected business leads with time and authority outperform technically skilled analysts who lack standing to change how a department works. Moving the programme into IT reinforces the perception that AI is a technology project. Waiting for unanimous enthusiasm is not a plan; sponsorship is built through action and early wins."
    },
    {
      "id": "e4-49",
      "domain": 2,
      "skill": "2.2.4",
      "type": "multi",
      "difficulty": "easy",
      "question": "An HR technology company launched an AI candidate-screening feature to its customers one month ago. Revenue impact and customer churn effects will not be visible for a year. Which TWO metrics are leading indicators that the initiative is on track? (Select TWO.)",
      "options": [
        "Weekly active recruiters using the feature as a share of eligible users",
        "Annual recurring revenue reported at the next fiscal year end",
        "Percentage of AI shortlist recommendations that recruiters accept or act on",
        "Customer churn rate measured over the next 12 months",
        "Total number of lines of code in the feature"
      ],
      "answer": [0, 2],
      "explanation": "Skill 2.2.4 asks for leading indicators that predict AI project success before financial outcomes materialise. Active usage shows the feature is being adopted, and the acceptance rate of recommendations shows users find the outputs trustworthy and useful; both are available now and both predict later value. Annual revenue and twelve-month churn are the lagging outcomes the company ultimately cares about but cannot steer by for another year. Lines of code is a size metric with no relationship to adoption or value and can even indicate complexity rather than progress."
    },
    {
      "id": "e4-50",
      "domain": 1,
      "skill": "1.2.3",
      "type": "single",
      "difficulty": "medium",
      "question": "An agritech company's pest-outbreak prediction model performed well for three seasons but missed most outbreaks this year after regional weather patterns changed. The team proposes retraining the model once a year, in winter. What should the AI strategist recommend?",
      "options": [
        "Accept annual retraining, because models only need updating on a fixed schedule",
        "Establish continuous monitoring of prediction accuracy and input data patterns with defined thresholds that trigger investigation and retraining when drift is detected, rather than relying on a calendar alone",
        "Stop using the model, because any model that fails once cannot be trusted",
        "Retrain the model every day regardless of performance to be safe"
      ],
      "answer": [1],
      "explanation": "Skill 1.2.3 explains why AI solutions require ongoing monitoring to detect and remediate model drift. The failure is a change in the environment the model learned from, and a fixed winter retraining would have left the model wrong for an entire growing season. Monitoring with thresholds that trigger action ties remediation to evidence rather than the calendar. Abandoning the model over one drift episode discards three seasons of demonstrated value. Daily retraining without a performance signal wastes cost, can introduce instability and still does not tell the business whether the model is right."
    },
    {
      "id": "e4-51",
      "domain": 3,
      "skill": "3.2.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A staffing agency operating in the European Union and the United States is building an AI tool that ranks job applicants. Legal notes that the EU AI Act lists employment-related AI as high-risk, but the Digital Omnibus agreement has postponed those obligations to December 2027. Meanwhile, a US city where the agency recruits already requires annual bias audits and candidate notices for automated hiring tools. How should the strategist sequence compliance?",
      "options": [
        "Defer all compliance work until the EU high-risk obligations take effect in December 2027",
        "Design the tool to high-risk requirements now, including bias auditing, human oversight, documentation and candidate transparency, because the US obligations already apply and the same controls will satisfy the EU deadline",
        "Comply only in the European Union, since the EU AI Act is the stricter framework",
        "Classify the tool as minimal risk because candidates can still apply by other means"
      ],
      "answer": [1],
      "explanation": "Skill 3.2.2 covers identifying and addressing regulatory risk for AI-enabled processes across jurisdictions. A postponed EU deadline is not a holiday from compliance when another jurisdiction already imposes bias audits and notices; the agency is exposed today. Building the controls now meets the live US requirement and positions the tool for the EU high-risk regime without rework. Waiting until 2027 leaves the agency non-compliant in the US market. Complying only in the EU ignores where the enforceable obligation currently exists. Employment ranking is explicitly listed as high-risk; the availability of other application routes does not alter that classification."
    },
    {
      "id": "e4-52",
      "domain": 4,
      "skill": "4.4.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A construction company wants its first AI initiative to produce a visible win within six months and also lay groundwork for enterprise-wide adoption. Candidates include automated extraction of subcontractor invoices using a reusable document-processing platform (low risk, measurable, three months) and autonomous crane scheduling (high value, safety-critical, 18 months). What should the AI strategist recommend?",
      "options": [
        "Start with autonomous crane scheduling because its value is highest",
        "Launch twelve pilots simultaneously so that at least some succeed",
        "Deliver invoice extraction first on the shared document-processing platform, publicise the measured result, and reuse the platform and governance for subsequent document-heavy use cases",
        "Wait until a company-wide data lake is finished before starting any use case"
      ],
      "answer": [2],
      "explanation": "Skill 4.4.2 is about scaling methodologies that begin with short-term wins and build toward enterprise deployment. The invoice use case is quick, low-risk and measurable, and because it sits on a reusable platform it creates assets and governance patterns that later use cases inherit, which is what distinguishes a strategic quick win from a throwaway one. The crane initiative is safety-critical and 18 months away, so it cannot deliver the early credibility the programme needs. Twelve simultaneous pilots dilute scarce capacity and attention. Waiting for a data lake delays value indefinitely and removes the feedback that should shape the data foundation."
    },
    {
      "id": "e4-53",
      "domain": 2,
      "skill": "2.3.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A sports and entertainment company currently earns revenue from ticket sales and sponsorship. Four AI proposals are on the table. Which one represents a transformation of the business model rather than an operational improvement?",
      "options": [
        "Computer vision at turnstiles to speed up ticket scanning",
        "A chatbot that answers fans' frequently asked questions about parking and seating",
        "An AI-personalised year-round fan membership that bundles tailored content, offers and experiences, creating a recurring subscription revenue stream and a first-party fan data asset",
        "Predictive stocking of concession stands based on expected attendance"
      ],
      "answer": [2],
      "explanation": "Skill 2.3.2 asks the strategist to identify opportunities to transform business models with AI, as distinct from improving existing operations. A personalised recurring membership changes what the company sells, how it earns revenue and the data asset it accumulates, which is a business-model shift. Faster ticket scanning, a fan FAQ chatbot and predictive concession stocking all make the current model run more efficiently or pleasantly without changing the revenue logic. Operational improvements are valuable, but the exam expects candidates to recognise when AI creates a new value proposition rather than optimising the old one."
    },
    {
      "id": "e4-54",
      "domain": 1,
      "skill": "1.2.2",
      "type": "multi",
      "difficulty": "hard",
      "question": "A public transport operator is evaluating an agentic disruption-management proposal in which AI agents reroute buses, notify passengers, rebook paratransit trips and exchange information with the city traffic authority's own agent. Which TWO statements reflect appropriate thinking about agent autonomy and capabilities? (Select TWO.)",
      "options": [
        "Autonomy should be bounded: the agents may propose and prepare reroutes, but actions that affect safety or service commitments should require human dispatcher approval under defined escalation criteria",
        "Agent-to-agent communication with the external authority requires defined protocols, authentication and auditing, because the operator remains accountable for actions taken on its behalf",
        "Because agents act autonomously, logging their decisions is unnecessary",
        "Agents built on foundation models do not hallucinate when they are given tools",
        "Giving each agent access to as many tools as possible always improves outcomes",
        "Dispatchers can be removed on the first day because the agents replace their function"
      ],
      "answer": [0, 1],
      "explanation": "Skill 1.2.2 covers the core capabilities of AI agents, including autonomy, tool use, agent-to-agent communication and orchestration, and how they differ from other AI. Bounded autonomy with human approval for high-consequence actions is how organisations capture agent value while keeping accountability. Communication with an external agent is an integration with real-world effects, so it needs protocols, identity verification and audit trails. Autonomy increases rather than removes the need for logging. Tool use does not cure hallucination and can amplify its effects. Broad tool access widens the blast radius of errors. Removing dispatchers immediately eliminates the oversight the other safeguards rely on."
    },
    {
      "id": "e4-55",
      "domain": 3,
      "skill": "3.1.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A wealth management firm compares two models for predicting which clients are likely to leave, used only to decide which clients receive a proactive courtesy call from their adviser. A complex model is 3 percentage points more accurate than a simpler, fully interpretable model. Which decision BEST reflects responsible AI trade-off judgement?",
      "options": [
        "Always choose the interpretable model, because explainability must override accuracy in financial services",
        "Use the more accurate model for this low-stakes, reversible prioritisation task with monitoring, while reserving fully explainable approaches for decisions that affect client outcomes or regulatory obligations",
        "Use the more accurate model for all decisions, including suitability determinations, since accuracy is what matters",
        "Abandon both models and call every client"
      ],
      "answer": [1],
      "explanation": "Skill 3.1.2 is about navigating trade-offs between business objectives and responsible AI principles, and the key insight is proportionality: the level of explainability required should scale with the impact and reversibility of the decision. Deciding who receives a courtesy call harms no one if wrong and is easily reversed, so the accuracy gain is worth taking with monitoring. Mandating interpretability everywhere forgoes value without protecting anyone. Extending the opaque model to suitability determinations would collide with the explainability and record-keeping obligations that attach to regulated advice. Calling every client ignores the business need to focus adviser time."
    },
    {
      "id": "e4-56",
      "domain": 4,
      "skill": "4.2.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "An agritech company plans two AI initiatives: a generative AI advisory assistant for its agronomists and a computer-vision system that identifies crop disease from images taken in fields with little or no mobile connectivity. Which TWO infrastructure conclusions should the AI strategist draw? (Select TWO.)",
      "options": [
        "The field vision use case needs on-device or edge inference with periodic synchronisation, because it cannot depend on constant connectivity to a central service",
        "The advisory assistant is well served by managed cloud generative AI services, avoiding the cost and skills burden of running foundation models in-house",
        "Both use cases require the company to build and operate its own data centre to keep data private",
        "Infrastructure decisions can wait until after the models have been developed",
        "The field vision system should stream every image to the cloud in real time for inference"
      ],
      "answer": [0, 1],
      "explanation": "Skill 4.2.3 covers assessing the foundational technology and infrastructure requirements for AI initiatives. A connectivity constraint in the field dictates that inference happen locally with later synchronisation; a text-based assistant for office and mobile staff is a natural fit for managed cloud services that avoid capital and operational burden. Building a private data centre is disproportionate and does not address field connectivity. Deferring infrastructure thinking until models exist is the sequencing mistake that leaves solutions undeployable. Streaming every image in real time is impossible where the connectivity does not exist, which was the stated constraint."
    },
    {
      "id": "e4-57",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "easy",
      "question": "A veterinary chain's CFO will approve a generative AI pilot only with a forward cost estimate for the expected usage, and then wants spending tracked per clinic once the pilot is live. Which combination of AWS tools fits these two needs?",
      "options": [
        "AWS Cost Explorer for the pre-approval estimate and AWS Pricing Calculator for tracking spend by clinic",
        "AWS Pricing Calculator to model the estimate before deployment, and AWS Cost Explorer with cost allocation tags to track actual spend by clinic after launch",
        "AWS Marketplace for both estimating and tracking cost",
        "A SageMaker AI Savings Plan for the estimate and AWS Marketplace for tracking"
      ],
      "answer": [1],
      "explanation": "Skill 2.2.5 covers basic cost planning and control. AWS Pricing Calculator is the planning tool that produces an estimate from assumed usage before anything is deployed, which is exactly what pre-approval requires. AWS Cost Explorer analyses actual billed usage after the fact and, combined with cost allocation tags, can break spend down by dimensions such as clinic. Reversing the two tools assigns each to the job it cannot do. AWS Marketplace is a procurement channel for third-party software and models, not a cost-estimation or analysis tool. A Savings Plan is a commitment-based discount for SageMaker AI usage, not an estimating instrument."
    },
    {
      "id": "e4-58",
      "domain": 1,
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A broadcaster wants a generative AI assistant that writes sports commentary scripts in its distinctive house style and also references the current week's fixtures, squad changes and results. Which model adaptation approach is MOST appropriate?",
      "options": [
        "Fine-tune a model on past scripts to capture the house style, and use Retrieval Augmented Generation (RAG) to supply current fixtures and results at request time",
        "Fine-tune a model on past scripts and on this week's results, repeating the fine-tuning every week",
        "Use RAG alone, retrieving past scripts so the model can infer the style each time",
        "Use a larger base model without any adaptation, because large models already know sports"
      ],
      "answer": [0],
      "explanation": "Skill 1.3.3 asks when fine-tuning and RAG each improve responses. House style is a stable pattern of tone, structure and phrasing, which fine-tuning learns well. Fixtures and results change constantly and must be accurate, which is what retrieval delivers without retraining. Combining the two assigns each technique to the need it fits. Weekly fine-tuning on results is slow, costly and still yields a model that may misstate facts because weights are not a reliable store of specific data. Retrieving past scripts can offer a few style examples but is an inefficient and inconsistent way to teach a pervasive voice. No base model knows this week's results."
    },
    {
      "id": "e4-59",
      "domain": 3,
      "skill": "3.2.4",
      "type": "multi",
      "difficulty": "hard",
      "question": "A mining company is defining the criteria its governance committee will use to assign a risk tier to each AI use case. Which TWO factors should MOST strongly raise a use case's risk tier? (Select TWO.)",
      "options": [
        "The potential for physical harm to workers or communities if the system's output is wrong, as with autonomous haulage decisions",
        "The degree of autonomy and irreversibility of actions taken without human review",
        "Whether the use case uses generative AI rather than traditional machine learning",
        "The number of parameters in the underlying model",
        "Whether the solution was purchased from a vendor rather than built in-house",
        "The total budget allocated to the project"
      ],
      "answer": [0, 1],
      "explanation": "Skill 3.2.4 covers applying risk classification frameworks to prioritise governance across the lifecycle. Frameworks such as the EU AI Act tiers and the NIST AI RMF focus on the consequences of a system for people: potential for physical or significant harm, and the extent to which the system acts autonomously with effects that cannot be undone. The technology category does not determine risk; a traditional model controlling haul trucks is far riskier than a generative meeting summariser. Model size is a technical property unrelated to impact. Vendor versus in-house changes who built it, not what it can do. Budget measures investment, not harm potential."
    },
    {
      "id": "e4-60",
      "domain": 4,
      "skill": "4.3.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "At an aerospace supplier, quality engineers reject an AI defect-detection assistant because the company's zero-defect culture treats any model error as unacceptable, even though trials show the assistant catches defects that human inspection misses. Which TWO leadership interventions are MOST likely to overcome this cultural barrier? (Select TWO.)",
      "options": [
        "Position the assistant as an additional check that complements human inspection rather than replacing it, and share trial data comparing combined human-plus-AI detection with inspection alone",
        "Involve the quality engineers in designing the review workflow, error thresholds and escalation rules so the control remains in their hands",
        "Mandate adoption by executive order and track compliance",
        "Remove the engineers who object from the quality team",
        "Promise the engineers that the assistant will never make a mistake"
      ],
      "answer": [0, 1],
      "explanation": "Skill 4.3.4 is about recognising cultural barriers such as risk aversion and designing leadership interventions that address them. Reframing the assistant as a safety net that raises overall detection, backed by the engineers' own trial evidence, speaks to the zero-defect value rather than fighting it. Co-designing thresholds and escalation gives the experts ownership and preserves their professional authority. Mandating adoption creates compliance without belief and invites quiet workarounds. Removing dissenters loses scarce expertise and signals that concerns are punished. Promising perfection is false and, when the first error appears, would destroy trust entirely."
    },
    {
      "id": "e4-61",
      "domain": 2,
      "skill": "2.1.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A cosmetics company needs a generative AI product-copy tool integrated with its existing e-commerce platform within three months. It has a small budget, no machine learning team and a procurement function that already purchases software through AWS Marketplace with consolidated billing. Which approach is MOST appropriate?",
      "options": [
        "Build a custom solution on Amazon SageMaker AI to retain full control of the model",
        "Buy an established third-party generative AI copy product through AWS Marketplace, using private offer terms where needed, and engage an integration partner for the e-commerce connection",
        "Wait a year until an in-house ML team can be hired and trained",
        "Pre-train a proprietary foundation model on the company's product catalogue"
      ],
      "answer": [1],
      "explanation": "Skill 2.1.2 covers build-buy-partner decisions using budget, timeline, capabilities and vendor options, and the exam guide names AWS Marketplace as a tool for evaluating them. A three-month deadline, limited budget and no ML staff point away from building. Marketplace lets the company evaluate competing products, negotiate private offers and procure through the billing channel it already uses, while a partner closes the integration gap. Building on SageMaker AI requires skills and time the company lacks. Waiting a year fails the deadline and the commercial opportunity. Pre-training a foundation model is a multimillion-dollar research effort entirely disproportionate to writing product copy."
    },
    {
      "id": "e4-62",
      "domain": 1,
      "skill": "1.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "During a steering meeting, a wealth management executive hears the data team say that they have chosen an algorithm and will now produce a model. The executive asks what the difference is. Which explanation is MOST accurate?",
      "options": [
        "An algorithm and a model are the same thing described at different stages of a project",
        "The algorithm is the learning procedure applied to the training data; the model is the resulting artefact that encodes the learned patterns and is used to make predictions",
        "The model is the procedure, and the algorithm is the output produced after training",
        "The algorithm is the data and the model is the software that stores it"
      ],
      "answer": [1],
      "explanation": "Skill 1.1.1 covers fundamental concepts such as algorithms, models, training, inference and predictions in business terms. The algorithm is the method, for example a decision-tree or gradient-boosting procedure, that is run over historical data during training; the model is what that training produces, a set of learned parameters that can then be used at inference time to generate predictions. Treating them as synonyms blurs the distinction between method and result that governs cost, retraining and governance decisions. Swapping the two terms reverses their meaning. Neither term refers to the data itself or to storage software."
    },
    {
      "id": "e4-63",
      "domain": 3,
      "skill": "3.2.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A construction company's legal team has blocked a proposed Amazon Bedrock deployment, arguing that bid documents entered as prompts will be used to train the public foundation models and that AWS would be responsible for any resulting leak. How should the AI strategist respond under the shared responsibility model for AI workloads?",
      "options": [
        "Agree with legal; any data sent to a managed AI service becomes part of the provider's training data",
        "Explain that Amazon Bedrock does not use customer prompts or outputs to train base models or share them with model providers, while the company remains responsible for classifying its data, controlling access, configuring guardrails and governing how outputs are used",
        "Explain that because Bedrock is a managed service, AWS assumes full responsibility for the confidentiality of the company's bid documents and their use",
        "Recommend using a free consumer chatbot instead, since the risk is the same everywhere"
      ],
      "answer": [1],
      "explanation": "Skill 3.2.3 covers access controls and data security measures for AI systems, framed by the AWS shared responsibility model. AWS secures the infrastructure and operates the service, and Amazon Bedrock's data handling commitments mean customer inputs and outputs are not used to improve base models or shared with third-party providers. The customer still owns data classification, identity and access, guardrail configuration and output governance, so legal's concern should be redirected into those controls rather than a block. Assuming all managed services train on customer data is incorrect for this service. Claiming AWS assumes full responsibility misstates the model. Consumer chatbots typically carry materially different and weaker data-use terms."
    },
    {
      "id": "e4-64",
      "domain": 2,
      "skill": "2.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "Two HR technology vendors offer candidate-matching products built on the same foundation model available through Amazon Bedrock. Investors ask one vendor how it will sustain an advantage when its competitor has identical model access. Which answer BEST describes a sustainable source of advantage?",
      "options": [
        "Negotiating exclusive access to the foundation model so the competitor cannot use it",
        "Building a feedback loop in which recruiter decisions and hiring outcomes continuously improve matching for each client, embedded deeply in the clients' workflows and governed for fairness",
        "Switching to whichever new model tops the public benchmarks each quarter",
        "Lowering prices below the competitor until it exits the market"
      ],
      "answer": [1],
      "explanation": "Skill 2.3.3 asks how AI creates sustainable competitive advantage. Foundation models are broadly available, so the model itself is not a moat. Advantage compounds from proprietary data generated by real usage, from outcome feedback that improves results over time, from workflow integration that raises switching costs, and from trust built through responsible governance. Exclusive model access is not realistically available and would be a fragile basis anyway. Chasing benchmark leaders is something any competitor can do equally. Price wars erode margins without creating any capability the competitor lacks, and the advantage ends the moment pricing changes."
    },
    {
      "id": "e4-65",
      "domain": 2,
      "skill": "2.2.2",
      "type": "multi",
      "difficulty": "hard",
      "question": "A mining company launched a generative AI maintenance-documentation assistant at six sites three months ago without recording any pre-launch metrics. The board now asks for proof of impact. Which TWO corrective actions give the MOST credible measurement? (Select TWO.)",
      "options": [
        "Reconstruct a pre-launch baseline from historical maintenance-system logs, such as average time from job completion to report filed, for the months before go-live",
        "Use the sites that have not yet received the assistant as a comparison group, measuring the same metrics over the same period",
        "Compare the assistant's results with the vendor's published case-study figures",
        "Ask technicians to estimate how much time they think they are saving",
        "Report the number of documents generated as proof of value",
        "Declare success based on positive comments in the project chat channel"
      ],
      "answer": [0, 1],
      "explanation": "Skill 2.2.2 is about establishing baselines before implementation, and about the recovery options when that step was skipped. Historical system logs let the company reconstruct an objective pre-launch state, and the sites not yet live provide a contemporaneous control that isolates the assistant's effect from other changes. Vendor case studies describe other companies and other conditions. Technician estimates are subjective and prone to expectation bias. Document counts are activity, not value; more documents could even mean duplication. Anecdotal chat comments are sentiment, useful as colour but not evidence that will satisfy a board asking for impact."
    }
  ]
});
