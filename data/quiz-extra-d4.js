window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
(function(){ var d = window.AIB_DATA.domains["d4"]; if(!d){return;} d.quiz = d.quiz || []; d.quiz.push(
  {
    "id": "d4-q26",
    "skill": "4.1.2",
    "type": "single",
    "difficulty": "easy",
    "question": "A regional bank is assessing its position on an AI maturity model. Which piece of evidence MOST strongly indicates that the bank has progressed beyond the experimentation stage to enterprise-scale deployment?",
    "options": [
      "Several AI models are embedded in core processes such as lending and fraud operations, run on a shared platform with monitoring, and report measured business value to leadership.",
      "More than forty proofs of concept have been completed across business units during the past two years.",
      "The bank hosted a well-attended generative AI hackathon for employees.",
      "The infrastructure team has reserved GPU capacity for future model training."
    ],
    "answer": [0],
    "explanation": "Maturity models distinguish stages by how deeply AI is integrated into the business, not by activity level. Models that are embedded in core processes, operated on a shared platform with monitoring, and measured for business value are the hallmarks of enterprise-scale deployment. A large number of proofs of concept, without production adoption, is typical of the experimentation stage. A hackathon builds awareness and skills but is not evidence of scaled deployment. Reserving compute capacity is a technology input rather than an outcome and says nothing about whether AI delivers value in production."
  },
  {
    "id": "d4-q27",
    "skill": "4.1.3",
    "type": "multi",
    "difficulty": "medium",
    "question": "A healthcare company's AI transformation has stalled. It employs a strong team of data scientists, its executive sponsor is engaged, and it has adequate cloud capacity. Yet most models never reach production: there is no repeatable path from a validated model to a supported production service, and nobody is empowered to decide whether a model is approved for clinical use. Which TWO capability gaps are MOST clearly blocking the transformation? (Select TWO.)",
    "options": [
      "A process gap: no defined, repeatable route from experiment to production deployment and support.",
      "A governance gap: no clear decision rights or approval authority for releasing models into clinical workflows.",
      "A people gap: insufficient data science talent to build models.",
      "A technology gap: lack of compute capacity to train models.",
      "A leadership gap: absence of executive sponsorship."
    ],
    "answer": [0, 1],
    "explanation": "Capability gaps should be diagnosed across people, process, technology and governance. The scenario explicitly rules out people, technology and leadership problems: the data science team is strong, cloud capacity is adequate and the sponsor is engaged. What is missing is a process for taking a model to production and a governance structure that defines who can approve release. Those two gaps together explain why validated models never reach clinicians. Adding data scientists, compute or executive attention would address problems the company does not have."
  },
  {
    "id": "d4-q28",
    "skill": "4.1.4",
    "type": "single",
    "difficulty": "hard",
    "question": "A consumer electronics company has a mature analytics function, a well-governed data platform and several predictive models in production. It has no generative AI experience and no responsible AI policies. Its strategic objective is to launch a customer-facing generative AI shopping assistant within twelve months. Where should the company direct its NEXT development investment?",
    "options": [
      "Expand the data platform further, since data foundations are the most important prerequisite for any AI initiative.",
      "Build responsible AI governance and generative AI skills, including guardrail and evaluation practices, because those are the gaps between the current maturity level and the strategic objective.",
      "Train a proprietary foundation model so that the assistant is fully differentiated from competitors.",
      "Hire a large team of data scientists to increase predictive modeling output."
    ],
    "answer": [1],
    "explanation": "Investment priorities should be derived from the distance between current maturity and the strategic objective. This company already has strong data and predictive capabilities; what it lacks for a customer-facing generative AI product is governance for responsible AI and practical generative AI skills such as guardrails and evaluation. Pouring more money into an already mature data platform addresses a solved problem. Training a proprietary foundation model is costly, slow and unnecessary when managed models are available. Hiring more predictive data scientists strengthens a capability that is not on the critical path to the objective."
  },
  {
    "id": "d4-q29",
    "skill": "4.2.2",
    "type": "single",
    "difficulty": "medium",
    "question": "A manufacturing group spent two years consolidating data from all its plants into a central data lake. AI teams still report that they cannot find relevant datasets, cannot tell which version is authoritative, and do not know whom to ask for permission to use the data. Which action would MOST improve the foundation for AI?",
    "options": [
      "Build a second data lake with a more modern storage technology.",
      "Define a data strategy that assigns owners to each business-critical dataset, publishes a searchable catalog with quality standards, and sets clear rules for how data is shared and approved for use.",
      "Purchase external datasets so that teams do not depend on internal data.",
      "Restrict access to the data lake to the central data team to prevent misuse."
    ],
    "answer": [1],
    "explanation": "Centralizing storage does not by itself make data usable for AI. What the teams lack is ownership, discoverability, trusted quality and a sharing framework, which are the elements of a data strategy and are the basis of approaches such as data products and data mesh. Another lake would reproduce the same problems on new technology. External datasets do not solve the inability to use the company's own operational data. Restricting access to one team deepens the silo problem and slows AI teams further rather than giving them a governed, self-service path to data."
  },
  {
    "id": "d4-q30",
    "skill": "4.2.3",
    "type": "multi",
    "difficulty": "medium",
    "question": "A retailer plans two AI initiatives in the next year: a generative AI assistant for store associates and a demand-forecasting model. A strategist is assessing the foundational technology and infrastructure required before the initiatives start. Which TWO requirements are MOST critical to confirm? (Select TWO.)",
    "options": [
      "Secure, scalable access to governed data sources such as sales, inventory and product content for both training and retrieval.",
      "The ability to integrate AI outputs into existing applications and workflows through APIs, with identity and access management covering the new services.",
      "Purchase of a dedicated on-premises GPU cluster before the use cases are fully defined.",
      "Migration of all enterprise workloads to a single platform before any AI work begins.",
      "Development of a proprietary large language model trained from scratch on company data."
    ],
    "answer": [0, 1],
    "explanation": "Foundational infrastructure for AI is primarily about data access and integration. Both initiatives depend on secure, scalable access to governed data, and their value is only realized if outputs flow into the systems associates and planners actually use, with proper identity and access controls. Buying GPU hardware before requirements are known commits capital to capacity that managed services can provide on demand. A wholesale platform migration is an unrelated and disproportionate prerequisite. Training a proprietary language model from scratch is not required for either use case and would be far costlier than using managed foundation models."
  },
  {
    "id": "d4-q31",
    "skill": "4.3.1",
    "type": "single",
    "difficulty": "medium",
    "question": "A logistics company wants to identify and empower AI champions in each regional operation to sustain momentum after an initial wave of pilots. Which approach is MOST likely to produce effective champions?",
    "options": [
      "Select only staff with technical backgrounds, because they can explain how the models work.",
      "Choose respected business users from each region, give them protected time, a direct link to the central AI team and leadership, and authority to run small local experiments.",
      "Require every manager to serve as a champion in addition to their existing responsibilities.",
      "Reward champions based on the number of staff they recruit into training sessions."
    ],
    "answer": [1],
    "explanation": "Champions sustain momentum because peers trust them and because they have the time, support and authority to act. Respected business users with protected time, a connection to the central team and leadership, and permission to run local experiments can translate strategy into visible local results. Limiting champions to technical staff loses the peer credibility that drives adoption among business teams. Making every manager a champion without time or support dilutes the role into a title. Rewarding headcount recruited into training measures activity rather than the adoption and value that champions are meant to create."
  },
  {
    "id": "d4-q32",
    "skill": "4.3.2",
    "type": "single",
    "difficulty": "medium",
    "question": "A generative AI product team at an insurer includes a product manager, three engineers, a data scientist, a lawyer, a compliance analyst and a security specialist. The team has the right expertise, but decisions are repeatedly reopened, nobody can say who approved the current scope, and the business sponsor learns of changes after the fact. What should the program lead do to establish clear accountability?",
    "options": [
      "Declare that the whole team shares accountability equally for all decisions.",
      "Name a single accountable business owner for the initiative's outcomes and publish a RACI that defines who is responsible, consulted and informed for scope, risk, security and release decisions.",
      "Transfer accountability for all decisions to the center of excellence.",
      "Make the vendor supplying the foundation model accountable for the product's business outcomes."
    ],
    "answer": [1],
    "explanation": "A cross-functional team needs clear accountability standards as well as diverse expertise. Naming one accountable business owner and documenting a RACI stops decisions being reopened, makes it obvious who approves scope and release, and keeps the sponsor informed. Shared accountability for everything means nobody is accountable. Moving decisions to the center of excellence removes ownership from the people closest to the product and its customers. A vendor can be contractually responsible for its service but cannot be accountable for the insurer's business outcomes."
  },
  {
    "id": "d4-q33",
    "skill": "4.3.4",
    "type": "single",
    "difficulty": "hard",
    "question": "After a highly visible AI pilot at a utility failed to deliver its forecast savings, the responsible team was publicly criticized and its leader reassigned. In the following year, business units proposed only small, low-risk automation projects and avoided anything novel. Which leadership intervention would MOST effectively address the cultural barrier?",
    "options": [
      "Reinstate the original team and relaunch the failed pilot to prove the concept works.",
      "Have senior leaders publicly reframe the failed pilot as a source of learning, define criteria and budgets for safe-to-fail experiments, and recognize teams for well-run experiments regardless of outcome.",
      "Require every future AI proposal to include a guarantee of success before funding is approved.",
      "Outsource all future AI initiatives to external partners so that internal teams are not exposed to failure."
    ],
    "answer": [1],
    "explanation": "The pattern of proposing only safe projects after a public failure is fear of failure, a recognized cultural barrier to AI adoption. Leaders change that culture by modeling the attitude they want: treating failure as learning, creating explicit, bounded space for experimentation, and rewarding good process rather than only good outcomes. Relaunching the same pilot does not address why teams have become risk averse. Demanding guarantees of success makes experimentation impossible and reinforces the fear. Outsourcing avoids the problem rather than solving it and prevents the organization from building its own capability."
  },
  {
    "id": "d4-q34",
    "skill": "4.3.5",
    "type": "single",
    "difficulty": "easy",
    "question": "A retailer ran a one-day generative AI hackathon that generated enthusiasm and thirty ideas. Three months later, none of the ideas has progressed and most participants have not used AI tools since. Which workforce development approach would MOST effectively convert the initial interest into enterprise-wide AI literacy?",
    "options": [
      "Run the same hackathon again every quarter to keep enthusiasm high.",
      "Build a role-based learning pathway for executives, business users and builders, and pair it with a proof-of-concept program that funds and coaches selected hackathon ideas through to evaluation.",
      "Require all employees to complete a technical certification in machine learning.",
      "Stop internal literacy efforts and hire a small group of external AI experts to do the work."
    ],
    "answer": [1],
    "explanation": "Hackathons are a useful spark, but literacy grows when learning is tailored to each role and when ideas have a structured route forward. A role-based pathway gives executives, business users and builders what each needs, and a proof-of-concept program turns ideas into practical experience and visible outcomes. Repeating hackathons without follow-through produces the same fade-out. Mandatory technical certification is inappropriate for most roles and generates resistance. Hiring a few experts instead of developing the workforce leaves the broader organization unable to identify opportunities or use AI tools effectively."
  },
  {
    "id": "d4-q35",
    "skill": "4.3.6",
    "type": "multi",
    "difficulty": "medium",
    "question": "An insurer is redesigning the claims adjuster role so that AI handles routine processing and adjusters shift toward oversight and higher-value work. Which TWO responsibilities are MOST appropriate to keep with human adjusters? (Select TWO.)",
    "options": [
      "Communicating with claimants who have suffered serious loss or bereavement and need empathetic, personalized support.",
      "Making final judgments on ambiguous, high-value or novel liability disputes where context and precedent must be weighed.",
      "Extracting dates, amounts and policy numbers from repair invoices and medical bills.",
      "Classifying incoming claims by type and routing them to the correct queue.",
      "Flagging duplicate submissions across claim records."
    ],
    "answer": [0, 1],
    "explanation": "The transition to human-AI collaboration assigns to people the work that depends on human strengths such as empathy, critical thinking and judgment in unusual situations, and assigns to AI the repetitive, pattern-based tasks it performs quickly and consistently. Supporting distressed claimants and deciding complex, ambiguous disputes are exactly the human tasks. Extracting fields from documents, classifying and routing claims, and detecting duplicates are high-volume, well-defined tasks where AI typically outperforms manual work and where human time is poorly spent."
  },
  {
    "id": "d4-q36",
    "skill": "4.4.1",
    "type": "single",
    "difficulty": "easy",
    "question": "A hospitality company's transformation office insists on completing a comprehensive envisioning exercise for every possible AI opportunity across the enterprise, then aligning every department, before any pilot can begin. Eighteen months in, nothing has been built. Which adjustment is MOST consistent with the iterative transformation approach described in the AWS Cloud Adoption Framework?",
    "options": [
      "Skip the Envision and Align phases and move straight to enterprise-wide scaling of a vendor product.",
      "Move through Envision, Align, Launch and Scale iteratively for a small number of prioritized opportunities, delivering pilots that produce value and learning while later opportunities are still being envisioned.",
      "Extend the envisioning exercise until every opportunity has a complete business case.",
      "Start with the Scale phase so that the organization gains experience operating AI at volume."
    ],
    "answer": [1],
    "explanation": "The AWS CAF transformation journey is iterative: organizations envision and align around a focused set of opportunities, launch pilots to prove value, scale what works, and repeat. Trying to complete every phase for every opportunity before building anything delays value and learning, which is the problem in the scenario. Skipping Envision and Align leads to initiatives disconnected from business outcomes and lacking stakeholder commitment. Extending the envisioning exercise prolongs the stall. Scaling cannot come first because there is nothing proven to scale."
  },
  {
    "id": "d4-q37",
    "skill": "4.4.3",
    "type": "single",
    "difficulty": "medium",
    "question": "A bank created an AI center of excellence (COE) and measures its success by the number of models the COE team builds each year. Business units complain that the COE builds solutions they did not ask for, that nothing is reusable, and that their own teams receive no help getting projects into production. What change would MOST improve the COE's contribution to scaling AI?",
    "options": [
      "Measure the COE on business unit adoption, reuse of shared platforms and patterns, time from idea to production, and business value realized, and refocus it on enablement, standards and shared services.",
      "Increase the COE's model-building target so that more solutions are available to business units.",
      "Dissolve the COE and let each business unit build its own AI capability independently.",
      "Convert the COE into a review committee that only approves or rejects business unit proposals."
    ],
    "answer": [0],
    "explanation": "A center of excellence supports scaling by enabling business units through shared platforms, reusable assets, standards and expertise, and its metrics should reflect that purpose. Measuring adoption, reuse, speed to production and realized value aligns the COE with the organization's outcomes. Raising a model-building quota entrenches the behavior business units are complaining about. Dissolving the COE removes the coordination that prevents duplicated effort and inconsistent governance. Reducing the COE to an approval gate turns it into a bottleneck and discards its enabling role."
  },
  {
    "id": "d4-q38",
    "skill": "4.4.4",
    "type": "multi",
    "difficulty": "hard",
    "question": "A professional-services firm launched a generative AI research assistant to 4,000 consultants. Leadership wants a feedback and measurement approach that will show whether the tool keeps delivering value over the next two years, not just at launch. Which THREE mechanisms should the firm put in place? (Select THREE.)",
    "options": [
      "In-product feedback capture, such as ratings and comments on responses, reviewed on a regular cadence by the product owner with a visible backlog of resulting improvements.",
      "Business key performance indicators, such as hours per engagement deliverable and client satisfaction, tracked against the pre-launch baseline and reported through a periodic benefits review.",
      "Adoption and usage metrics broken down by practice, role and region to reveal where the tool is and is not being used.",
      "A single satisfaction survey conducted in the month after launch.",
      "The model vendor's published benchmark scores, refreshed whenever a new model version is released.",
      "The total number of prompts submitted, used as the sole indicator of value."
    ],
    "answer": [0, 1, 2],
    "explanation": "Long-term value tracking needs a continuous loop: qualitative feedback from users that is acted on, business outcome metrics compared with a baseline over time, and adoption data granular enough to show where value is and is not materializing. A single post-launch survey captures only a moment and cannot reveal trends. Vendor benchmarks describe the model in general, not the firm's outcomes. Raw prompt counts measure activity, which can rise while value falls, so they are not a sufficient indicator on their own."
  },
  {
    "id": "d4-q39",
    "skill": "4.4.5",
    "type": "single",
    "difficulty": "medium",
    "question": "An innovation lab at a pharmaceutical company built a generative AI tool that drafts regulatory submission sections. The pilot was funded from the lab's budget, maintained by two lab engineers, and used informally by one team. The regulatory affairs division now wants it available to all 600 staff. Which set of requirements MUST be addressed for the transition to production-grade?",
    "options": [
      "Only a larger compute budget, because the application itself has already been proven in the pilot.",
      "A named business owner and operating team, ongoing funding, defined service levels and support, security and compliance review, monitoring, and change control for the model and prompts.",
      "A press release and an internal launch event to drive adoption.",
      "Migrating the tool to a different foundation model so that it is not dependent on the version used in the pilot."
    ],
    "answer": [1],
    "explanation": "Moving from experiment to production changes who owns the system and what is expected of it. A production service in a regulated domain needs clear ownership outside the lab, sustained funding, service levels and support, security and compliance validation, monitoring, and controlled change to models and prompts. Compute budget alone ignores the governance and operational obligations that pilots typically lack. Launch communications matter for adoption but do not make a system production-grade. Changing the foundation model is not inherently required and could introduce new risk without addressing the real gaps."
  },
  {
    "id": "d4-q40",
    "skill": "4.4.6",
    "type": "single",
    "difficulty": "medium",
    "question": "A bank's generative AI assistant for contact-center agents worked well with 150 pilot users. After it was extended to 5,000 agents in one week, users experienced long delays and intermittent errors during peak hours, and average call-handling time rose above pre-pilot levels. Which approach would BEST protect business continuity and performance for the remainder of the scale-up?",
    "options": [
      "Switch to the largest available foundation model so that answers are higher quality.",
      "Perform capacity planning and load testing at target volumes, consider provisioned throughput where usage is predictable, onboard remaining sites in phases with go/no-go checks, and provide a graceful fallback so agents can continue work if the assistant is slow or unavailable.",
      "Disable the assistant's guardrails to reduce response latency.",
      "Pause the rollout indefinitely until a new contact-center platform is procured."
    ],
    "answer": [1],
    "explanation": "Scaling multiplies demand on shared capacity, so continuity depends on planning for the target load, testing before each expansion, phasing the rollout with explicit checkpoints, and ensuring that a slow or failed assistant does not stop agents from serving customers. Committed capacity options help when volume is steady. A larger model generally increases latency and cost and does not address throughput. Removing guardrails trades safety for a small latency gain and creates new risk. An indefinite pause abandons value already demonstrated when the issues are addressable with planning."
  }
); })();
