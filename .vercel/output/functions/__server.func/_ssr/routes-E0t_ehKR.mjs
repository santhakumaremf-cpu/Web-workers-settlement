import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as FileText, d as ChevronRight, f as ChevronLeft, i as Search, l as FileSpreadsheet, o as Printer, r as Settings2, s as FolderArchive, t as Upload, u as Download } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as utils, t as readSync } from "../_libs/xlsx.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-E0t_ehKR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,border-color,transform,opacity] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			secondary: "bg-surface text-fg border border-border hover:bg-raised",
			outline: "border border-border bg-transparent text-fg hover:bg-raised",
			ghost: "text-fg hover:bg-raised",
			success: "bg-ok text-ok-fg hover:bg-ok/90",
			word: "bg-ink text-paper hover:bg-ink/90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, type = "text", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		suppressHydrationWarning: true,
		className: cn("flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg shadow-none transition-[border-color,box-shadow] duration-[var(--motion-quick)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		suppressHydrationWarning: true,
		className: cn("flex min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-fg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
		...props
	});
}
function Badge({ className, tone = "muted", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tabular-nums", tone === "muted" && "bg-raised text-muted", tone === "ok" && "bg-ok-soft text-ok", tone === "warn" && "bg-warn-soft text-warn", tone === "ink" && "bg-ink text-paper", className),
		...props
	});
}
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl border border-border bg-surface text-fg shadow-[0_1px_0_color-mix(in_oklab,var(--color-fg)_6%,transparent)]", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1 px-5 pt-5 pb-3", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: cn("font-display text-lg font-semibold tracking-tight", className),
		...props
	});
}
function CardDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-sm text-muted", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("px-5 pb-5", className),
		...props
	});
}
function Separator({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "separator",
		className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
		...props
	});
}
var DOCUMENT_HTML = "<!-- ==================== PAGE 1: AGREEMENT ==================== -->\n<div class=\"a4-page\" id=\"page1\">\n\n    <div class=\"doc-title\">\n        தொழில் தகராறு சட்டம் 1947, பிரிவு 18(1)ன் கீழ் ஏற்பட்ட ஒப்பந்தம்\n    </div>\n\n    <!-- EXACT ALIGNMENT (as per reference image):\n         ஒப்பந்தத்தில்            :  நிர்வாகம்  (bold)\n         சம்பந்தப்பட்டவர்கள்          திருவள்ளுவர் டெக்ஸ்டைல்ஸ்\n                                     பிரைவேட் லிமிடெட், மற்றும்\n                                     ... (address lines straight below நிர்வாகம்) -->\n    <div class=\"parties-section\">\n        <div class=\"party-line\">\n            <div class=\"party-label-left\">ஒப்பந்தத்தில்<br>சம்பந்தப்பட்டவர்கள்</div>\n            <div class=\"party-colon\">:</div>\n            <div class=\"party-label-right\">\n                <p class=\"party-mgmt\">நிர்வாகம்</p>\n                <!-- Company Address - directly under நிர்வாகம், same left edge -->\n                <div class=\"company-address\">\n                    <p>திருவள்ளுவர் டெக்ஸ்டைல்ஸ்</p>\n                    <p>பிரைவேட் லிமிடெட், மற்றும்</p>\n                    <p>சம்மந்தப்பட்ட தொழிலாளர்கள்</p>\n                    <p>2-9, சிங்காளந்தபுரம் பிரிவு ரோடு,</p>\n                    <p>இராசிபுரம் - 637 408,</p>\n                    <p>நாமக்கல் மாவட்டம்.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- EXACT ALIGNMENT: Management Representatives row without dashes -->\n    <div class=\"rep-row\">\n        <div class=\"rep-left\">\n            <p>நிர்வாகத்தின் அதிகாரப்பூர்வ</p>\n            <p>பிரதிநிதிகள்</p>\n        </div>\n        <div class=\"rep-mid\">:</div>\n        <div class=\"rep-right\" style=\"line-height: 1.7;\">\n            <p><span class=\"words-blank\" id=\"rep1\" contenteditable=\"true\"></span></p>\n            <p><span class=\"words-blank\" id=\"rep2\" contenteditable=\"true\"></span></p>\n        </div>\n    </div>\n\n    <!-- EXACT ALIGNMENT: Worker row - Name (with Emp No) straight across, Address exactly below it -->\n    <div class=\"rep-row\">\n        <div class=\"rep-left\">\n            <p>தொழிலாளர் சார்பில்</p>\n        </div>\n        <div class=\"rep-mid\">:</div>\n        <div class=\"rep-right\" style=\"line-height: 1.7;\">\n            <p><span class=\"words-blank\" id=\"w_name\" contenteditable=\"true\"></span></p>\n            <p><span class=\"words-blank\" id=\"w_full_address\" contenteditable=\"true\"></span></p>\n            <p style=\"margin-top: 4px;\">\n                <span id=\"w_phone_label\"></span> <span class=\"words-blank\" id=\"w_phone\" contenteditable=\"true\"></span>\n            </p>\n        </div>\n    </div>\n\n    <p class=\"underline-text\">தொழில் தாவா:</p>\n\n    <p class=\"para numbered\" data-num=\"1)\">\n        மேற்படி நிர்வாகம், இராசிபுரத்தில் நூற்பாலையை 1980-ம் ஆண்டு முதல் நடத்தி வருகிறது.\n    </p>\n\n    <p class=\"para numbered\" data-num=\"2)\">\n        கடந்த 2017-ம் வருடம் முதல் நிர்வாகம் மிகுந்த நஷ்டத்தில் இயங்கி வந்துள்ளது. உற்பத்திக்கான கச்சாப் பொருளான பஞ்சு கடந்த 2017 முதல் மிக அதிகமான விலையேற்றம் அடைந்தது. மேலும் தொழிற்சாலையில் தயாரிக்கப்படும் பொருட்களின் விற்பனையும் குறைந்தது. பொதுவாகவே இத்தொழில் மாநிலம் முழுவதும் சுமார் 10 வருடங்களாகப் பாதிக்கப்பட்டுள்ளது. இதே மாதிரியான பொருட்களுக்குச் சந்தையில் கடுமையான போட்டி நிலவுவதால், உற்பத்தி செய்யப்படும் பொருட்களைச் சரியான விலைக்கு விற்க முடியாத நிலை ஏற்பட்டுள்ளது. இதனால் உற்பத்தியும் மிகவும் குறைந்தது. இக்காலகட்டத்தில் வரிகளும், மின்சாரக் கட்டணம் போன்றவைகளும் உயர்த்தப்பட்டுள்ளன. மேற்கூறிய காரணங்களால் செலவினங்கள் அதிகரித்ததே தவிர, தகுந்த வருமானம் கிடைக்காத நிலை ஏற்பட்டுள்ளது.\n    </p>\n\n    <p class=\"para numbered\" data-num=\"3)\">\n        எனவே, இக்காரணங்களால் நிர்வாகத்தால் தொழிற்சாலையைத் தொடர்ந்து இயக்க முடியாத நிலை (Cessation of Operation) ஏற்பட்டு, 23.05.2022 முதல் உற்பத்தியைத் தொடர முடியவில்லை. இதன் பொருட்டுப் பல முயற்சிகள் செய்தும் ஆலையை மீண்டும் இயக்க முடியவில்லை. இதனால், தொழிலாளர்களுக்குத் தொடர்ந்து பணி வழங்க முடியாத நிலையும் ஏற்பட்டுள்ளது.\n    </p>\n\n    <p class=\"para numbered\" data-num=\"4)\">\n         இவ்வாறிருக்க, தொழிலாளர்கள், சேலம் தொழிலாளர் நலத் துறையில் (ACL) பணிநிறுத்தம் சம்பந்தமாக ஒரு தாவா (நா.க.439/2023, நா.க.612/2023) எழுப்பினர். இந்தத் தாவா தொழிலாளர் துறையால் நீதிமன்றத்தின் முன் தீர்வுக்காக அனுப்பப்பட்டது. அதைத் தொழிற் தீர்ப்பாயம், சென்னை (Industrial Tribunal - Chennai) ஏற்று, O.P.19/2024 மற்றும் O.P.33/2025 எண்களின் கீழ் விசாரணை செய்து வருகிறது. இதனிடையில் தொழிலாளர்கள் நிர்வாகத்தை அணுகி, இந்தப் பிரச்சினையை முடிவுக்குக் கொண்டுவரும்படி கேட்டுக் கொண்டனர்.\n    </p>\n\n    <p class=\"para numbered\" data-num=\"5)\">\n        அதன்படி, தொழிலாளர்களும் நிர்வாகமும் இப்பிரச்சினைகளுக்கு முடிவு காணப் பல சுற்றுப் பேச்சுவார்த்தைகள் முறையே 21/10/2025, 24/10/2025 மற்றும் 30/10/2025 ஆகிய தேதிகளில் நடத்தப்பட்டன. இப்பேச்சுவார்த்தைகளில் நிர்வாகம், முன்கூறப்பட்ட காரணங்களைத் தெரிவித்து, ஆலையை நடத்த முடியாத நிலையைத் தெளிவாக எடுத்துரைத்தது. மேற்கூறிய காரணங்களால் தமிழ்நாட்டில் பல மாவட்டங்களில் இத்தகைய தொழிற்சாலைகள் மூடப்பட்டதைப் பற்றியும் தெரிவிக்கப்பட்டது. இவை அனைத்தையும் கருத்தில் கொண்டு, தொழிலாளர் பிரதிநிதிகளும் தொழிலாளர்களும் தங்களுக்குச் சேர வேண்டிய சட்டப்படியான பணிப்பயன்களை வழங்குமாறும், மீண்டும் பணி கோருவதில்லை என்றும் கூறினர். எனவே, பணிப்பயன்களைப் பற்றிய பேச்சுவார்த்தை தொடரப்பட்டது.\n    </p>\n\n    <p class=\"para numbered\" data-num=\"6)\">\n        இது சம்பந்தமாகப் பல சுற்றுப் பேச்சுவார்த்தைகளுக்குப் பிறகு, நிர்வாகமும் தொழிலாளர்களும் கீழ்க்கண்ட ஒப்பந்த ஷரத்துக்களின்படி பிரச்சினைகளுக்குத் தீர்வு காண ஒப்புக் கொண்டனர்.\n    </p>\n\n    <div class=\"terms-section\">\n        <p class=\"terms-title\">7) ஒப்பந்த ஷரத்துக்கள்</p>\n        <table class=\"terms-table\">\n            <tr id=\"row_bonus\">\n                <td><span id=\"lbl_bonus\">a)</span> போனஸ் 2021-2022</td>\n                <td>-ரூ. <span class=\"blank\" id=\"t_bonus\" contenteditable=\"true\">________</span></td>\n            </tr>\n            <tr id=\"row_gratuity\">\n                <td><span id=\"lbl_gratuity\">b)</span> பணிக்கொடை (Gratuity)</td>\n                <td>-ரூ. <span class=\"blank\" id=\"t_gratuity\" contenteditable=\"true\">________</span></td>\n            </tr>\n            <tr id=\"row_compensation\">\n                <td><span id=\"lbl_compensation\">c)</span> இழப்பீட்டுத் தொகை (Compensation)</td>\n                <td>-ரூ. <span class=\"blank\" id=\"t_compensation\" contenteditable=\"true\">________</span></td>\n            </tr>\n            <tr id=\"row_notice\">\n                <td><span id=\"lbl_notice\">d)</span> One Month Closure Notice Pay</td>\n                <td>-ரூ. <span class=\"blank\" id=\"t_notice\" contenteditable=\"true\">________</span></td>\n            </tr>\n            <tr id=\"row_el\">\n                <td><span id=\"lbl_el\">e)</span> பாக்கியுள்ள ஈட்டிய விடுப்புத் தொகை</td>\n                <td>-ரூ. <span class=\"blank\" id=\"t_el\" contenteditable=\"true\">________</span></td>\n            </tr>\n            <tr id=\"row_exgratia\">\n                <td><span id=\"lbl_exgratia\">f)</span> கருணைத் தொகை</td>\n                <td>-ரூ. <span class=\"blank\" id=\"t_exgratia\" contenteditable=\"true\">________</span></td>\n            </tr>\n            <tr class=\"total-row\">\n                <td>ஆக மொத்தம்</td>\n                <td>-ரூ. <span class=\"blank\" id=\"t_total\" contenteditable=\"true\">________</span></td>\n            </tr>\n        </table>\n    </div>\n\n    <p class=\"amount-words-line\">\n        (மூபலகு ரூபாய் <span class=\"words-blank\" id=\"t_words\" contenteditable=\"true\">_____________________________________</span>)\n    </p>\n\n    <p class=\"para-no-indent\">\n        கொடுத்துக் கணக்கு முடிக்க நிர்வாகம் ஒப்புக்கொண்டதைத் தொழிலாளியும் ஏற்றுக் கொண்டார்.\n    </p>\n\n    <!-- Point 8 (as per corrected doc): amount, words, bank a/c no (with IFSC), online payment date -->\n    <p class=\"para numbered\" data-num=\"8)\">\n        மேற்படி தொகை ரூபாய் <span class=\"blank\" id=\"t_total2\" contenteditable=\"true\">________</span> (மூபலகு ரூபாய் <span class=\"words-blank\" id=\"t_total2_words\" contenteditable=\"true\">----------------- மட்டும்</span>) தொழிலாளியின் வங்கி கணக்கு எண் <span class=\"blank blank-wrap\" id=\"bank_ac\" contenteditable=\"true\">________</span>-ல் Online Payment மூலம் <span class=\"words-blank\" id=\"pay_date\" contenteditable=\"true\">-----------------</span> தேதியில் வரவு வைக்கப்பட்டது. இதன் மூலம் தொழிலாளி, தனக்குச் சேர வேண்டிய பணப்பயன் அனைத்தையும் நிர்வாகத்திடமிருந்து முழுமையாகவும் இறுதியாகவும் பெற்றுக் கொண்டேன் என்று உறுதிபடத் தெரிவித்துள்ளார். இதை நிர்வாகம் ஏற்றுக் கொண்டது. மேலும், மேற்படி பணம் பெற்றுக் கொண்டதற்கான \"சர்வ அடக்க ரசீது\" கொடுத்துள்ளதையும் நிர்வாகம் ஏற்றுக் கொண்டது.\n    </p>\n\n    <p class=\"para numbered\" data-num=\"9)\">\n        இத்தாவா சம்பந்தப்பட்ட தொழிலாளி, தான் சார்ந்த சங்கம், Industrial Tribunal Chennai O.P.19/2024 மற்றும் O.P.33/2025 எண்களில் தனக்குச் சாதகமாக அளிக்கப்பட்ட தீர்ப்புகள் முறையே 11.11.2025, 22.09.2025 மீது எவ்வித மேல் நடவடிக்கையும் எடுப்பதில்லை என்றும், இந்த ஒப்பந்தம் காரணமாக அவற்றைப் பணி அமல்படுத்த அவசியம் இல்லை என்றும் நிர்வாகத்திற்கு உறுதியளிக்கிறார். மேலும், இத்தீர்ப்புகளின்படி தனக்கு வர வேண்டிய தொகை யாதொன்றும் எவ்வகையிலும் இல்லை என்றும் தொழிலாளி ஒப்புக் கொள்கிறார்.\n    </p>\n\n    <p class=\"para numbered\" data-num=\"10)\">\n        மேற்படி தொழிலாளி, நிர்வாகத்திடமிருந்து தமக்கு வர வேண்டிய அனைத்துத் தொகைகளையும் முழுமையாகப் பெற்றுக் கொண்டபடியால், இனிமேல் நிர்வாகத்தின் மீது எந்தவிதமான சட்டரீதியான நடவடிக்கைகளையும் நீதிமன்றங்களில் தொடர்வதில்லை என்றும் ஒப்புக் கொள்கிறார்.\n    </p>\n\n    <!-- Agreement date as a normal paragraph -->\n    <p class=\"para\" style=\"margin-top:18px; text-align:justify;\">\n        மேற்கண்ட ஷரத்துகளை இருதரப்பினரும் மனப்பூர்வமாக ஏற்றுக் கொண்டு, இன்று இராசிபுரத்தில் <span class=\"words-blank\" id=\"ag_date\" contenteditable=\"true\"></span> தேதியில் கையெழுத்திட்டனர்.\n    </p>\n\n    <!-- Signatures section EXACTLY aligned like the picture -->\n    <div class=\"signatures\" style=\"margin-top: 35px; display: flex; justify-content: space-between; align-items: flex-start;\">\n        <div class=\"sign-box\" style=\"width: 45%; text-align: center; font-weight: bold;\">\n            <p>நிர்வாகத்திற்காக</p>\n        </div>\n        <div class=\"sign-box\" style=\"width: 45%; text-align: center; font-weight: bold;\">\n            <p>தாவா சம்பந்தப்பட்ட</p>\n            <p>தொழிலாளி</p>\n        </div>\n    </div>\n\n    <!-- Huge blank space for physical signatures before Witnesses -->\n    <div style=\"height: 90px;\"></div>\n\n    <!-- Witnesses without dashes -->\n    <div class=\"witness-section\" style=\"margin-top: 0; line-height: 2.0;\">\n        <h4>சாட்சிகள்:-</h4>\n        <p>1) <span class=\"words-blank\" id=\"wit1\" contenteditable=\"true\"></span></p>\n        <p>2) <span class=\"words-blank\" id=\"wit2\" contenteditable=\"true\"></span></p>\n    </div>\n\n    <div class=\"copies-section\">\n        <p class=\"copies-title\">நகல் :-</p>\n        <p class=\"copy-item\" data-num=\"1)\">அரசு துறை செயலாளர், தொழிலாளர் வேலை வாய்ப்புத் துறை, தேனாம்பேட்டை, சென்னை.</p>\n        <p class=\"copy-item\" data-num=\"2)\">உயர்திரு. தொழிலாளர் ஆணையர், தேனாம்பேட்டை, சென்னை.</p>\n        <p class=\"copy-item\" data-num=\"3)\">தொழிலாளர் துறை உதவி ஆணையர், (சமரசம்) சேலம்.</p>\n        <p class=\"copy-item\" data-num=\"4)\">சம்மந்தப்பட்ட தொழிலாளி</p>\n        <p class=\"copy-item\" data-num=\"5)\">நிர்வாகம்</p>\n    </div>\n\n</div>\n\n<!-- ==================== PAGE 2: RECEIPT ==================== -->\n<div class=\"a4-page\" id=\"page2\">\n\n    <div class=\"receipt-title\">சர்வ அடக்க ரசீது</div>\n\n    <div class=\"receipt-body\">\n        <p>\n            <span class=\"words-blank\" id=\"r_name\" contenteditable=\"true\">XXXXXX</span> தொழிலாளியாகிய நான், திருவள்ளுவர் டெக்ஸ்டைல்ஸ் பிரைவேட் லிமிடெட், இராசிபுரம், நாமக்கல் மாவட்டம், நிர்வாகத்திடமிருந்து ரூபாய் <span class=\"blank\" id=\"r_amount\" contenteditable=\"true\">________</span> (மூபலகு ரூபாய் <span class=\"words-blank\" id=\"r_amount_words\" contenteditable=\"true\">--------------------------- மட்டும்</span>) தொகையை நான் பணிபுரிந்ததற்கான இறுதிப் பணி பயன் உள்ளிட்ட சர்வ அடக்கத் தொகை எனது வங்கி கணக்கு எண் <span class=\"blank blank-wrap\" id=\"r_bank_ac\" contenteditable=\"true\">________</span>-ல் Online Payment மூலம் <span class=\"words-blank\" id=\"r_pay_date\" contenteditable=\"true\">-----------------</span> தேதியில் இன்று பெற்றுக்கொண்டேன். மேற்கண்ட சர்வ அடக்கத்தொகை பெற்றுக்கொண்டதால் நிர்வாகத்திடமிருந்து நான் பெற வேண்டிய பணிப்பயன்களோ, சம்பள பாக்கியோ அல்லது சட்டத்தின் அடிப்படையில் பெற வேண்டிய பிற பணிப்பயன்களோ எதுவும் எவ்வகையிலும் இல்லை என்றும், பணி முறிவை முழுமையாக ஏற்றுக் கொண்டு நிர்வாகத்திடம் மீண்டும் எக்காலத்திலும் பணி கோரமாட்டேன் என்றும் உறுதி அளிக்கிறேன்.\n        </p>\n    </div>\n\n    <!-- Receipt footer & Worker Signature block exactly matching Page 1 style -->\n    <div class=\"receipt-footer\" style=\"display: flex; justify-content: space-between; align-items: flex-start; margin-top: 60px;\">\n        <div style=\"line-height: 2.0;\">\n            <p>இடம் : <span class=\"words-blank\" contenteditable=\"true\">இராசிபுரம்</span></p>\n            <p>தேதி : <span class=\"words-blank\" id=\"rcpt_date\" contenteditable=\"true\"></span></p>\n        </div>\n        <div style=\"text-align: center; width: 45%; font-weight: bold;\">\n            <p>தொழிலாளியின் கையொப்பம்</p>\n            <div style=\"height: 80px;\"></div>\n        </div>\n    </div>\n\n</div>\n";
/** @type {Record<string, string>} */
var E2T_USER = {};
/** @type {Array<[RegExp, string]>} */
var E2T_USER_PHRASES = [];
function setUserNameFixes(words, phrases) {
	E2T_USER = words || {};
	E2T_USER_PHRASES = phrases || [];
}
var E2T_PHRASES = [
	[/main road/gi, "மெயின் ரோடு"],
	[/pirivu road/gi, "பிரிவு ரோடு"],
	[/privu road/gi, "பிரிவு ரோடு"],
	[/gurusamy ?palayam/gi, "குருசாமிபாளையம்"],
	[/gurusamy palaiym/gi, "குருசாமிபாளையம்"],
	[/paramathi velur/gi, "பரமத்தி வேலூர்"],
	[/namakkal (district|dist|dt)\.?/gi, "நாமக்கல் மாவட்டம்"],
	[/salem (district|dist|dt)\.?/gi, "சேலம் மாவட்டம்"],
	[/erode (district|dist|dt)\.?/gi, "ஈரோடு மாவட்டம்"],
	[/karur (district|dist|dt)\.?/gi, "கரூர் மாவட்டம்"],
	[/mobile no\.?\s*:?/gi, "கைபேசி எண் "],
	[/cell no\.?\s*:?/gi, "கைபேசி எண் "],
	[/phone no\.?\s*:?/gi, "தொலைபேசி எண் "],
	[/thiruvalluvar textiles (private limited|pvt\.? ltd\.?)/gi, "திருவள்ளுவர் டெக்ஸ்டைல்ஸ் பிரைவேட் லிமிடெட்"],
	[/post office/gi, "அஞ்சல் அலுவலகம்"],
	[/bus stand/gi, "பேருந்து நிலையம்"],
	[/bus stop/gi, "பேருந்து நிறுத்தம்"],
	[/railway station/gi, "ரயில் நிலையம்"],
	[/\bnear\b/gi, "அருகில்"],
	[/\bopp\b\.?/gi, "எதிரில்"],
	[/\bbehind\b/gi, "பின்புறம்"]
];
var E2T_DICT = {
	"gobi": "கோபி",
	"gopi": "கோபி",
	"palaniyappan": "பழனியப்பன்",
	"palaniappan": "பழனியப்பன்",
	"palaniappa": "பழனியப்பா",
	"palaniyappa": "பழனியப்பா",
	"chitra": "சித்ரா",
	"chithra": "சித்ரா",
	"lakshmi": "லட்சுமி",
	"laxmi": "லட்சுமி",
	"lakshmy": "லட்சுமி",
	"letchumi": "லட்சுமி",
	"lechumi": "லட்சுமி",
	"sambooranam": "சம்பூரணம்",
	"sampooranam": "சம்பூரணம்",
	"sambooranm": "சம்பூரணம்",
	"sampoornam": "சம்பூரணம்",
	"kavitha": "கவிதா",
	"kavita": "கவிதா",
	"angappan": "அங்கப்பன்",
	"ramanathan": "ராமநாதன்",
	"varatharaj": "வரதராஜ்",
	"varadharaj": "வரதராஜ்",
	"varadaraj": "வரதராஜ்",
	"manikam": "மாணிக்கம்",
	"manickam": "மாணிக்கம்",
	"manikkam": "மாணிக்கம்",
	"manicka": "மாணிக்க",
	"manikka": "மாணிக்க",
	"manika": "மாணிக்க",
	"pellukuruchiyar": "பெல்லுக்குறிச்சியார்",
	"pellukurichiyar": "பெல்லுக்குறிச்சியார்",
	"kadu": "காடு",
	"podinayakenpatty": "போடிநாயக்கன்பட்டி",
	"podinayakkanpatti": "போடிநாயக்கன்பட்டி",
	"podinaickenpatti": "போடிநாயக்கன்பட்டி",
	"bodinaickenpatti": "போடிநாயக்கன்பட்டி",
	"bodinayakanpatti": "போடிநாயக்கன்பட்டி",
	"kuthichinnampatty": "குத்திசின்னம்பட்டி",
	"arasapalayam": "அரசபாளையம்",
	"kakkavery": "காக்காவேரி",
	"kakkaveri": "காக்காவேரி",
	"koneripatty": "கோனேரிப்பட்டி",
	"konerippatty": "கோனேரிப்பட்டி",
	"koneripatti": "கோனேரிப்பட்டி",
	"thammanayakenpatty": "தம்மநாயக்கன்பட்டி",
	"singalandapuram": "சிங்காளந்தபுரம்",
	"singalanthapuram": "சிங்காளந்தபுரம்",
	"singalanthapuram": "சிங்காளந்தபுரம்",
	"rasipuram": "இராசிபுரம்",
	"rasipurm": "இராசிபுரம்",
	"namakkal": "நாமக்கல்",
	"namakal": "நாமக்கல்",
	"arunachalam": "அருணாசலம்",
	"arunachala": "அருணாசல",
	"maruthachalam": "மருதாசலம்",
	"marudhachalam": "மருதாசலம்",
	"kandhachalam": "கந்தாசலம்",
	"rangammal": "ரங்கம்மாள்",
	"rengammal": "ரெங்கம்மாள்",
	"pillayar": "பிள்ளையார்",
	"pillaiyar": "பிள்ளையார்",
	"pilliyar": "பிள்ளையார்",
	"prabhakar": "பிரபாகர்",
	"prabakar": "பிரபாகர்",
	"sudhakaran": "சுதாகரன்",
	"divakar": "திவாகர்",
	"dhivakar": "திவாகர்",
	"divakaran": "திவாகரன்",
	"kirubakaran": "கிருபாகரன்",
	"kirubakar": "கிருபாகர்",
	"ranganayaki": "ரங்கநாயகி",
	"chandirasekaran": "சந்திரசேகரன்",
	"chandiran": "சந்திரன்",
	"chandiramohan": "சந்திரமோகன்",
	"iyyanar": "ஐயனார்",
	"iyanar": "ஐயனார்",
	"ayyanar": "அய்யனார்",
	"ayyavoo": "அய்யாவு",
	"ayyavu": "அய்யாவு",
	"ayyadurai": "ஐயாத்துரை",
	"ayyakannu": "ஐயாக்கண்ணு",
	"ayyammal": "ஐயம்மாள்",
	"iyyammal": "ஐயம்மாள்",
	"ayyanan": "ஐயனன்",
	"chinnakalrayan": "சின்னக்கல்ராயன்",
	"kalrayan": "கல்ராயன்",
	"nadanthai": "நடந்தை",
	"kottamedu": "கோட்டமேடு",
	"medu": "மேடு",
	"chatram": "சத்திரம்",
	"puduchatram": "புதுச்சத்திரம்",
	"seerapalli": "சீரப்பள்ளி",
	"sengunthar": "செங்குந்தர்",
	"kaikolar": "கைக்கோளர்",
	"mookaiyan": "மூக்கையன்",
	"mookkaiyan": "மூக்கையன்",
	"mookan": "மூக்கன்",
	"mookkan": "மூக்கன்",
	"nachimuthu": "நாச்சிமுத்து",
	"natchimuthu": "நாச்சிமுத்து",
	"pichamuthu": "பிச்சைமுத்து",
	"pitchamuthu": "பிச்சைமுத்து",
	"ettiyappan": "எட்டியப்பன்",
	"ettiappan": "எட்டியப்பன்",
	"ettiyammal": "எட்டியம்மாள்",
	"sowndarya": "சௌந்தர்யா",
	"sowndarapandian": "சௌந்தரபாண்டியன்",
	"sowndarrajan": "சௌந்தரராஜன்",
	"deivanai": "தெய்வானை",
	"deivam": "தெய்வம்",
	"deivanayagam": "தெய்வநாயகம்",
	"deivendran": "தெய்வேந்திரன்",
	"dhivyabharathi": "திவ்யபாரதி",
	"bhuvanesh": "புவனேஷ்",
	"bhuvaneshwaran": "புவனேஸ்வரன்",
	"buvanesh": "புவனேஷ்",
	"karuppathal": "கருப்பாத்தாள்",
	"karuppayee": "கருப்பாயி",
	"thangathal": "தங்கத்தாள்",
	"kuppathal": "குப்பாத்தாள்",
	"pattathal": "பட்டத்தாள்",
	"nallathal": "நல்லத்தாள்",
	"kannathal": "கண்ணாத்தாள்",
	"ponnuthal": "பொன்னுத்தாள்",
	"chinnathal": "சின்னத்தாள்",
	"pavayee": "பாவாயி",
	"pavai": "பாவை",
	"sathyamurthi": "சத்தியமூர்த்தி",
	"sathyamurthy": "சத்தியமூர்த்தி",
	"thillaikkarasu": "தில்லைக்கரசு",
	"thillai": "தில்லை",
	"thillaiyammal": "தில்லையம்மாள்",
	"vishwanath": "விஸ்வநாத்",
	"viswanath": "விஸ்வநாத்",
	"yoganathan": "யோகநாதன்",
	"gurunatham": "குருநாதம்",
	"paranjothi": "பரஞ்ஜோதி",
	"paranjyothi": "பரஞ்ஜோதி",
	"dheenadayalan": "தீனதயாளன்",
	"deenadayalan": "தீனதயாளன்",
	"dhinadayalan": "தீனதயாளன்",
	"thiripurasundari": "திரிபுரசுந்தரி",
	"balambigai": "பாலாம்பிகை",
	"balambika": "பாலாம்பிகா",
	"ambigai": "அம்பிகை",
	"ambika": "அம்பிகா",
	"kandhavel": "கந்தவேல்",
	"kandavel": "கந்தவேல்",
	"ponnuvel": "பொன்னுவேல்",
	"periyathurai": "பெரியத்துரை",
	"periyadurai": "பெரியத்துரை",
	"vellaichamy": "வெள்ளைச்சாமி",
	"vellaisamy": "வெள்ளைசாமி",
	"ramalakshmanan": "ராமலட்சுமணன்",
	"sengodagounder": "செங்கோடகவுண்டர்",
	"sengoda": "செங்கோட",
	"sengodan": "செங்கோடன்",
	"kaliyanur": "காளியனூர்",
	"vennaimalai": "வெண்ணைமலை",
	"kondichettipatti": "கொண்டிச்செட்டிப்பட்டி",
	"alavaipatti": "அலவாய்ப்பட்டி",
	"velagoundampatti": "வேலகவுண்டம்பட்டி",
	"kalyanipuram": "கல்யாணிபுரம்",
	"andagalur": "ஆண்டகளூர்",
	"perumapalayam": "பெருமாபாளையம்",
	"jangamanaickenpatti": "ஜங்கமநாயக்கன்பட்டி",
	"thoppapatti": "தொப்பப்பட்டி",
	"ammankovil": "அம்மன்கோவில்",
	"amman": "அம்மன்",
	"pillayarkovil": "பிள்ளையார்கோவில்",
	"perumalkovil": "பெருமாள்கோவில்",
	"kovilpatti": "கோவில்பட்டி",
	"kovilur": "கோவிலூர்",
	"thengalpalayam": "தெங்கல்பாளையம்",
	"puliyampalayam": "புளியம்பாளையம்",
	"muthukalipatti": "முத்துக்காளிப்பட்டி",
	"thottakuruchi": "தொட்டக்குறிச்சி",
	"vadakkupatti": "வடக்குப்பட்டி",
	"government": "அரசு",
	"govt": "அரசு",
	"bypass": "பைபாஸ்",
	"byepass": "பைபாஸ்",
	"flat": "பிளாட்",
	"floor": "தளம்",
	"apartment": "அடுக்குமாடி",
	"apartments": "அடுக்குமாடி",
	"building": "கட்டிடம்",
	"shop": "கடை",
	"stores": "ஸ்டோர்ஸ்",
	"tower": "டவர்",
	"residency": "ரெசிடென்சி",
	"avenue": "அவென்யூ",
	"circle": "வட்டம்",
	"signal": "சிக்னல்",
	"bridge": "பாலம்",
	"river": "ஆறு",
	"lake": "ஏரி",
	"tank": "குளம்",
	"mill": "மில்",
	"mills": "மில்ஸ்",
	"company": "கம்பெனி",
	"factory": "தொழிற்சாலை",
	"office": "அலுவலகம்",
	"bank": "வங்கி",
	"college": "கல்லூரி",
	"panchayat": "பஞ்சாயத்து",
	"panchayath": "பஞ்சாயத்து",
	"revenue": "வருவாய்",
	"corporation": "மாநகராட்சி",
	"municipality": "நகராட்சி",
	"pin": "PIN",
	"pincode": "PIN",
	"phone": "தொலைபேசி",
	"mobile": "கைபேசி",
	"cell": "கைபேசி",
	"mecheri": "மேச்சேரி",
	"karaikudi": "காரைக்குடி",
	"krishnagiri": "கிருஷ்ணகிரி",
	"kaveripattinam": "காவேரிப்பட்டினம்",
	"keeranur": "கீரனூர்",
	"pothanur": "பொத்தனூர்",
	"vadugam": "வடுகம்",
	"ammapalayam": "அம்மாபாளையம்",
	"veppilaipatti": "வெப்பிலைப்பட்டி",
	"odapalli": "ஓடப்பள்ளி",
	"kurumbapatti": "குறும்பப்பட்டி",
	"malayampalayam": "மலையம்பாளையம்",
	"thokkavadi": "தொக்கவாடி",
	"erumaipatti": "எருமைப்பட்டி",
	"puduppatti": "புதுப்பட்டி",
	"mavureddipatti": "மாவுரெட்டிப்பட்டி",
	"singilipatti": "சிங்கிலிப்பட்டி",
	"kolakkudi": "கோலக்குடி",
	"kanakkampalayam": "கனக்கம்பாளையம்",
	"semmedu": "செம்மேடு",
	"kallakurichi": "கள்ளக்குறிச்சி",
	"palappatti": "பாலப்பட்டி",
	"chettipatti": "செட்டிப்பட்டி",
	"pillanallur": "பிள்ளாநல்லூர்",
	"singaram": "சிங்காரம்",
	"singaravelu": "சிங்காரவேலு",
	"singaravel": "சிங்காரவேல்",
	"satheesh": "சதீஷ்",
	"sneha": "சினேகா",
	"shyam": "ஷ்யாம்",
	"bro": "பிரிவு",
	"police": "காவல்",
	"plot": "மனை",
	"park": "பூங்கா",
	"saradha": "சாரதா",
	"pvt": "பிரைவேட்",
	"ltd": "லிமிடெட்",
	"private": "பிரைவேட்",
	"limited": "லிமிடெட்",
	"palaniappn": "பழனியப்பன்",
	"singalanthapurm": "சிங்காளந்தபுரம்",
	"periyakkal": "பெரியக்காள்",
	"chinnakkal": "சின்னக்காள்",
	"pongiyannan": "பொங்கியண்ணன்",
	"pongianna": "பொங்கியண்ணா",
	"pongiannan": "பொங்கியண்ணன்",
	"ammasai": "அம்மாசை",
	"valliammai": "வள்ளியம்மை",
	"poovathal": "பூவாத்தாள்",
	"selvaganapathy": "செல்வகணபதி",
	"ganapathi": "கணபதி",
	"ganapathy": "கணபதி",
	"vinayagam": "விநாயகம்",
	"vinayagamoorthy": "விநாயகமூர்த்தி",
	"vinayaga": "விநாயக",
	"karuppanan": "கருப்பணன்",
	"pavadai": "பாவாடை",
	"pavadaisamy": "பாவாடைசாமி",
	"rajeshkanna": "ராஜேஷ்கண்ணா",
	"kanna": "கண்ணா",
	"kolandasamy": "குழந்தைசாமி",
	"kolanthasamy": "குழந்தைசாமி",
	"ilamaran": "இளமாறன்",
	"ilamparithi": "இளம்பரிதி",
	"elamparithi": "இளம்பரிதி",
	"elavarasi": "இளவரசி",
	"priyadarshini": "பிரியதர்ஷினி",
	"sivakolundu": "சிவக்கொழுந்து",
	"sivakozhundu": "சிவக்கொழுந்து",
	"boopalan": "பூபாலன்",
	"bhoopalan": "பூபாலன்",
	"boopathy": "பூபதி",
	"nithyananthan": "நித்யானந்தன்",
	"nithyanandam": "நித்யானந்தம்",
	"muthaiyammal": "முத்தையம்மாள்",
	"kandaiyammal": "கந்தையம்மாள்",
	"periyanayagi": "பெரியநாயகி",
	"sengeniammal": "செங்கேணியம்மாள்",
	"thulasiammal": "துளசியம்மாள்",
	"muthayee": "முத்தாயி",
	"sellayee": "செல்லாயி",
	"chinnayee": "சின்னாயி",
	"rangayee": "ரங்காயி",
	"kuppayee": "குப்பாயி",
	"thangayee": "தங்காயி",
	"pappayi": "பாப்பாயி",
	"rakkayi": "ராக்காயி",
	"mariyayi": "மாரியாயி",
	"anand": "ஆனந்த்",
	"anandan": "ஆனந்தன்",
	"anandh": "ஆனந்த்",
	"anandhan": "ஆனந்தன்",
	"arumugam": "ஆறுமுகம்",
	"arumugham": "ஆறுமுகம்",
	"annadurai": "அண்ணாதுரை",
	"ashok": "அசோக்",
	"asokan": "அசோகன்",
	"ashokan": "அசோகன்",
	"ajit": "அஜித்",
	"ajith": "அஜித்",
	"arun": "அருண்",
	"anbu": "அன்பு",
	"anbalagan": "அன்பழகன்",
	"anbazhagan": "அன்பழகன்",
	"anbarasan": "அன்பரசன்",
	"anbarasu": "அன்பரசு",
	"ayyappan": "ஐயப்பன்",
	"iyyappan": "ஐயப்பன்",
	"iyappan": "ஐயப்பன்",
	"alagu": "அழகு",
	"azhagu": "அழகு",
	"alagar": "அழகர்",
	"azhagar": "அழகர்",
	"alagarsamy": "அழகர்சாமி",
	"alagesan": "அழகேசன்",
	"azhagesan": "அழகேசன்",
	"arul": "அருள்",
	"arulsamy": "அருள்சாமி",
	"arumugasamy": "ஆறுமுகசாமி",
	"aswin": "அஸ்வின்",
	"ashwin": "அஸ்வின்",
	"annamalai": "அண்ணாமலை",
	"annadhurai": "அண்ணாதுரை",
	"arjun": "அர்ஜுன்",
	"arjunan": "அர்ஜுனன்",
	"aravind": "அரவிந்த்",
	"aravindan": "அரவிந்தன்",
	"ayyanar": "அய்யனார்",
	"ayyasamy": "அய்யாசாமி",
	"ayyavu": "அய்யாவு",
	"annan": "அண்ணன்",
	"appu": "அப்பு",
	"adhi": "ஆதி",
	"aadhi": "ஆதி",
	"adhithya": "ஆதித்யா",
	"aditya": "ஆதித்யா",
	"akash": "ஆகாஷ்",
	"ananth": "அனந்த்",
	"anantha": "அனந்த",
	"ananthan": "அனந்தன்",
	"angamuthu": "அங்கமுத்து",
	"arasu": "அரசு",
	"arasan": "அரசன்",
	"andi": "ஆண்டி",
	"andiappan": "ஆண்டியப்பன்",
	"anjalai": "அஞ்சலை",
	"balaji": "பாலாஜி",
	"balu": "பாலு",
	"babu": "பாபு",
	"balan": "பாலன்",
	"bala": "பாலா",
	"balasubramani": "பாலசுப்பிரமணி",
	"balasubramaniam": "பாலசுப்பிரமணியம்",
	"balasubramanian": "பாலசுப்பிரமணியன்",
	"balakrishnan": "பாலகிருஷ்ணன்",
	"balamurugan": "பாலமுருகன்",
	"balamurali": "பாலமுரளி",
	"baskar": "பாஸ்கர்",
	"bhaskar": "பாஸ்கர்",
	"baskaran": "பாஸ்கரன்",
	"bhaskaran": "பாஸ்கரன்",
	"bharath": "பரத்",
	"bharathi": "பாரதி",
	"bharathiyar": "பாரதியார்",
	"bharathiar": "பாரதியார்",
	"boopathi": "பூபதி",
	"boopathy": "பூபதி",
	"bhoopathi": "பூபதி",
	"boominathan": "பூமிநாதன்",
	"bose": "போஸ்",
	"chandran": "சந்திரன்",
	"chandra": "சந்திரா",
	"chandrasekar": "சந்திரசேகர்",
	"chandrasekaran": "சந்திரசேகரன்",
	"chandrasekhar": "சந்திரசேகர்",
	"chellam": "செல்லம்",
	"chelladurai": "செல்லத்துரை",
	"chellappan": "செல்லப்பன்",
	"chellamuthu": "செல்லமுத்து",
	"chinnasamy": "சின்னசாமி",
	"chinnadurai": "சின்னத்துரை",
	"chinnathambi": "சின்னத்தம்பி",
	"chinnappan": "சின்னப்பன்",
	"chinna": "சின்ன",
	"chinnaiyan": "சின்னையன்",
	"chinnu": "சின்னு",
	"chitravel": "சித்திரவேல்",
	"chithiravel": "சித்திரவேல்",
	"dhanapal": "தனபால்",
	"dhanabal": "தனபால்",
	"dhanapalan": "தனபாலன்",
	"dhana": "தனா",
	"dhanasekaran": "தனசேகரன்",
	"dhanasekar": "தனசேகர்",
	"dhanaraj": "தனராஜ்",
	"dhandapani": "தண்டபாணி",
	"dinesh": "தினேஷ்",
	"dhinesh": "தினேஷ்",
	"durai": "துரை",
	"duraisamy": "துரைசாமி",
	"duraiswamy": "துரைசாமி",
	"durairaj": "துரைராஜ்",
	"duraipandi": "துரைப்பாண்டி",
	"duraikannu": "துரைக்கண்ணு",
	"devaraj": "தேவராஜ்",
	"devarajan": "தேவராஜன்",
	"devan": "தேவன்",
	"deva": "தேவா",
	"devendran": "தேவேந்திரன்",
	"dhas": "தாஸ்",
	"das": "தாஸ்",
	"dass": "தாஸ்",
	"damodaran": "தாமோதரன்",
	"dharman": "தர்மன்",
	"dharma": "தர்மா",
	"dharmalingam": "தர்மலிங்கம்",
	"dharmaraj": "தர்மராஜ்",
	"deepak": "தீபக்",
	"dhinakaran": "தினகரன்",
	"dinakaran": "தினகரன்",
	"elango": "இளங்கோ",
	"ilango": "இளங்கோ",
	"elangovan": "இளங்கோவன்",
	"ilangovan": "இளங்கோவன்",
	"elumalai": "ஏழுமலை",
	"ezhumalai": "ஏழுமலை",
	"eswaran": "ஈஸ்வரன்",
	"easwaran": "ஈஸ்வரன்",
	"ekambaram": "ஏகாம்பரம்",
	"ellappan": "எல்லப்பன்",
	"ezhil": "எழில்",
	"ezhilarasan": "எழிலரசன்",
	"elavarasan": "இளவரசன்",
	"ilavarasan": "இளவரசன்",
	"ilayaraja": "இளையராஜா",
	"ilaiyaraja": "இளையராஜா",
	"ilamurugu": "இளமுருகு",
	"ganesan": "கணேசன்",
	"ganesh": "கணேஷ்",
	"ganeshan": "கணேசன்",
	"gandhi": "காந்தி",
	"gopal": "கோபால்",
	"gopalan": "கோபாலன்",
	"gopalakrishnan": "கோபாலகிருஷ்ணன்",
	"gopalsamy": "கோபால்சாமி",
	"gopinath": "கோபிநாத்",
	"govindan": "கோவிந்தன்",
	"govindasamy": "கோவிந்தசாமி",
	"govindaraj": "கோவிந்தராஜ்",
	"govindarajan": "கோவிந்தராஜன்",
	"govindaraju": "கோவிந்தராஜு",
	"gurusamy": "குருசாமி",
	"guruswamy": "குருசாமி",
	"gurunathan": "குருநாதன்",
	"gunasekaran": "குணசேகரன்",
	"gunasekar": "குணசேகர்",
	"guna": "குணா",
	"gnanam": "ஞானம்",
	"gnanasekaran": "ஞானசேகரன்",
	"gnanavel": "ஞானவேல்",
	"gnanaprakasam": "ஞானபிரகாசம்",
	"gokul": "கோகுல்",
	"gowtham": "கௌதம்",
	"gautham": "கௌதம்",
	"gopu": "கோபு",
	"gunaseelan": "குணசீலன்",
	"hari": "ஹரி",
	"harish": "ஹரிஷ்",
	"harikrishnan": "ஹரிகிருஷ்ணன்",
	"hariharan": "ஹரிஹரன்",
	"jayaraman": "ஜெயராமன்",
	"jeyaraman": "ஜெயராமன்",
	"jaya": "ஜெயா",
	"jeya": "ஜெயா",
	"jayakumar": "ஜெயக்குமார்",
	"jeyakumar": "ஜெயக்குமார்",
	"jayapal": "ஜெயபால்",
	"jeyapal": "ஜெயபால்",
	"jayaprakash": "ஜெயபிரகாஷ்",
	"jothi": "ஜோதி",
	"jyothi": "ஜோதி",
	"jagadeesh": "ஜெகதீஷ்",
	"jagadeesan": "ஜெகதீசன்",
	"jagan": "ஜெகன்",
	"jagannathan": "ஜெகந்நாதன்",
	"jeeva": "ஜீவா",
	"jeevanantham": "ஜீவானந்தம்",
	"jeevanandham": "ஜீவானந்தம்",
	"jeyaraj": "ஜெயராஜ்",
	"jayaraj": "ஜெயராஜ்",
	"john": "ஜான்",
	"joseph": "ஜோசப்",
	"jancy": "ஜான்சி",
	"janaki": "ஜானகி",
	"jayanthi": "ஜெயந்தி",
	"jeyanthi": "ஜெயந்தி",
	"jothimani": "ஜோதிமணி",
	"jayabal": "ஜெயபால்",
	"jayavel": "ஜெயவேல்",
	"jeyavel": "ஜெயவேல்",
	"jayabalan": "ஜெயபாலன்",
	"jayashree": "ஜெயஸ்ரீ",
	"jayasri": "ஜெயஸ்ரீ",
	"jayalakshmi": "ஜெயலட்சுமி",
	"jeyalakshmi": "ஜெயலட்சுமி",
	"kathirvel": "கதிர்வேல்",
	"kathirvelu": "கதிர்வேலு",
	"kathir": "கதிர்",
	"kathiresan": "கதிரேசன்",
	"kathiravan": "கதிரவன்",
	"kandasamy": "கந்தசாமி",
	"kandhasamy": "கந்தசாமி",
	"kandan": "கந்தன்",
	"kandhan": "கந்தன்",
	"kandavel": "கந்தவேல்",
	"kannan": "கண்ணன்",
	"kannadasan": "கண்ணதாசன்",
	"kannaiyan": "கண்ணையன்",
	"kannu": "கண்ணு",
	"kannusamy": "கண்ணுசாமி",
	"karthik": "கார்த்திக்",
	"karthick": "கார்த்திக்",
	"karthi": "கார்த்தி",
	"karthikeyan": "கார்த்திகேயன்",
	"kamal": "கமல்",
	"kamalasan": "கமலஹாசன்",
	"kamaraj": "காமராஜ்",
	"kamarajar": "காமராஜர்",
	"kala": "கலா",
	"kalai": "கலை",
	"kalaiselvan": "கலைச்செல்வன்",
	"kalaiselvi": "கலைச்செல்வி",
	"kalaivani": "கலைவாணி",
	"kalaiarasi": "கலையரசி",
	"kalaiyarasi": "கலையரசி",
	"kalaiarasan": "கலையரசன்",
	"kalaimani": "கலைமணி",
	"kalaichelvan": "கலைச்செல்வன்",
	"kumar": "குமார்",
	"kumaran": "குமரன்",
	"kumarasamy": "குமாரசாமி",
	"kumaravel": "குமரவேல்",
	"kumaresan": "குமரேசன்",
	"kumari": "குமாரி",
	"krishnan": "கிருஷ்ணன்",
	"krishna": "கிருஷ்ணா",
	"krishnamoorthy": "கிருஷ்ணமூர்த்தி",
	"krishnamurthy": "கிருஷ்ணமூர்த்தி",
	"krishnasamy": "கிருஷ்ணசாமி",
	"krishnaveni": "கிருஷ்ணவேணி",
	"krishnakumar": "கிருஷ்ணகுமார்",
	"kousalya": "கௌசல்யா",
	"gowsalya": "கௌசல்யா",
	"kulandaivel": "குழந்தைவேல்",
	"kulanthaivel": "குழந்தைவேல்",
	"kulandaisamy": "குழந்தைசாமி",
	"kokila": "கோகிலா",
	"kathirvelan": "கதிர்வேலன்",
	"kaliyappan": "காளியப்பன்",
	"kaliappan": "காளியப்பன்",
	"kalimuthu": "காளிமுத்து",
	"kaliyamoorthy": "காளியமூர்த்தி",
	"kali": "காளி",
	"kalidas": "காளிதாஸ்",
	"kaliyaperumal": "காளியபெருமாள்",
	"kaliaperumal": "காளியபெருமாள்",
	"kanagaraj": "கனகராஜ்",
	"kanagarajan": "கனகராஜன்",
	"kanaga": "கனக",
	"kanagavel": "கனகவேல்",
	"karuppusamy": "கருப்புசாமி",
	"karuppasamy": "கருப்பசாமி",
	"karuppan": "கருப்பன்",
	"karuppannan": "கருப்பண்ணன்",
	"karuppaiah": "கருப்பையா",
	"karuppiah": "கருப்பையா",
	"karunanidhi": "கருணாநிதி",
	"karunakaran": "கருணாகரன்",
	"karuna": "கருணா",
	"kesavan": "கேசவன்",
	"kolanji": "கொலஞ்சி",
	"kolandaivel": "குழந்தைவேல்",
	"kuppusamy": "குப்புசாமி",
	"kuppuswamy": "குப்புசாமி",
	"kuppan": "குப்பன்",
	"kuppu": "குப்பு",
	"kuppuraj": "குப்புராஜ்",
	"kanthasamy": "கந்தசாமி",
	"kannappan": "கண்ணப்பன்",
	"kanniyappan": "கன்னியப்பன்",
	"kasi": "காசி",
	"kasinathan": "காசிநாதன்",
	"kasiviswanathan": "காசிவிஸ்வநாதன்",
	"kathamuthu": "காத்தமுத்து",
	"kathan": "காத்தான்",
	"kavin": "கவின்",
	"kiran": "கிரண்",
	"kishore": "கிஷோர்",
	"kumaraguru": "குமரகுரு",
	"kuppuraju": "குப்புராஜு",
	"kandaswamy": "கந்தசாமி",
	"lakshmanan": "லட்சுமணன்",
	"lakshman": "லட்சுமணன்",
	"lingam": "லிங்கம்",
	"lingesan": "லிங்கேசன்",
	"lingeswaran": "லிங்கேஸ்வரன்",
	"loganathan": "லோகநாதன்",
	"logeswaran": "லோகேஸ்வரன்",
	"logesh": "லோகேஷ்",
	"lokesh": "லோகேஷ்",
	"logu": "லோகு",
	"mani": "மணி",
	"manikandan": "மணிகண்டன்",
	"manikanda": "மணிகண்ட",
	"manimaran": "மணிமாறன்",
	"manivannan": "மணிவண்ணன்",
	"manivel": "மணிவேல்",
	"manivasagam": "மணிவாசகம்",
	"manimegalai": "மணிமேகலை",
	"manimekalai": "மணிமேகலை",
	"murugan": "முருகன்",
	"murugesan": "முருகேசன்",
	"murugavel": "முருகவேல்",
	"murugaiyan": "முருகையன்",
	"murugaiah": "முருகையா",
	"murugaiya": "முருகையா",
	"murugu": "முருகு",
	"muruganantham": "முருகானந்தம்",
	"muthu": "முத்து",
	"muthusamy": "முத்துசாமி",
	"muthuswamy": "முத்துசாமி",
	"muthukumar": "முத்துக்குமார்",
	"muthukumaran": "முத்துக்குமரன்",
	"muthuvel": "முத்துவேல்",
	"muthaiyan": "முத்தையன்",
	"muthaiah": "முத்தையா",
	"muthiah": "முத்தையா",
	"muthukrishnan": "முத்துகிருஷ்ணன்",
	"muthupandi": "முத்துப்பாண்டி",
	"muthulakshmi": "முத்துலட்சுமி",
	"muthumani": "முத்துமணி",
	"muthumari": "முத்துமாரி",
	"muthuraj": "முத்துராஜ்",
	"muthuraman": "முத்துராமன்",
	"muthuselvi": "முத்துச்செல்வி",
	"muthulingam": "முத்துலிங்கம்",
	"madhan": "மதன்",
	"madhavan": "மாதவன்",
	"mahesh": "மகேஷ்",
	"maheswaran": "மகேஸ்வரன்",
	"maheshwaran": "மகேஸ்வரன்",
	"maheswari": "மகேஸ்வரி",
	"maheshwari": "மகேஸ்வரி",
	"mahendran": "மகேந்திரன்",
	"mahalingam": "மகாலிங்கம்",
	"mahalakshmi": "மகாலட்சுமி",
	"mahadevan": "மகாதேவன்",
	"maha": "மகா",
	"mathi": "மதி",
	"mathivanan": "மதிவாணன்",
	"mathiyalagan": "மதியழகன்",
	"mathiazhagan": "மதியழகன்",
	"mathan": "மதன்",
	"mohan": "மோகன்",
	"mohanraj": "மோகன்ராஜ்",
	"mohana": "மோகனா",
	"mohanasundaram": "மோகனசுந்தரம்",
	"mohankumar": "மோகன்குமார்",
	"mohanavel": "மோகனவேல்",
	"manoharan": "மனோகரன்",
	"manohar": "மனோகர்",
	"mari": "மாரி",
	"mariappan": "மாரியப்பன்",
	"marimuthu": "மாரிமுத்து",
	"mariyappan": "மாரியப்பன்",
	"mariyammal": "மாரியம்மாள்",
	"mariammal": "மாரியம்மாள்",
	"marudhu": "மருது",
	"maruthu": "மருது",
	"maruthamuthu": "மருதமுத்து",
	"marudhamuthu": "மருதமுத்து",
	"maran": "மாறன்",
	"mayilsamy": "மயில்சாமி",
	"mayil": "மயில்",
	"mayilvaganan": "மயில்வாகனன்",
	"mayilvahanan": "மயில்வாகனன்",
	"minnal": "மின்னல்",
	"mookan": "மூக்கன்",
	"mookkan": "மூக்கன்",
	"moorthy": "மூர்த்தி",
	"murthy": "மூர்த்தி",
	"moorthi": "மூர்த்தி",
	"murali": "முரளி",
	"muralidharan": "முரளிதரன்",
	"muniyappan": "முனியப்பன்",
	"muniappan": "முனியப்பன்",
	"muniyandi": "முனியாண்டி",
	"muniandi": "முனியாண்டி",
	"muni": "முனி",
	"munusamy": "முனுசாமி",
	"munuswamy": "முனுசாமி",
	"madasamy": "மாடசாமி",
	"madhesh": "மதேஷ்",
	"mathesh": "மதேஷ்",
	"manjunath": "மஞ்சுநாத்",
	"natarajan": "நடராஜன்",
	"nataraj": "நடராஜ்",
	"natesan": "நடேசன்",
	"nathan": "நாதன்",
	"narayanan": "நாராயணன்",
	"narayanasamy": "நாராயணசாமி",
	"narayanaswamy": "நாராயணசாமி",
	"narayana": "நாராயணா",
	"nithya": "நித்யா",
	"nithiya": "நித்யா",
	"naveen": "நவீன்",
	"nagaraj": "நாகராஜ்",
	"nagarajan": "நாகராஜன்",
	"nagaraju": "நாகராஜு",
	"naga": "நாக",
	"nag": "நாக்",
	"nagappan": "நாகப்பன்",
	"nagamani": "நாகமணி",
	"nagammal": "நாகம்மாள்",
	"nagendran": "நாகேந்திரன்",
	"nagarathinam": "நாகரத்தினம்",
	"nallusamy": "நல்லுசாமி",
	"nalluswamy": "நல்லுசாமி",
	"nallasamy": "நல்லசாமி",
	"nallappan": "நல்லப்பன்",
	"nallathambi": "நல்லத்தம்பி",
	"nandhakumar": "நந்தகுமார்",
	"nandakumar": "நந்தகுமார்",
	"nandhini": "நந்தினி",
	"nandini": "நந்தினி",
	"nandhan": "நந்தன்",
	"nanjappan": "நஞ்சப்பன்",
	"nanjundan": "நஞ்சுண்டன்",
	"neelakandan": "நீலகண்டன்",
	"neelamegam": "நீலமேகம்",
	"nesamani": "நேசமணி",
	"nirmal": "நிர்மல்",
	"nithish": "நிதிஷ்",
	"palanisamy": "பழனிசாமி",
	"palaniswamy": "பழனிசாமி",
	"palani": "பழனி",
	"pazhani": "பழனி",
	"palanivel": "பழனிவேல்",
	"palanivelu": "பழனிவேலு",
	"palanikumar": "பழனிக்குமார்",
	"palanimuthu": "பழனிமுத்து",
	"palaniammal": "பழனியம்மாள்",
	"palaniyammal": "பழனியம்மாள்",
	"palanichamy": "பழனிச்சாமி",
	"palaniandi": "பழனியாண்டி",
	"palaniyandi": "பழனியாண்டி",
	"prakash": "பிரகாஷ்",
	"prakasam": "பிரகாசம்",
	"prabhu": "பிரபு",
	"prabu": "பிரபு",
	"prabhakaran": "பிரபாகரன்",
	"prabakaran": "பிரபாகரன்",
	"pradeep": "பிரதீப்",
	"prasanth": "பிரசாந்த்",
	"prasath": "பிரசாத்",
	"prasad": "பிரசாத்",
	"pandian": "பாண்டியன்",
	"pandiyan": "பாண்டியன்",
	"pandi": "பாண்டி",
	"pandidurai": "பாண்டித்துரை",
	"pandiarajan": "பாண்டியராஜன்",
	"pandiyarajan": "பாண்டியராஜன்",
	"periyasamy": "பெரியசாமி",
	"periasamy": "பெரியசாமி",
	"periyannan": "பெரியண்ணன்",
	"periyakaruppan": "பெரியகருப்பன்",
	"periya": "பெரிய",
	"ponnusamy": "பொன்னுசாமி",
	"ponnuswamy": "பொன்னுசாமி",
	"ponnan": "பொன்னன்",
	"ponnu": "பொன்னு",
	"ponnusami": "பொன்னுசாமி",
	"ponnambalam": "பொன்னம்பலம்",
	"ponraj": "பொன்ராஜ்",
	"ponnurangam": "பொன்னுரங்கம்",
	"ponmudi": "பொன்முடி",
	"paul": "பால்",
	"perumal": "பெருமாள்",
	"perumalsamy": "பெருமாள்சாமி",
	"perumalu": "பெருமாளு",
	"pachaiyappan": "பச்சையப்பன்",
	"pachaiappan": "பச்சையப்பன்",
	"pachaimuthu": "பச்சைமுத்து",
	"pachaiyammal": "பச்சையம்மாள்",
	"pachaiammal": "பச்சையம்மாள்",
	"pachai": "பச்சை",
	"palanikumaran": "பழனிக்குமரன்",
	"parthiban": "பார்த்திபன்",
	"parthipan": "பார்த்திபன்",
	"parthasarathy": "பார்த்தசாரதி",
	"pattusamy": "பட்டுசாமி",
	"pattu": "பட்டு",
	"paramasivam": "பரமசிவம்",
	"paramasivan": "பரமசிவன்",
	"paramanandham": "பரமானந்தம்",
	"parameswaran": "பரமேஸ்வரன்",
	"parameshwaran": "பரமேஸ்வரன்",
	"parameswari": "பரமேஸ்வரி",
	"pavithra": "பவித்ரா",
	"pichaimuthu": "பிச்சைமுத்து",
	"pichai": "பிச்சை",
	"pitchai": "பிச்சை",
	"pitchaimuthu": "பிச்சைமுத்து",
	"poomalai": "பூமாலை",
	"poovarasan": "பூவரசன்",
	"poovan": "பூவன்",
	"poovai": "பூவை",
	"pugazhendhi": "புகழேந்தி",
	"pugalendhi": "புகழேந்தி",
	"punniyamoorthy": "புண்ணியமூர்த்தி",
	"periyathambi": "பெரியத்தம்பி",
	"palanikumar": "பழனிக்குமார்",
	"raghu": "ரகு",
	"rahul": "ராகுல்",
	"raj": "ராஜ்",
	"raja": "ராஜா",
	"rajan": "ராஜன்",
	"rajasekaran": "ராஜசேகரன்",
	"rajasekar": "ராஜசேகர்",
	"rajendran": "ராஜேந்திரன்",
	"rajendiran": "ராஜேந்திரன்",
	"rajesh": "ராஜேஷ்",
	"raju": "ராஜு",
	"ram": "ராம்",
	"raman": "ராமன்",
	"rama": "ராமா",
	"ramasamy": "ராமசாமி",
	"ramaswamy": "ராமசாமி",
	"ramesh": "ரமேஷ்",
	"ramachandran": "ராமச்சந்திரன்",
	"ramakrishnan": "ராமகிருஷ்ணன்",
	"ramalingam": "ராமலிங்கம்",
	"ramamoorthy": "ராமமூர்த்தி",
	"ramamurthy": "ராமமூர்த்தி",
	"ramu": "ராமு",
	"ramar": "ராமர்",
	"ramaiah": "ராமையா",
	"ramaiya": "ராமையா",
	"ramya": "ரம்யா",
	"ranganathan": "ரங்கநாதன்",
	"rangasamy": "ரங்கசாமி",
	"rangaswamy": "ரங்கசாமி",
	"rengasamy": "ரெங்கசாமி",
	"rengaswamy": "ரெங்கசாமி",
	"ranga": "ரங்கா",
	"rangan": "ரங்கன்",
	"rengan": "ரெங்கன்",
	"ravi": "ரவி",
	"ravichandran": "ரவிச்சந்திரன்",
	"ravikumar": "ரவிக்குமார்",
	"ravindran": "ரவீந்திரன்",
	"raveendran": "ரவீந்திரன்",
	"radha": "ராதா",
	"radhakrishnan": "ராதாகிருஷ்ணன்",
	"rajalakshmi": "ராஜலட்சுமி",
	"rajeswari": "ராஜேஸ்வரி",
	"rajeshwari": "ராஜேஸ்வரி",
	"rathinam": "ரத்தினம்",
	"rathinasamy": "ரத்தினசாமி",
	"rathinavel": "ரத்தினவேல்",
	"rathina": "ரத்தின",
	"rajmohan": "ராஜ்மோகன்",
	"rajkumar": "ராஜ்குமார்",
	"rajkumari": "ராஜ்குமாரி",
	"rajagopal": "ராஜகோபால்",
	"rajamani": "ராஜமணி",
	"rajamanickam": "ராஜமாணிக்கம்",
	"rajangam": "ராஜாங்கம்",
	"rajaram": "ராஜாராம்",
	"rajaraman": "ராஜாராமன்",
	"rajapandi": "ராஜபாண்டி",
	"rasu": "ராசு",
	"rasappan": "ராசப்பன்",
	"rasathi": "ராசாத்தி",
	"rathi": "ரதி",
	"rajini": "ரஜினி",
	"rajinikanth": "ரஜினிகாந்த்",
	"rani": "ராணி",
	"rahman": "ரகுமான்",
	"rahim": "ரகீம்",
	"sabari": "சபரி",
	"sachin": "சச்சின்",
	"sakthivel": "சக்திவேல்",
	"sakthi": "சக்தி",
	"shakthi": "சக்தி",
	"sakthikumar": "சக்திக்குமார்",
	"samy": "சாமி",
	"sami": "சாமி",
	"swamy": "சாமி",
	"swami": "சுவாமி",
	"swaminathan": "சுவாமிநாதன்",
	"sampath": "சம்பத்",
	"sampathkumar": "சம்பத்குமார்",
	"sankar": "சங்கர்",
	"shankar": "சங்கர்",
	"sankaran": "சங்கரன்",
	"shankaran": "சங்கரன்",
	"santhosh": "சந்தோஷ்",
	"santhoshkumar": "சந்தோஷ்குமார்",
	"saravanan": "சரவணன்",
	"saravana": "சரவணா",
	"saravanakumar": "சரவணக்குமார்",
	"sasi": "சசி",
	"sasikumar": "சசிக்குமார்",
	"sasikala": "சசிகலா",
	"sathish": "சதீஷ்",
	"satish": "சதீஷ்",
	"sathishkumar": "சதீஷ்குமார்",
	"sathya": "சத்யா",
	"sathiya": "சத்யா",
	"sathyamoorthy": "சத்தியமூர்த்தி",
	"sathiyamoorthy": "சத்தியமூர்த்தி",
	"sathyaraj": "சத்யராஜ்",
	"sathiyaraj": "சத்யராஜ்",
	"sathyanarayanan": "சத்யநாராயணன்",
	"sathyaseelan": "சத்தியசீலன்",
	"sekar": "சேகர்",
	"sekaran": "சேகரன்",
	"sekhar": "சேகர்",
	"selvam": "செல்வம்",
	"selvan": "செல்வன்",
	"selvaraj": "செல்வராஜ்",
	"selvarajan": "செல்வராஜன்",
	"selvaraju": "செல்வராஜு",
	"selvakumar": "செல்வக்குமார்",
	"selvamani": "செல்வமணி",
	"selvi": "செல்வி",
	"selvy": "செல்வி",
	"selvarani": "செல்வராணி",
	"selvanayagam": "செல்வநாயகம்",
	"selvamuthu": "செல்வமுத்து",
	"selvakumari": "செல்வக்குமாரி",
	"senthil": "செந்தில்",
	"senthilkumar": "செந்தில்குமார்",
	"senthilvel": "செந்தில்வேல்",
	"senthilnathan": "செந்தில்நாதன்",
	"senthilvelan": "செந்தில்வேலன்",
	"senthamarai": "செந்தாமரை",
	"sengodan": "செங்கோடன்",
	"sengottaiyan": "செங்கோட்டையன்",
	"sengottuvel": "செங்கோட்டுவேல்",
	"sengottuvelu": "செங்கோட்டுவேலு",
	"sengottayan": "செங்கோட்டையன்",
	"sellappan": "செல்லப்பன்",
	"sellamuthu": "செல்லமுத்து",
	"sellam": "செல்லம்",
	"sellammal": "செல்லம்மாள்",
	"sellathurai": "செல்லத்துரை",
	"sellathambi": "செல்லத்தம்பி",
	"sellaiyan": "செல்லையன்",
	"sellakumar": "செல்லக்குமார்",
	"sennimalai": "சென்னிமலை",
	"shanmugam": "சண்முகம்",
	"shanmugham": "சண்முகம்",
	"sanmugam": "சண்முகம்",
	"shanmugavel": "சண்முகவேல்",
	"shanmugasundaram": "சண்முகசுந்தரம்",
	"shanmuga": "சண்முக",
	"shanmugavadivu": "சண்முகவடிவு",
	"shanmugapriya": "சண்முகப்பிரியா",
	"siva": "சிவா",
	"shiva": "சிவா",
	"sivakumar": "சிவகுமார்",
	"sivaraman": "சிவராமன்",
	"sivaraj": "சிவராஜ்",
	"sivasamy": "சிவசாமி",
	"sivasankar": "சிவசங்கர்",
	"sivasankaran": "சிவசங்கரன்",
	"sivalingam": "சிவலிங்கம்",
	"sivanandham": "சிவானந்தம்",
	"sivanandam": "சிவானந்தம்",
	"sivagami": "சிவகாமி",
	"sivagurunathan": "சிவகுருநாதன்",
	"sivakami": "சிவகாமி",
	"sivan": "சிவன்",
	"sivaprakasam": "சிவபிரகாசம்",
	"sivaprakash": "சிவபிரகாஷ்",
	"sivanesan": "சிவநேசன்",
	"sivasubramanian": "சிவசுப்பிரமணியன்",
	"sivasubramani": "சிவசுப்பிரமணி",
	"sivamani": "சிவமணி",
	"sivakumari": "சிவகுமாரி",
	"subramani": "சுப்பிரமணி",
	"subramanian": "சுப்பிரமணியன்",
	"subramaniam": "சுப்பிரமணியம்",
	"subramaniyan": "சுப்பிரமணியன்",
	"subbu": "சுப்பு",
	"subbaiyan": "சுப்பையன்",
	"subbaiah": "சுப்பையா",
	"subbiah": "சுப்பையா",
	"subban": "சுப்பன்",
	"subbulakshmi": "சுப்புலட்சுமி",
	"subburaj": "சுப்புராஜ்",
	"sudhakar": "சுதாகர்",
	"sudhagar": "சுதாகர்",
	"sundaram": "சுந்தரம்",
	"sundar": "சுந்தர்",
	"sundaramoorthy": "சுந்தரமூர்த்தி",
	"sundaramurthy": "சுந்தரமூர்த்தி",
	"sundararajan": "சுந்தரராஜன்",
	"sundararaj": "சுந்தரராஜ்",
	"sundari": "சுந்தரி",
	"sundaravel": "சுந்தரவேல்",
	"suresh": "சுரேஷ்",
	"sureshkumar": "சுரேஷ்குமார்",
	"surya": "சூர்யா",
	"suriya": "சூர்யா",
	"suriyakumar": "சூர்யகுமார்",
	"sudalaimuthu": "சுடலைமுத்து",
	"sudalai": "சுடலை",
	"srinivasan": "ஸ்ரீனிவாசன்",
	"sreenivasan": "ஸ்ரீனிவாசன்",
	"sridhar": "ஸ்ரீதர்",
	"sri": "ஸ்ரீ",
	"shri": "ஸ்ரீ",
	"sriram": "ஸ்ரீராம்",
	"srikanth": "ஸ்ரீகாந்த்",
	"sadasivam": "சதாசிவம்",
	"sadhasivam": "சதாசிவம்",
	"sadaiyan": "சடையன்",
	"sadayan": "சடையன்",
	"sadaiyandi": "சடையாண்டி",
	"saminathan": "சாமிநாதன்",
	"samikannu": "சாமிக்கண்ணு",
	"samiappan": "சாமியப்பன்",
	"samiyappan": "சாமியப்பன்",
	"samidurai": "சாமித்துரை",
	"samuel": "சாமுவேல்",
	"sam": "சாம்",
	"sanjay": "சஞ்சய்",
	"sanjai": "சஞ்சய்",
	"sangeetha": "சங்கீதா",
	"sangili": "சங்கிலி",
	"seenivasan": "சீனிவாசன்",
	"seeni": "சீனி",
	"seenu": "சீனு",
	"seetharaman": "சீதாராமன்",
	"seetha": "சீதா",
	"sita": "சீதா",
	"seethalakshmi": "சீதாலட்சுமி",
	"sekaran": "சேகரன்",
	"seran": "சேரன்",
	"sethu": "சேது",
	"sethupathi": "சேதுபதி",
	"sethuraman": "சேதுராமன்",
	"sethumadhavan": "சேதுமாதவன்",
	"shankari": "சங்கரி",
	"sankari": "சங்கரி",
	"shobana": "சோபனா",
	"sobana": "சோபனா",
	"sivasakthi": "சிவசக்தி",
	"solaimalai": "சோலைமலை",
	"solai": "சோலை",
	"soundar": "சௌந்தர்",
	"soundarrajan": "சௌந்தரராஜன்",
	"soundararajan": "சௌந்தரராஜன்",
	"soundarapandian": "சௌந்தரபாண்டியன்",
	"sowmya": "சௌம்யா",
	"soumya": "சௌம்யா",
	"stephen": "ஸ்டீபன்",
	"stalin": "ஸ்டாலின்",
	"susai": "சூசை",
	"susaimanickam": "சூசைமாணிக்கம்",
	"thangam": "தங்கம்",
	"thangadurai": "தங்கத்துரை",
	"thangavel": "தங்கவேல்",
	"thangavelu": "தங்கவேலு",
	"thangarasu": "தங்கராசு",
	"thangaraj": "தங்கராஜ்",
	"thangarajan": "தங்கராஜன்",
	"thangaraju": "தங்கராஜு",
	"thangamani": "தங்கமணி",
	"thangamuthu": "தங்கமுத்து",
	"thangammal": "தங்கம்மாள்",
	"thangappan": "தங்கப்பன்",
	"thangapandi": "தங்கப்பாண்டி",
	"thangapandian": "தங்கப்பாண்டியன்",
	"thangaiyan": "தங்கையன்",
	"thangaiah": "தங்கையா",
	"thanga": "தங்க",
	"thangamalai": "தங்கமலை",
	"thangamariappan": "தங்கமாரியப்பன்",
	"thangavelan": "தங்கவேலன்",
	"thirumoorthi": "திருமூர்த்தி",
	"thirumoorthy": "திருமூர்த்தி",
	"thirumurthy": "திருமூர்த்தி",
	"thirumalai": "திருமலை",
	"thirumal": "திருமால்",
	"thirumalaisamy": "திருமலைசாமி",
	"thirunavukkarasu": "திருநாவுக்கரசு",
	"thirunavukarasu": "திருநாவுக்கரசு",
	"thiru": "திரு",
	"thiruvenkatam": "திருவேங்கடம்",
	"thiruppathi": "திருப்பதி",
	"thirupathi": "திருப்பதி",
	"thirupathy": "திருப்பதி",
	"thirugnanam": "திருஞானம்",
	"thirugnanasambandam": "திருஞானசம்பந்தம்",
	"thyagarajan": "தியாகராஜன்",
	"thiyagarajan": "தியாகராஜன்",
	"thiagarajan": "தியாகராஜன்",
	"thyagaraj": "தியாகராஜ்",
	"thiyagu": "தியாகு",
	"thenmozhi": "தேன்மொழி",
	"thendral": "தென்றல்",
	"thilagavathi": "திலகவதி",
	"thilagavathy": "திலகவதி",
	"thilagam": "திலகம்",
	"thilaga": "திலகா",
	"tamil": "தமிழ்",
	"tamilselvan": "தமிழ்ச்செல்வன்",
	"thamilselvan": "தமிழ்ச்செல்வன்",
	"tamilselvi": "தமிழ்ச்செல்வி",
	"thamilselvi": "தமிழ்ச்செல்வி",
	"tamilarasan": "தமிழரசன்",
	"thamilarasan": "தமிழரசன்",
	"tamilarasi": "தமிழரசி",
	"thamilarasi": "தமிழரசி",
	"thamizharasi": "தமிழரசி",
	"thamizh": "தமிழ்",
	"thamizhselvan": "தமிழ்ச்செல்வன்",
	"tamilmani": "தமிழ்மணி",
	"thamilmani": "தமிழ்மணி",
	"thamilvanan": "தமிழ்வாணன்",
	"tamilvanan": "தமிழ்வாணன்",
	"thanikachalam": "தணிகாசலம்",
	"thanigachalam": "தணிகாசலம்",
	"thanigaivel": "தணிகைவேல்",
	"thangavadivel": "தங்கவடிவேல்",
	"thamotharan": "தாமோதரன்",
	"thamodharan": "தாமோதரன்",
	"thavamani": "தவமணி",
	"thavasi": "தவசி",
	"thevar": "தேவர்",
	"thomas": "தாமஸ்",
	"thulasi": "துளசி",
	"thulasimani": "துளசிமணி",
	"thulasiraman": "துளசிராமன்",
	"thirumangai": "திருமங்கை",
	"umashankar": "உமாசங்கர்",
	"uma": "உமா",
	"umamaheswari": "உமாமகேஸ்வரி",
	"umapathi": "உமாபதி",
	"umapathy": "உமாபதி",
	"udhayakumar": "உதயகுமார்",
	"udayakumar": "உதயகுமார்",
	"udhay": "உதய்",
	"uday": "உதய்",
	"udhaya": "உதயா",
	"udaya": "உதயா",
	"udhayasuriyan": "உதயசூரியன்",
	"usha": "உஷா",
	"usharani": "உஷாராணி",
	"vadivel": "வடிவேல்",
	"vadivelu": "வடிவேலு",
	"vadivelan": "வடிவேலன்",
	"vadivu": "வடிவு",
	"vadivukkarasi": "வடிவுக்கரசி",
	"varadharajan": "வரதராஜன்",
	"varadarajan": "வரதராஜன்",
	"varadhan": "வரதன்",
	"vasanth": "வசந்த்",
	"vasanthi": "வசந்தி",
	"vasantha": "வசந்தா",
	"vasanthakumar": "வசந்தகுமார்",
	"vasudevan": "வாசுதேவன்",
	"vasu": "வாசு",
	"vasuki": "வாசுகி",
	"vasugi": "வாசுகி",
	"veeran": "வீரன்",
	"veerasamy": "வீராசாமி",
	"veeraswamy": "வீராசாமி",
	"veera": "வீரா",
	"veerappan": "வீரப்பன்",
	"veeramani": "வீரமணி",
	"veeraiyan": "வீரையன்",
	"veerakumar": "வீரகுமார்",
	"veerabahu": "வீரபாகு",
	"veeraraghavan": "வீரராகவன்",
	"veeramuthu": "வீரமுத்து",
	"vel": "வேல்",
	"velu": "வேலு",
	"velan": "வேலன்",
	"velmurugan": "வேல்முருகன்",
	"velusamy": "வேலுசாமி",
	"veluswamy": "வேலுசாமி",
	"velayutham": "வேலாயுதம்",
	"velayudham": "வேலாயுதம்",
	"velayudam": "வேலாயுதம்",
	"velappan": "வேலப்பன்",
	"velammal": "வேலம்மாள்",
	"velavan": "வேலவன்",
	"vellaisamy": "வெள்ளைசாமி",
	"vellaiswamy": "வெள்ளைசாமி",
	"vellai": "வெள்ளை",
	"vellaiyan": "வெள்ளையன்",
	"vellaiammal": "வெள்ளையம்மாள்",
	"vellaiyammal": "வெள்ளையம்மாள்",
	"vellingiri": "வெள்ளிங்கிரி",
	"vengatesan": "வெங்கடேசன்",
	"venkat": "வெங்கட்",
	"venkatesan": "வெங்கடேசன்",
	"venkatesh": "வெங்கடேஷ்",
	"venkatraman": "வெங்கட்ராமன்",
	"venkataraman": "வெங்கட்ராமன்",
	"venkatachalam": "வெங்கடாசலம்",
	"venkatachalapathy": "வெங்கடாசலபதி",
	"venkatesa": "வெங்கடேச",
	"venkatesaperumal": "வெங்கடேசபெருமாள்",
	"venkatajalapathy": "வெங்கடாஜலபதி",
	"venu": "வேணு",
	"venugopal": "வேணுகோபால்",
	"vijay": "விஜய்",
	"vijaya": "விஜயா",
	"vijayakumar": "விஜயகுமார்",
	"vijayan": "விஜயன்",
	"vijayalakshmi": "விஜயலட்சுமி",
	"vijayaraj": "விஜயராஜ்",
	"vijayaraghavan": "விஜயராகவன்",
	"vijayarani": "விஜயராணி",
	"vijayasree": "விஜயஸ்ரீ",
	"vijayashanthi": "விஜயசாந்தி",
	"vignesh": "விக்னேஷ்",
	"vigneshwaran": "விக்னேஸ்வரன்",
	"vigneswaran": "விக்னேஸ்வரன்",
	"viji": "விஜி",
	"vimal": "விமல்",
	"vimala": "விமலா",
	"vinoth": "வினோத்",
	"vinothkumar": "வினோத்குமார்",
	"vinodh": "வினோத்",
	"vinod": "வினோத்",
	"vinu": "வினு",
	"vivek": "விவேக்",
	"vishnu": "விஷ்ணு",
	"viswanathan": "விஸ்வநாதன்",
	"vishwanathan": "விஸ்வநாதன்",
	"vaishnavi": "வைஷ்ணவி",
	"vandana": "வந்தனா",
	"valli": "வள்ளி",
	"valliammal": "வள்ளியம்மாள்",
	"valliyammal": "வள்ளியம்மாள்",
	"valarmathi": "வளர்மதி",
	"vanitha": "வனிதா",
	"vani": "வாணி",
	"vanaja": "வனஜா",
	"varalakshmi": "வரலட்சுமி",
	"vairam": "வைரம்",
	"vairamuthu": "வைரமுத்து",
	"vaiyapuri": "வையாபுரி",
	"vasagam": "வாசகம்",
	"velmani": "வேல்மணி",
	"vennila": "வெண்ணிலா",
	"vetrivel": "வெற்றிவேல்",
	"vetri": "வெற்றி",
	"vetriselvan": "வெற்றிச்செல்வன்",
	"vetriselvi": "வெற்றிச்செல்வி",
	"venmani": "வெண்மணி",
	"yadav": "யாதவ்",
	"yuvan": "யுவன்",
	"yuvaraj": "யுவராஜ்",
	"yuvarani": "யுவராணி",
	"yesu": "யேசு",
	"yesudas": "யேசுதாஸ்",
	"yogesh": "யோகேஷ்",
	"yogeswaran": "யோகேஸ்வரன்",
	"yoga": "யோகா",
	"yogalakshmi": "யோகலட்சுமி",
	"yasodha": "யசோதா",
	"yasotha": "யசோதா",
	"yasodhai": "யசோதை",
	"yasodaji": "யசோதா",
	"anitha": "அனிதா",
	"anita": "அனிதா",
	"ambika": "அம்பிகா",
	"amala": "அமலா",
	"anusuya": "அனுசுயா",
	"anusiya": "அனுசியா",
	"anu": "அனு",
	"anjali": "அஞ்சலி",
	"anjalai": "அஞ்சலை",
	"anjala": "அஞ்சலா",
	"anjammal": "அஞ்சம்மாள்",
	"amsavalli": "அம்சவள்ளி",
	"amsa": "அம்சா",
	"amudha": "அமுதா",
	"amutha": "அமுதா",
	"amudhavalli": "அமுதவள்ளி",
	"anandhi": "ஆனந்தி",
	"anandi": "ஆனந்தி",
	"angammal": "அங்கம்மாள்",
	"annakili": "அன்னக்கிளி",
	"annalakshmi": "அன்னலட்சுமி",
	"annam": "அன்னம்",
	"annammal": "அன்னம்மாள்",
	"anbukarasi": "அன்புக்கரசி",
	"anbarasi": "அன்பரசி",
	"arockiamary": "அரோக்கியமேரி",
	"arokiamary": "அரோக்கியமேரி",
	"arukkani": "அருக்காணி",
	"asha": "ஆஷா",
	"aruna": "அருணா",
	"arunadevi": "அருணாதேவி",
	"archana": "அர்ச்சனா",
	"agila": "அகிலா",
	"akila": "அகிலா",
	"akilandeswari": "அகிலாண்டேஸ்வரி",
	"alamelu": "அலமேலு",
	"alagammal": "அழகம்மாள்",
	"azhagammal": "அழகம்மாள்",
	"alamelumangai": "அலமேலுமங்கை",
	"angayarkanni": "அங்கயற்கண்ணி",
	"anjugam": "அஞ்சுகம்",
	"abirami": "அபிராமி",
	"ammu": "அம்மு",
	"ammani": "அம்மணி",
	"ammasi": "அம்மாசி",
	"bhavani": "பவானி",
	"bavani": "பவானி",
	"banu": "பானு",
	"banumathi": "பானுமதி",
	"bhanumathi": "பானுமதி",
	"bhagya": "பாக்யா",
	"bhagyalakshmi": "பாக்யலட்சுமி",
	"bhuvana": "புவனா",
	"bhuvaneswari": "புவனேஸ்வரி",
	"buvaneswari": "புவனேஸ்வரி",
	"bhuvaneshwari": "புவனேஸ்வரி",
	"brindha": "பிருந்தா",
	"brinda": "பிருந்தா",
	"chitrakala": "சித்ரகலா",
	"chitradevi": "சித்ராதேவி",
	"chithradevi": "சித்ராதேவி",
	"chinnammal": "சின்னம்மாள்",
	"chinnaponnu": "சின்னப்பொண்ணு",
	"chinnapillai": "சின்னப்பிள்ளை",
	"chandrakala": "சந்திரகலா",
	"chandrika": "சந்திரிகா",
	"chellammal": "செல்லம்மாள்",
	"chellamma": "செல்லம்மா",
	"chinnakannu": "சின்னக்கண்ணு",
	"chellathai": "செல்லத்தாய்",
	"devi": "தேவி",
	"deepa": "தீபா",
	"deepika": "தீபிகா",
	"divya": "திவ்யா",
	"dhivya": "திவ்யா",
	"devika": "தேவிகா",
	"dhanalakshmi": "தனலட்சுமி",
	"dhanam": "தனம்",
	"dhanammal": "தனம்மாள்",
	"dhanabakiyam": "தனபாக்கியம்",
	"dhanabagyam": "தனபாக்கியம்",
	"dhanalatchumi": "தனலட்சுமி",
	"dhanapakkiyam": "தனபாக்கியம்",
	"durga": "துர்கா",
	"durgadevi": "துர்காதேவி",
	"dhanavathi": "தனவதி",
	"dhanasri": "தனஸ்ரீ",
	"eswari": "ஈஸ்வரி",
	"easwari": "ஈஸ்வரி",
	"elizabeth": "எலிசபெத்",
	"elakkiya": "இலக்கியா",
	"ilakkiya": "இலக்கியா",
	"ezhilarasi": "எழிலரசி",
	"ellammal": "எல்லம்மாள்",
	"geetha": "கீதா",
	"gita": "கீதா",
	"geeta": "கீதா",
	"gomathi": "கோமதி",
	"gomathy": "கோமதி",
	"gowri": "கௌரி",
	"gouri": "கௌரி",
	"gayathri": "காயத்ரி",
	"gayatri": "காயத்ரி",
	"girija": "கிரிஜா",
	"ganga": "கங்கா",
	"gangadevi": "கங்காதேவி",
	"gandhimathi": "காந்திமதி",
	"gnanambal": "ஞானாம்பாள்",
	"gnanasoundari": "ஞானசௌந்தரி",
	"gowsalya": "கௌசல்யா",
	"gunavathi": "குணவதி",
	"gunasundari": "குணசுந்தரி",
	"hema": "ஹேமா",
	"hemalatha": "ஹேமலதா",
	"hemavathi": "ஹேமாவதி",
	"indira": "இந்திரா",
	"indhira": "இந்திரா",
	"indrani": "இந்திராணி",
	"indhumathi": "இந்துமதி",
	"indumathi": "இந்துமதி",
	"indhu": "இந்து",
	"indu": "இந்து",
	"ilavarasi": "இளவரசி",
	"isakkiammal": "இசக்கியம்மாள்",
	"jaya": "ஜெயா",
	"jayalakshmi": "ஜெயலட்சுமி",
	"jayanthi": "ஜெயந்தி",
	"jothi": "ஜோதி",
	"jothika": "ஜோதிகா",
	"janaki": "ஜானகி",
	"jansi": "ஜான்சி",
	"jamuna": "ஜமுனா",
	"jegadeeswari": "ஜெகதீஸ்வரி",
	"jagadeeswari": "ஜெகதீஸ்வரி",
	"jeevitha": "ஜீவிதா",
	"jenifer": "ஜெனிபர்",
	"jothilakshmi": "ஜோதிலட்சுமி",
	"jayamani": "ஜெயமணி",
	"jayarani": "ஜெயராணி",
	"kalpana": "கல்பனா",
	"kamala": "கமலா",
	"kamalam": "கமலம்",
	"kamalambal": "கமலாம்பாள்",
	"kamalaveni": "கமலவேணி",
	"kamatchi": "காமாட்சி",
	"kamakshi": "காமாட்சி",
	"kamachi": "காமாட்சி",
	"kanmani": "கண்மணி",
	"kanchana": "காஞ்சனா",
	"kanaka": "கனகா",
	"kanagavalli": "கனகவள்ளி",
	"kanagammal": "கனகம்மாள்",
	"kannagi": "கண்ணகி",
	"kannaki": "கண்ணகி",
	"kannammal": "கண்ணம்மாள்",
	"kanniyammal": "கன்னியம்மாள்",
	"kanniammal": "கன்னியம்மாள்",
	"karpagam": "கற்பகம்",
	"karpagavalli": "கற்பகவள்ளி",
	"karpagavalli": "கற்பகவள்ளி",
	"kasthuri": "கஸ்தூரி",
	"kasturi": "கஸ்தூரி",
	"kaliyammal": "காளியம்மாள்",
	"kaliammal": "காளியம்மாள்",
	"kalyani": "கல்யாணி",
	"kalaimagal": "கலைமகள்",
	"kalavathi": "கலாவதி",
	"kanagalakshmi": "கனகலட்சுமி",
	"karuppayee": "கருப்பாயி",
	"karuppayi": "கருப்பாயி",
	"karuppammal": "கருப்பம்மாள்",
	"kavya": "காவ்யா",
	"kavitha": "கவிதா",
	"kaveri": "காவேரி",
	"kavery": "காவேரி",
	"keerthana": "கீர்த்தனா",
	"keerthi": "கீர்த்தி",
	"kiruba": "கிருபா",
	"kripa": "கிருபா",
	"kokilavani": "கோகிலவாணி",
	"komala": "கோமளா",
	"komalavalli": "கோமளவள்ளி",
	"kowsalya": "கௌசல்யா",
	"krishnammal": "கிருஷ்ணம்மாள்",
	"kumudha": "குமுதா",
	"kumutha": "குமுதா",
	"kuppammal": "குப்பம்மாள்",
	"kuzhali": "குழலி",
	"kanniga": "கன்னிகா",
	"kannika": "கன்னிகா",
	"latha": "லதா",
	"lalitha": "லலிதா",
	"leela": "லீலா",
	"leelavathi": "லீலாவதி",
	"lavanya": "லாவண்யா",
	"lakshmipriya": "லட்சுமிப்பிரியா",
	"logeswari": "லோகேஸ்வரி",
	"logambal": "லோகாம்பாள்",
	"meena": "மீனா",
	"meenakshi": "மீனாட்சி",
	"meenatchi": "மீனாட்சி",
	"meenal": "மீனாள்",
	"malathi": "மாலதி",
	"mala": "மாலா",
	"malar": "மலர்",
	"malarkodi": "மலர்க்கொடி",
	"malarvizhi": "மலர்விழி",
	"malliga": "மல்லிகா",
	"mallika": "மல்லிகா",
	"manjula": "மஞ்சுளா",
	"manju": "மஞ்சு",
	"mangai": "மங்கை",
	"mangalam": "மங்களம்",
	"mangayarkarasi": "மங்கையர்க்கரசி",
	"mahalakshmi": "மகாலட்சுமி",
	"mariyayee": "மாரியாயி",
	"mariayee": "மாரியாயி",
	"maragatham": "மரகதம்",
	"maragathavalli": "மரகதவள்ளி",
	"megala": "மேகலா",
	"mekala": "மேகலா",
	"menaka": "மேனகா",
	"muniyammal": "முனியம்மாள்",
	"muniammal": "முனியம்மாள்",
	"muthammal": "முத்தம்மாள்",
	"muthulakshmi": "முத்துலட்சுமி",
	"muthumariammal": "முத்துமாரியம்மாள்",
	"muthumalar": "முத்துமலர்",
	"muthupechi": "முத்துப்பேச்சி",
	"muthuselvi": "முத்துச்செல்வி",
	"muthulaxmi": "முத்துலட்சுமி",
	"mythili": "மைதிலி",
	"mythily": "மைதிலி",
	"mohana": "மோகனா",
	"mohanapriya": "மோகனப்பிரியா",
	"mohanambal": "மோகனாம்பாள்",
	"monisha": "மோனிஷா",
	"muthumani": "முத்துமணி",
	"nagalakshmi": "நாகலட்சுமி",
	"nagavalli": "நாகவள்ளி",
	"nallammal": "நல்லம்மாள்",
	"nalini": "நளினி",
	"nandhini": "நந்தினி",
	"natchiyar": "நாச்சியார்",
	"nachiyar": "நாச்சியார்",
	"neela": "நீலா",
	"neelavathi": "நீலாவதி",
	"nirmala": "நிர்மலா",
	"nithya": "நித்யா",
	"nithyakalyani": "நித்யகல்யாணி",
	"nisha": "நிஷா",
	"nila": "நிலா",
	"nagajothi": "நாகஜோதி",
	"nagarani": "நாகராணி",
	"padma": "பத்மா",
	"padmavathi": "பத்மாவதி",
	"padmini": "பத்மினி",
	"pappa": "பாப்பா",
	"pappathi": "பாப்பாத்தி",
	"pappathy": "பாப்பாத்தி",
	"pappal": "பாப்பாள்",
	"pappammal": "பாப்பம்மாள்",
	"parvathi": "பார்வதி",
	"parvathy": "பார்வதி",
	"parimala": "பரிமளா",
	"parameswari": "பரமேஸ்வரி",
	"pavithra": "பவித்ரா",
	"pechiammal": "பேச்சியம்மாள்",
	"pechi": "பேச்சி",
	"periyakka": "பெரியக்கா",
	"periyammal": "பெரியம்மாள்",
	"ponni": "பொன்னி",
	"ponnammal": "பொன்னம்மாள்",
	"ponnu": "பொன்னு",
	"ponnuthai": "பொன்னுத்தாய்",
	"ponnuthayee": "பொன்னுத்தாயி",
	"ponnammal": "பொன்னம்மாள்",
	"poongodi": "பூங்கொடி",
	"poonkodi": "பூங்கொடி",
	"poongothai": "பூங்கோதை",
	"poongavanam": "பூங்காவனம்",
	"poornima": "பூர்ணிமா",
	"poorani": "பூரணி",
	"pooranam": "பூரணம்",
	"pushpa": "புஷ்பா",
	"pushpam": "புஷ்பம்",
	"pushpalatha": "புஷ்பலதா",
	"pushpavalli": "புஷ்பவள்ளி",
	"punitha": "புனிதா",
	"punithavathi": "புனிதவதி",
	"prema": "பிரேமா",
	"premalatha": "பிரேமலதா",
	"premavathi": "பிரேமாவதி",
	"priya": "பிரியா",
	"priyanka": "பிரியங்கா",
	"priyadharshini": "பிரியதர்ஷினி",
	"pavai": "பாவை",
	"pandiammal": "பாண்டியம்மாள்",
	"pandiyammal": "பாண்டியம்மாள்",
	"panchavarnam": "பஞ்சவர்ணம்",
	"pankajam": "பங்கஜம்",
	"papathi": "பாப்பாத்தி",
	"pattammal": "பட்டம்மாள்",
	"pavunammal": "பவுனம்மாள்",
	"pavunu": "பவுனு",
	"pavun": "பவுன்",
	"porkodi": "பொற்கொடி",
	"porselvi": "பொற்செல்வி",
	"radha": "ராதா",
	"radhika": "ராதிகா",
	"rajammal": "ராஜம்மாள்",
	"rajam": "ராஜம்",
	"rajathi": "ராஜாத்தி",
	"rajakumari": "ராஜகுமாரி",
	"rajarajeswari": "ராஜராஜேஸ்வரி",
	"rajeswari": "ராஜேஸ்வரி",
	"rajalakshmi": "ராஜலட்சுமி",
	"rakkammal": "ராக்கம்மாள்",
	"rakku": "ராக்கு",
	"ramani": "ரமணி",
	"ramalakshmi": "ராமலட்சுமி",
	"ramayee": "ராமாயி",
	"ramuthai": "ராமுத்தாய்",
	"rani": "ராணி",
	"ranjitha": "ரஞ்சிதா",
	"ranjani": "ரஞ்சனி",
	"rasammal": "ராசம்மாள்",
	"rasathi": "ராசாத்தி",
	"rathinam": "ரத்தினம்",
	"rathinammal": "ரத்தினம்மாள்",
	"rathna": "ரத்னா",
	"ratna": "ரத்னா",
	"renuka": "ரேணுகா",
	"renugadevi": "ரேணுகாதேவி",
	"revathi": "ரேவதி",
	"revathy": "ரேவதி",
	"rekha": "ரேகா",
	"rukmani": "ருக்மணி",
	"rukmini": "ருக்மிணி",
	"rukku": "ருக்கு",
	"rukkumani": "ருக்குமணி",
	"rosy": "ரோஸி",
	"roja": "ரோஜா",
	"ramya": "ரம்யா",
	"saroja": "சரோஜா",
	"sarojini": "சரோஜினி",
	"saraswathi": "சரஸ்வதி",
	"saraswathy": "சரஸ்வதி",
	"sarasu": "சரசு",
	"saranya": "சரண்யா",
	"sarala": "சரளா",
	"sarada": "சாரதா",
	"saratha": "சாரதா",
	"sarathambal": "சாரதாம்பாள்",
	"sasikala": "சசிகலா",
	"sathiyavani": "சத்தியவாணி",
	"sathyavani": "சத்தியவாணி",
	"sathiyavathi": "சத்தியவதி",
	"sathya": "சத்யா",
	"sathiyapriya": "சத்யப்பிரியா",
	"savithri": "சாவித்திரி",
	"savithiri": "சாவித்திரி",
	"savitha": "சவிதா",
	"seetha": "சீதா",
	"seethalakshmi": "சீதாலட்சுமி",
	"selvi": "செல்வி",
	"selvarani": "செல்வராணி",
	"selvambal": "செல்வாம்பாள்",
	"selvakumari": "செல்வக்குமாரி",
	"sellammal": "செல்லம்மாள்",
	"sellathai": "செல்லத்தாய்",
	"senthamarai": "செந்தாமரை",
	"sengeni": "செங்கேணி",
	"shanthi": "சாந்தி",
	"santhi": "சாந்தி",
	"shanthakumari": "சாந்தகுமாரி",
	"shantha": "சாந்தா",
	"santha": "சாந்தா",
	"shakila": "ஷகிலா",
	"shakeela": "ஷகீலா",
	"sharmila": "ஷர்மிளா",
	"sarmila": "சர்மிளா",
	"shobana": "சோபனா",
	"shenbagam": "செண்பகம்",
	"senbagam": "செண்பகம்",
	"shenbagavalli": "செண்பகவள்ளி",
	"sindhu": "சிந்து",
	"sinthu": "சிந்து",
	"sivagami": "சிவகாமி",
	"sivakami": "சிவகாமி",
	"sivasankari": "சிவசங்கரி",
	"sobana": "சோபனா",
	"soundarya": "சௌந்தர்யா",
	"soundari": "சௌந்தரி",
	"sowmiya": "சௌமியா",
	"sridevi": "ஸ்ரீதேவி",
	"sreedevi": "ஸ்ரீதேவி",
	"sripriya": "ஸ்ரீபிரியா",
	"subbulakshmi": "சுப்புலட்சுமி",
	"subbammal": "சுப்பம்மாள்",
	"sudha": "சுதா",
	"sugantha": "சுகந்தா",
	"suganthi": "சுகந்தி",
	"sugandhi": "சுகந்தி",
	"suguna": "சுகுணா",
	"sujatha": "சுஜாதா",
	"suja": "சுஜா",
	"sumathi": "சுமதி",
	"sumathy": "சுமதி",
	"sumithra": "சுமித்ரா",
	"sundari": "சுந்தரி",
	"sundarambal": "சுந்தராம்பாள்",
	"sunitha": "சுனிதா",
	"suseela": "சுசீலா",
	"susila": "சுசீலா",
	"sushila": "சுசீலா",
	"swarnalatha": "சுவர்ணலதா",
	"swarnam": "சுவர்ணம்",
	"saral": "சரள்",
	"sarala": "சரளா",
	"sangeetha": "சங்கீதா",
	"sangeeta": "சங்கீதா",
	"saratha": "சாரதா",
	"sathiyabama": "சத்தியபாமா",
	"sathyabama": "சத்தியபாமா",
	"sathyapriya": "சத்யப்பிரியா",
	"sasirekha": "சசிரேகா",
	"seeniyammal": "சீனியம்மாள்",
	"thangam": "தங்கம்",
	"thangammal": "தங்கம்மாள்",
	"thangamani": "தங்கமணி",
	"thamarai": "தாமரை",
	"thamaraiselvi": "தாமரைச்செல்வி",
	"thayammal": "தாயம்மாள்",
	"thaiyalnayagi": "தையல்நாயகி",
	"thayalnayaki": "தையல்நாயகி",
	"thavamani": "தவமணி",
	"thenmozhi": "தேன்மொழி",
	"thilagavathi": "திலகவதி",
	"thulasi": "துளசி",
	"umadevi": "உமாதேவி",
	"umamaheswari": "உமாமகேஸ்வரி",
	"uma": "உமா",
	"unnamalai": "உண்ணாமலை",
	"valli": "வள்ளி",
	"valliammal": "வள்ளியம்மாள்",
	"valarmathi": "வளர்மதி",
	"vanitha": "வனிதா",
	"vasanthi": "வசந்தி",
	"vasantha": "வசந்தா",
	"vasanthamani": "வசந்தமணி",
	"vedhavalli": "வேதவள்ளி",
	"vedavalli": "வேதவள்ளி",
	"veeralakshmi": "வீரலட்சுமி",
	"vellaiyammal": "வெள்ளையம்மாள்",
	"vennila": "வெண்ணிலா",
	"vijayalakshmi": "விஜயலட்சுமி",
	"vijaya": "விஜயா",
	"vimala": "விமலா",
	"vinitha": "வினிதா",
	"visalakshi": "விசாலாட்சி",
	"visalatchi": "விசாலாட்சி",
	"vasuki": "வாசுகி",
	"yasodha": "யசோதா",
	"pillai": "பிள்ளை",
	"gounder": "கவுண்டர்",
	"goundar": "கவுண்டர்",
	"kounder": "கவுண்டர்",
	"chettiar": "செட்டியார்",
	"chetty": "செட்டி",
	"mudaliar": "முதலியார்",
	"naicker": "நாயக்கர்",
	"nayakar": "நாயக்கர்",
	"naidu": "நாயுடு",
	"nadar": "நாடார்",
	"thevar": "தேவர்",
	"reddy": "ரெட்டி",
	"reddiar": "ரெட்டியார்",
	"iyer": "ஐயர்",
	"iyengar": "ஐயங்கார்",
	"ammal": "அம்மாள்",
	"ammaal": "அம்மாள்",
	"amma": "அம்மா",
	"appa": "அப்பா",
	"ayya": "ஐயா",
	"aiya": "ஐயா",
	"akka": "அக்கா",
	"thambi": "தம்பி",
	"thai": "தாய்",
	"thayee": "தாயி",
	"ayee": "ஆயி",
	"aachi": "ஆச்சி",
	"achi": "ஆச்சி",
	"kannu": "கண்ணு",
	"mary": "மேரி",
	"antony": "அந்தோணி",
	"anthony": "அந்தோணி",
	"arokiasamy": "அரோக்கியசாமி",
	"arockiasamy": "அரோக்கியசாமி",
	"arokiadass": "அரோக்கியதாஸ்",
	"sebastian": "செபாஸ்டியன்",
	"xavier": "சேவியர்",
	"michael": "மைக்கேல்",
	"peter": "பீட்டர்",
	"james": "ஜேம்ஸ்",
	"david": "டேவிட்",
	"daniel": "டேனியல்",
	"abdul": "அப்துல்",
	"mohamed": "முகமது",
	"mohammed": "முகமது",
	"muhammad": "முகமது",
	"ahamed": "அகமது",
	"ahmed": "அகமது",
	"ibrahim": "இப்ராகிம்",
	"ismail": "இஸ்மாயில்",
	"kadar": "காதர்",
	"basha": "பாஷா",
	"fathima": "பாத்திமா",
	"fatima": "பாத்திமா",
	"ayesha": "ஆயிஷா",
	"jainulabdeen": "ஜைனுலாப்தீன்",
	"sheik": "ஷேக்",
	"sheikh": "ஷேக்",
	"syed": "சையத்",
	"rasool": "ரசூல்",
	"address": "முகவரி",
	"anna": "அண்ணா",
	"annadanapatti": "அன்னதானப்பட்டி",
	"attaiyampatti": "அட்டையம்பட்டி",
	"attayampatti": "அட்டையம்பட்டி",
	"attur": "ஆத்தூர்",
	"asokapuram": "அசோகபுரம்",
	"ayothiapattinam": "அயோத்தியாபட்டினம்",
	"ammapet": "அம்மாபேட்டை",
	"ammapettai": "அம்மாபேட்டை",
	"andipatti": "ஆண்டிபட்டி",
	"agraharam": "அக்ரஹாரம்",
	"alampalayam": "ஆலம்பாளையம்",
	"alamarathur": "ஆலமரத்தூர்",
	"anaipalayam": "ஆனைப்பாளையம்",
	"ariyur": "அரியூர்",
	"athanur": "ஆத்தனூர்",
	"avinashi": "அவிநாசி",
	"bazaar": "பஜார்",
	"bazar": "பஜார்",
	"belukur": "பேளூர்",
	"belukurichi": "பேளூக்குறிச்சி",
	"block": "பிரிவு",
	"bharathiyar": "பாரதியார்",
	"bharathiar": "பாரதியார்",
	"bhavani": "பவானி",
	"bodinayakkanur": "போடிநாயக்கனூர்",
	"bommidi": "பொம்மிடி",
	"bangalore": "பெங்களூரு",
	"bengaluru": "பெங்களூரு",
	"chennai": "சென்னை",
	"coimbatore": "கோயம்புத்தூர்",
	"colony": "காலனி",
	"cross": "குறுக்கு",
	"cut": "குறுக்கு",
	"complex": "வளாகம்",
	"city": "நகரம்",
	"chinnasalem": "சின்னசேலம்",
	"chinnappampatti": "சின்னப்பம்பட்டி",
	"church": "தேவாலயம்",
	"district": "மாவட்டம்",
	"dist": "மாவட்டம்",
	"dt": "மாவட்டம்",
	"dharapuram": "தாராபுரம்",
	"div": "பிரிவு",
	"dharmapuri": "தர்மபுரி",
	"dindigul": "திண்டுக்கல்",
	"devanankurichi": "தேவனாங்குறிச்சி",
	"door": "கதவு",
	"edappadi": "இடப்பாடி",
	"elampillai": "இளம்பிள்ளை",
	"erode": "ஈரோடு",
	"extension": "விரிவாக்கம்",
	"extn": "விரிவாக்கம்",
	"east": "கிழக்கு",
	"erumapalayam": "எருமாப்பாளையம்",
	"elachipalayam": "இளச்சிப்பாளையம்",
	"gandhi": "காந்தி",
	"gate": "கேட்",
	"gurusamypalayam": "குருசாமிபாளையம்",
	"gh": "அரசு மருத்துவமனை",
	"gate": "கேட்",
	"garden": "தோட்டம்",
	"gramam": "கிராமம்",
	"gudalur": "கூடலூர்",
	"hospital": "மருத்துவமனை",
	"house": "இல்லம்",
	"hsg": "வீட்டுவசதி",
	"high": "மேல்",
	"home": "இல்லம்",
	"hills": "மலை",
	"illam": "இல்லம்",
	"idappadi": "இடப்பாடி",
	"junction": "சந்திப்பு",
	"jn": "சந்திப்பு",
	"jedarpalayam": "ஜேடர்பாளையம்",
	"kamaraj": "காமராஜ்",
	"kamarajar": "காமராஜர்",
	"kannankurichi": "கன்னங்குறிச்சி",
	"kabilarmalai": "கபிலர்மலை",
	"karur": "கரூர்",
	"kongu": "கொங்கு",
	"kottai": "கோட்டை",
	"kovil": "கோவில்",
	"kurukku": "குறுக்கு",
	"kollimalai": "கொல்லிமலை",
	"kollihills": "கொல்லிமலை",
	"koil": "கோவில்",
	"kurichi": "குறிச்சி",
	"kadu": "காடு",
	"kalangani": "களங்கணி",
	"kalappanaickenpatti": "களப்பநாயக்கன்பட்டி",
	"kalapanaickenpatti": "களப்பநாயக்கன்பட்டி",
	"komarapalayam": "கோமாரபாளையம்",
	"kumarapalayam": "கோமாரபாளையம்",
	"konganapuram": "கொங்கணாபுரம்",
	"kondalampatti": "கொண்டலாம்பட்டி",
	"kottapalayam": "கோட்டப்பாளையம்",
	"kodi": "கொடி",
	"kalvi": "கல்வி",
	"karungalpalayam": "கருங்கல்பாளையம்",
	"kannurpatti": "கண்ணூர்பட்டி",
	"kavundampalayam": "கவுண்டம்பாளையம்",
	"kavuntampalayam": "கவுண்டம்பாளையம்",
	"kandampalayam": "கண்டம்பாளையம்",
	"kolathur": "கோளத்தூர்",
	"kumbakonam": "கும்பகோணம்",
	"koneripatti": "கோனேரிப்பட்டி",
	"kuppandapalayam": "குப்பாண்டபாளையம்",
	"kulathur": "குளத்தூர்",
	"lane": "சந்து",
	"layout": "லேஅவுட்",
	"line": "லைன்",
	"main": "மெயின்",
	"mainroad": "மெயின் ரோடு",
	"mallasamudram": "மல்லசமுத்திரம்",
	"mavelipalayam": "மாவெலிபாளையம்",
	"mohanur": "மோகனூர்",
	"muncipal": "நகராட்சி",
	"municipal": "நகராட்சி",
	"market": "சந்தை",
	"mettur": "மேட்டூர்",
	"mettupatti": "மேட்டுப்பட்டி",
	"mettupalayam": "மேட்டுப்பாளையம்",
	"mettu": "மேட்டு",
	"malai": "மலை",
	"mangalapuram": "மங்களபுரம்",
	"mangalam": "மங்கலம்",
	"muthugapatti": "முத்துகாப்பட்டி",
	"madurai": "மதுரை",
	"mount": "மலை",
	"melur": "மேலூர்",
	"mel": "மேல்",
	"melapalayam": "மேலப்பாளையம்",
	"minnampalli": "மின்னாம்பள்ளி",
	"mudalaipatti": "முதலைப்பட்டி",
	"mangalapatti": "மங்களப்பட்டி",
	"nagar": "நகர்",
	"nallipalayam": "நல்லிபாளையம்",
	"nh": "தேசிய நெடுஞ்சாலை",
	"new": "புது",
	"no": "எண்",
	"north": "வடக்கு",
	"namagiripettai": "நாமகிரிப்பேட்டை",
	"namagiripet": "நாமகிரிப்பேட்டை",
	"nadupatti": "நடுப்பட்டி",
	"nadu": "நடு",
	"nagarasampatti": "நாகராசம்பட்டி",
	"nangavalli": "நங்கவள்ளி",
	"nallur": "நல்லூர்",
	"old": "பழைய",
	"omalur": "ஓமலூர்",
	"opp": "எதிரில்",
	"opposite": "எதிரில்",
	"odai": "ஓடை",
	"oor": "ஊர்",
	"palai": "பாளையம்",
	"palaiym": "பாளையம்",
	"palaiyam": "பாளையம்",
	"palayam": "பாளையம்",
	"paramathi": "பரமத்தி",
	"perumbalur": "பெரம்பலூர்",
	"perambalur": "பெரம்பலூர்",
	"pattanam": "பட்டினம்",
	"patti": "பட்டி",
	"patty": "பட்டி",
	"pettai": "பேட்டை",
	"pet": "பேட்டை",
	"pillaiyar": "பிள்ளையார்",
	"pirivu": "பிரிவு",
	"privu": "பிரிவு",
	"post": "அஞ்சல்",
	"po": "அஞ்சல்",
	"pudur": "புதூர்",
	"puthur": "புதூர்",
	"pudupatti": "புதுப்பட்டி",
	"puthupatti": "புதுப்பட்டி",
	"pudupalayam": "புதுப்பாளையம்",
	"puthupalayam": "புதுப்பாளையம்",
	"pudu": "புது",
	"puthu": "புது",
	"puram": "புரம்",
	"pallipalayam": "பள்ளிபாளையம்",
	"palakkad": "பாலக்காடு",
	"pallapatti": "பள்ளப்பட்டி",
	"pillanallur": "பிள்ளநல்லூர்",
	"pachal": "பச்சல்",
	"pattukottai": "பட்டுக்கோட்டை",
	"puliyampatti": "புளியம்பட்டி",
	"periyapatti": "பெரியபட்டி",
	"periyakoundanpalayam": "பெரியகவுண்டன்பாளையம்",
	"pudukottai": "புதுக்கோட்டை",
	"pudukkottai": "புதுக்கோட்டை",
	"pillaikalathur": "பிள்ளைக்களத்தூர்",
	"quarter": "குடியிருப்பு",
	"quarters": "குடியிருப்புகள்",
	"qtrs": "குடியிருப்புகள்",
	"road": "ரோடு",
	"rd": "ரோடு",
	"rajaji": "ராஜாஜி",
	"railway": "ரயில்வே",
	"reddipatty": "ரெட்டிப்பட்டி",
	"reddipatti": "ரெட்டிப்பட்டி",
	"roundana": "ரவுண்டானா",
	"rasipuram": "இராசிபுரம்",
	"r.s": "ஆர்.எஸ்",
	"salem": "சேலம்",
	"sankagiri": "சங்ககிரி",
	"sankari": "சங்கரி",
	"school": "பள்ளி",
	"shevapet": "செவ்வாய்ப்பேட்டை",
	"street": "தெரு",
	"st": "தெரு",
	"south": "தெற்கு",
	"seelanaickenpatti": "சீலநாயக்கன்பட்டி",
	"sendamangalam": "சேந்தமங்கலம்",
	"senthamangalam": "சேந்தமங்கலம்",
	"sengarai": "செங்கரை",
	"siruvachur": "சிறுவாச்சூர்",
	"sivagiri": "சிவகிரி",
	"sowdapuram": "சௌடாபுரம்",
	"sathiyamangalam": "சத்தியமங்கலம்",
	"sathyamangalam": "சத்தியமங்கலம்",
	"sarkar": "சர்க்கார்",
	"seeragapadi": "சீரகப்பாடி",
	"sankarapuram": "சங்கராபுரம்",
	"sendarapatti": "சேந்தராப்பட்டி",
	"suramangalam": "சூரமங்கலம்",
	"sathipalayam": "சாத்திப்பாளையம்",
	"tamilnadu": "தமிழ்நாடு",
	"taluk": "வட்டம்",
	"tk": "வட்டம்",
	"thiruchengode": "திருச்செங்கோடு",
	"tiruchengode": "திருச்செங்கோடு",
	"temple": "கோவில்",
	"town": "நகரம்",
	"thiruvalluvar": "திருவள்ளுவர்",
	"textiles": "டெக்ஸ்டைல்ஸ்",
	"theru": "தெரு",
	"thottam": "தோட்டம்",
	"thoppu": "தோப்பு",
	"thidal": "திடல்",
	"thottiyam": "தொட்டியம்",
	"tharamangalam": "தாரமங்கலம்",
	"thammampatti": "தம்மம்பட்டி",
	"thalaivasal": "தலைவாசல்",
	"thedavur": "தேடவூர்",
	"thiruppur": "திருப்பூர்",
	"tiruppur": "திருப்பூர்",
	"tirupur": "திருப்பூர்",
	"trichy": "திருச்சி",
	"tiruchirappalli": "திருச்சிராப்பள்ளி",
	"thuraiyur": "துறையூர்",
	"turaiyur": "துறையூர்",
	"thottipatti": "தொட்டிப்பட்டி",
	"union": "ஒன்றியம்",
	"ur": "ஊர்",
	"velur": "வேலூர்",
	"valappady": "வாழப்பாடி",
	"valapady": "வாழப்பாடி",
	"via": "வழியாக",
	"vill": "கிராமம்",
	"village": "கிராமம்",
	"valaham": "வளாகம்",
	"valasu": "வலசு",
	"valavu": "வளவு",
	"vennandur": "வெண்ணந்தூர்",
	"vellore": "வேலூர்",
	"veerapandi": "வீரபாண்டி",
	"vaiyappamalai": "வையப்பமலை",
	"veppadai": "வெப்படை",
	"vazhavanthi": "வாழவந்தி",
	"varagur": "வரகூர்",
	"vadugapatti": "வடுகப்பட்டி",
	"vadakku": "வடக்கு",
	"vadakkumalai": "வடக்குமலை",
	"ward": "வார்டு",
	"west": "மேற்கு",
	"way": "வழி",
	"weavers": "நெசவாளர்"
};
var TA_C = {
	k: "க",
	ng: "ங",
	ch: "ச",
	C: "ச",
	j: "ஜ",
	nj: "ஞ",
	t: "ட",
	T: "ட",
	N: "ண",
	th: "த",
	n: "ந",
	nn: "ன",
	p: "ப",
	m: "ம",
	y: "ய",
	r: "ர",
	R: "ற",
	l: "ல",
	L: "ள",
	zh: "ழ",
	v: "வ",
	sh: "ஷ",
	S: "ஸ",
	h: "ஹ"
};
var TA_V_IND = {
	a: "அ",
	aa: "ஆ",
	i: "இ",
	ii: "ஈ",
	u: "உ",
	uu: "ஊ",
	e: "எ",
	ee: "ஏ",
	ai: "ஐ",
	o: "ஒ",
	oo: "ஓ",
	au: "ஔ"
};
var TA_V_SIGN = {
	a: "",
	aa: "ா",
	i: "ி",
	ii: "ீ",
	u: "ு",
	uu: "ூ",
	e: "ெ",
	ee: "ே",
	ai: "ை",
	o: "ொ",
	oo: "ோ",
	au: "ௌ"
};
var PULLI = "்";
var E2T_VOWELS = "aeiouAEIOUĕŏ";
var e2tIsV = (ch) => !!ch && E2T_VOWELS.indexOf(ch) >= 0;
var E2T_PRE_RULES = [
	[/^saravan/, "saravaN"],
	[/^ganes/, "gaNEs"],
	[/^dines/, "dhinEs"],
	[/^rajini/, "raJini"],
	[/^(pichai|pitchai|pichchai)/, "pichchai"],
	[/^vetri/, "veRRi"],
	[/^thiruchengod/, "thiruchchengkOd"],
	[/(yaken|yakan|yakken|yakkan)pat/, "yakkanpat"],
	[/^anand/, "Anandh"],
	[/^rathin/, "raththin"],
	[/pechi/, "pEchchi"],
	[/akshi$/, "ATchi"],
	[/atchi$/, "ATchi"],
	[/kri(?=[a-z])/, "kiru"],
	[/^brin/, "pirun"],
	[/^sw/, "suv"],
	[/^myth/, "maith"],
	[/^ash(?=[oO]k)/, "as"]
];
var E2T_SUFFIX_RULES = [
	[
		/(samy|swamy|sami|swami|saamy|saami)$/,
		"saami",
		0
	],
	[
		/(chamy|chami)$/,
		"chchaami",
		3
	],
	[
		/kumar$/,
		"kumAr",
		0
	],
	[
		/kumari$/,
		"kumAri",
		0
	],
	[
		/raj$/,
		"rAj",
		0
	],
	[
		/raja$/,
		"rAjA",
		0
	],
	[
		/rajan$/,
		"rAjan",
		0
	],
	[
		/raju$/,
		"rAju",
		0
	],
	[
		/rayan$/,
		"rAyan",
		0
	],
	[
		/rayar$/,
		"rAyar",
		0
	],
	[
		/nathan$/,
		"nAthan",
		0
	],
	[
		/nath$/,
		"nAth",
		0
	],
	[
		/natham$/,
		"nAtham",
		0
	],
	[
		/vel$/,
		"vEl",
		0
	],
	[
		/velu$/,
		"vElu",
		0
	],
	[
		/velan$/,
		"vElan",
		0
	],
	[
		/(ammal|ammaal|ammaL)$/,
		"ammAL",
		0
	],
	[
		/mal$/,
		"mAL",
		3
	],
	[
		/valli$/,
		"vaLLi",
		0
	],
	[
		/(pillai|pillay|pilli)$/,
		"piLLai",
		0
	],
	[
		/(palli|pally)$/,
		"paLLi",
		0
	],
	[
		/pallam$/,
		"paLLam",
		0
	],
	[
		/kulam$/,
		"kuLam",
		0
	],
	[
		/kalam$/,
		"kaLam",
		0
	],
	[
		/salai$/,
		"sAlai",
		0
	],
	[
		/eesan$/,
		"Isan",
		0
	],
	[
		/esan$/,
		"Esan",
		0
	],
	[
		/eesh$/,
		"Ish",
		0
	],
	[
		/tish$/,
		"thIsh",
		0
	],
	[
		/ish$/,
		"Ish",
		0
	],
	[
		/esh$/,
		"Esh",
		0
	],
	[
		/(eswari|eshwari|eswary|eshvari|esvari)$/,
		"Esvari",
		0
	],
	[
		/(eswaran|eshwaran|eshvaran|esvaran)$/,
		"Esvaran",
		0
	],
	[
		/(eswara|eshwara)$/,
		"Esvara",
		0
	],
	[
		/(shwar|swar)$/,
		"Svar",
		0
	],
	[
		/(eendran|eendiran)$/,
		"Indhiran",
		0
	],
	[
		/(endran|endiran|enthiran)$/,
		"Endhiran",
		0
	],
	[
		/(endhi|enthi)$/,
		"Endhi",
		0
	],
	[
		/(pal|bal)$/,
		"pAl",
		2
	],
	[
		/(palan|balan)$/,
		"pAlan",
		2
	],
	[
		/(nayagam|nayakam)$/,
		"nAyagam",
		0
	],
	[
		/(nayagi|nayaki)$/,
		"nAyagi",
		0
	],
	[
		/(nayagan|nayakan|naicken|naickan)$/,
		"nAyakkan",
		0
	],
	[
		/mani$/,
		"maNi",
		2
	],
	[
		/rani$/,
		"rANi",
		0
	],
	[
		/vani$/,
		"vANi",
		0
	],
	[
		/vanan$/,
		"vANan",
		0
	],
	[
		/veni$/,
		"vENi",
		0
	],
	[
		/yani$/,
		"yANi",
		0
	],
	[
		/(moorthy|murthy|moorthi|murthi|murthee|moorthee)$/,
		"mUrthi",
		0
	],
	[
		/(gounder|goundar|kounder|koundar|gowder)$/,
		"kavuNdar",
		0
	],
	[
		/(chetty|chettiar|chettiyar)$/,
		"settiyAr",
		0
	],
	[
		/appa$/,
		"appA",
		0
	],
	[
		/amma$/,
		"ammA",
		0
	],
	[
		/akka$/,
		"akkA",
		0
	],
	[
		/(ayya|aiya|aiah|aiyah|iah|ayyah)$/,
		"aiyA",
		0
	],
	[
		/(ayyan|aiyan|iyan)$/,
		"aiyan",
		0
	],
	[
		/anni$/,
		"aNNi",
		0
	],
	[
		/othai$/,
		"Othai",
		0
	],
	[
		/([^oO])thai$/,
		"$1thAy",
		2
	],
	[
		/(thayee|thayi|thaai)$/,
		"thAyi",
		0
	],
	[
		/(ayee|ayi)$/,
		"Ayi",
		0
	],
	[
		/(thal|thaal)$/,
		"ththAL",
		2
	],
	[
		/ranam$/,
		"raNam",
		0
	],
	[
		/rnam$/,
		"rNam",
		0
	],
	[
		/kannu$/,
		"kaNNu",
		0
	],
	[
		/kanni$/,
		"kaNNi",
		0
	],
	[
		/(dhurai|durai|thurai)$/,
		"ththurai",
		2
	],
	[
		/(andi|aandi)$/,
		"ANdi",
		3
	],
	[
		/(vathi|vathy|vathee)$/,
		"vathi",
		0
	],
	[
		/(ur|oor)$/,
		"Ur",
		0
	],
	[
		/(nar|naar)$/,
		"nAr",
		0
	],
	[
		/(sekar|sekhar)$/,
		"sEkar",
		2
	],
	[
		/(sekaran|sekharan)$/,
		"sEkaran",
		0
	],
	[
		/akar$/,
		"Akar",
		2
	],
	[
		/akaran$/,
		"Akaran",
		2
	],
	[
		/dasan$/,
		"thAsan",
		0
	],
	[
		/manan$/,
		"maNan",
		0
	],
	[
		/(vaganan|vahanan)$/,
		"vAkanan",
		0
	],
	[
		/(gami|kami)$/,
		"kAmi",
		0
	],
	[
		/vasan$/,
		"vAsan",
		0
	],
	[
		/kash$/,
		"kAsh",
		0
	],
	[
		/bash$/,
		"bAsh",
		0
	],
	[
		/kasam$/,
		"kAsam",
		0
	],
	[
		/shanth$/,
		"shAnth",
		0
	],
	[
		/kanth$/,
		"kAnth",
		0
	],
	[
		/(sath|sad|sadh)$/,
		"sAth",
		3
	],
	[
		/deep$/,
		"thIp",
		0
	],
	[
		/ok$/,
		"Ok",
		0
	],
	[
		/osh$/,
		"Osh",
		0
	],
	[
		/(oth|odh|od)$/,
		"Oth",
		0
	],
	[
		/ek$/,
		"Ek",
		0
	],
	[
		/eer$/,
		"Ir",
		0
	],
	[
		/([aiu])ta$/,
		"$1thA",
		0
	],
	[
		/([aeiou])t$/,
		"$1th",
		0
	],
	[
		/(achalam|achala)$/,
		"ACalam",
		0
	],
	[
		/(kodi|godi)$/,
		"kŏdi",
		0
	],
	[
		/podi$/,
		"pŏdi",
		0
	],
	[
		/(kili|kizhi)$/,
		"kiLi",
		0
	],
	[
		/(pandi|pandy)$/,
		"pANdi",
		0
	],
	[
		/(pandian|pandiyan)$/,
		"pANdiyan",
		0
	],
	[
		/dayalan$/,
		"thayALan",
		0
	],
	[
		/(lingam|lingham)$/,
		"lingam",
		0
	],
	[
		/(dass|das|dhas)$/,
		"dAS",
		2
	],
	[
		/(kutty|kutti)$/,
		"kutti",
		2
	],
	[
		/thambi$/,
		"ththambi",
		2
	],
	[
		/(nidhi|nithi)$/,
		"nidhi",
		0
	],
	[
		/kannan$/,
		"kkaNNan",
		2
	],
	[
		/(kalai|kalay)$/,
		"kalai",
		2
	],
	[
		/(arasu|arasan|arasi)$/,
		"$1",
		0
	],
	[
		/pani$/,
		"pANi",
		0
	],
	[
		/(nithi|nidhi)$/,
		"nidhi",
		0
	],
	[
		/(mala|malai)$/,
		"$1",
		0
	],
	[
		/thi$/,
		"thi",
		0
	],
	[
		/eelan$/,
		"Ilan",
		0
	],
	[
		/(ambaram)$/,
		"Ambaram",
		0
	],
	[
		/(nandham|nantham|nandam)$/,
		"nandham",
		0
	],
	[
		/ammai$/,
		"ammai",
		0
	],
	[
		/(mayi|mai)$/,
		"mAyi",
		2
	],
	[
		/maran$/,
		"mARan",
		2
	],
	[
		/(akkal|akal)$/,
		"akkAL",
		3
	],
	[
		/kanna$/,
		"kaNNA",
		2
	],
	[
		/una$/,
		"uNA",
		2
	],
	[
		/oorani$/,
		"UraNi",
		0
	],
	[
		/magal$/,
		"magaL",
		0
	],
	[
		/ambal$/,
		"AmbAL",
		2
	],
	[
		/(bakiyam|bagyam|bhagyam|pakkiyam|bakkiyam|bagiyam|bakkyam)$/,
		"pAkkiyam",
		0
	],
	[
		/(iyar|iar)$/,
		"iyAr",
		2
	],
	[
		/(sthuri|sturi)$/,
		"SthUri",
		0
	],
	[
		/mila$/,
		"miLA",
		2
	]
];
function e2tApplySuffix(x, isTail) {
	for (let k = 0; k < E2T_SUFFIX_RULES.length; k++) {
		const r = E2T_SUFFIX_RULES[k], m = r[0].exec(x);
		if (!m) continue;
		if (!isTail && m.index < (r[2] || 0)) continue;
		x = x.slice(0, m.index) + m[0].replace(r[0], r[1]);
	}
	return x;
}
var E2T_PREFIX_RULES = [
	[/^raj(?=[aeiouAEIOU])(?!ini)/, "rAj"],
	[/^ram(?=[aeiouAEIOU])/, "rAm"],
	[/^ras(?=[aeiouAEIOU])/, "rAs"],
	[/^rah/, "rAh"],
	[/^radh/, "rAdh"],
	[/^gna/, "gnA"],
	[/^(maha|mahaa)/, "mahA"],
	[/^saha/, "sahA"],
	[/^(shiva|siva)/, "siva"],
	[/^(sri|shri|sree|shree)/, "srI"],
	[/^kali(?=[ymdpa])/, "kALi"],
	[/^vel(?=[aeiouAEIOU])/, "vEl"],
	[/^nag(?=[aeiouAEIOU])/, "nAg"],
	[/^kasi/, "kAsi"],
	[/^mari/, "mAri"],
	[/^vasu/, "vAsu"],
	[/^mani(?=[a-zA-Z])/, "maNi"],
	[/^kanni/, "kaNNi"],
	[/^kann(?=[au])/, "kaNN"],
	[/^muthu/, "muththu"],
	[/^muth(?=[aeiouAEIOU])/, "muthth"],
	[/^(bala|baala)/, "bAla"],
	[/^balaj/, "bAlAj"],
	[/^(krish|kris)/, "kirush"],
	[/^(ratna|rathina|rathna)/, "raththina"],
	[/^and(?=[aiu])/, "ANd"],
	[/^iyy(?=[aeiouAEIOU])/, "aiy"],
	[/^iy(?=[aeiouAEIOU])/, "aiy"],
	[/^ayy(?=[aA]?[pmdkn])/, "aiy"],
	[/^(ila|ela)(?![kv])/, "iLa"],
	[/^ilav/, "iLav"],
	[/^vell/, "veLL"],
	[/^(palani|pazhani)/, "pazhani"],
	[/^(tamil|thamil|thamizh|tamizh)/, "thamizh"],
	[/alag(?=[aeiouAEIOU])/, "azhag"],
	[/^arul/, "aruL"],
	[/^arumug/, "ARumug"],
	[/^anna(?=[dm])/, "aNNA"],
	[/^ashok/, "asOk"],
	[/^(kolandai|kulandai|kulanthai|kolanthai|kuzhandai|kuzhanthai|kulanthe)/, "kuzhandhai"],
	[/^karth/, "kArth"],
	[/^parth/, "pArth"],
	[/^kamar/, "kAmar"],
	[/^(madhav|madav)/, "mAthav"],
	[/^naraya/, "nArAyaN"],
	[/^jan(?=[ac])/, "jAn"],
	[/^mural/, "muraL"],
	[/^t(?=[aeiouAEIOU])/, "th"],
	[/^d(?=[aeiouAEIOU])/, "dh"],
	[/^je(?=[bgn])/, "jĕ"],
	[/^esakki/, "ĕsakki"],
	[/^peth/, "pĕth"],
	[/^ben(?=[aeiouAEIOU])/, "bĕn"],
	[/^kod(?=[aeiu])/, "kŏd"],
	[/^poth/, "pŏth"],
	[/^(jega|jaga)/, "jĕga"],
	[/^gun(?=[aeiouAEIOU])/, "guN"],
	[/^gan(?=[aeiouAEIOU])(?!ga)/, "gaN"],
	[/^karun/, "karuN"],
	[/^singar/, "singkAr"],
	[/^pud(?=[aeiu])/, "puth"],
	[/^pudh/, "puth"],
	[/^(dei|dey)v/, "theyv"],
	[/^sha(?=n[kmt]|kth)/, "sa"],
	[/^shob/, "sOb"],
	[/^sur(?=[iy])/, "sUr"],
	[/^varad/, "varath"],
	[/^sadasiv/, "sathAsiv"],
	[/^damodar/, "thAmOthar"],
	[/^uday/, "udhay"],
	[/^(sudha|suda)/, "suthA"],
	[/pandi/, "pANdi"],
	[/(gound|kound)/, "kavuNd"],
	[/(naicken|naickan|naikkan|nayakkan|nayakan)/, "nAyakkan"],
	[/(naicker|nayakkar|nayakar)/, "nAyakkar"],
	[/nathan(?=[a-z])/, "nAthan"],
	[/lakshm/, "laTchum"],
	[/laxm/, "laTchum"],
	[/(le|la)tchum/, "$1Tchum"],
	[/anan(?=[dt])/, "Anan"],
	[/(ond)(?=[aeiouAEIOU])/, "oNd"],
	[/kund/, "kuNd"],
	[/mund/, "muNd"],
	[/thand(?=[aiu])/, "thaNd"],
	[/nanjund/, "nanjuNd"],
	[/lakand/, "lakaNd"],
	[/ann(?=[aeiouAEIOU])/, "aNN"],
	[/anm/, "aNm"],
	[/kurichi|kuruchi|kurichy/, "kuRichchi"],
	[/([a-z])ngh$/, "$1ng"],
	[/ravind/, "ravInd"],
	[/(k|g)ott/, "$1Ott"],
	[/thottam$/, "thOttam"],
	[/^aravInd/, "aravind"],
	[/^(bhar|bar)ath/, "pArath"],
	[/^(bhas|bas)k/, "pASk"],
	[/^dhandap/, "thaNdap"],
	[/^dandap/, "thaNdap"],
	[/^(ezhu|elu)malai/, "Ezhumalai"],
	[/^(eswar|eshwar)/, "Isvar"],
	[/^ekamb/, "EkAmb"],
	[/^(ilay|elay)/, "iLaiy"],
	[/^(elav|ilav)/, "iLav"],
	[/^gandh/, "gAndh"],
	[/^gopal/, "gOpAl"],
	[/^harih/, "harih"],
	[/^jaya/, "jĕya"],
	[/^jeya/, "jĕya"],
	[/^jyo/, "jO"],
	[/^jagan+Ath/, "jĕgannAth"],
	[/^jeevan/, "jIvAn"],
	[/^josep/, "jOsap"],
	[/^(kamal|kamalasan)/, "kamal"],
	[/^kamalasan/, "kamalahAsan"],
	[/^kanaga/, "kanaga"],
	[/^kanniy/, "kanniy"],
	[/^kath(?=[aA])/, "kAthth"],
	[/^kiran$/, "kiraN"],
	[/^kumaras/, "kumAras"],
	[/^lakshman$/, "latchumaNan"],
	[/^maran$/, "mARan"],
	[/^mad(?=[aA]s)/, "mAd"],
	[/^narayana/, "nArAyaNa"],
	[/^neelak/, "nIlak"],
	[/^nirmal$/, "nirmal"],
	[/^pandiy/, "pANdiy"],
	[/^perum(?=[aA]l)/, "perumA"],
	[/^parth(?=[aA]s)/, "pArthth"],
	[/^poomal/, "pUmAl"],
	[/^pugal/, "pugazh"],
	[/^punniy/, "puNNiy"],
	[/^ramesh$/, "ramEsh"],
	[/^rajang/, "rAjAng"],
	[/^rajaram/, "rAjArAm"],
	[/^rasathi$/, "rAsAththi"],
	[/^rahman$/, "rakumAn"],
	[/^rahim$/, "rakIm"],
	[/^swami$/, "suvAmi"],
	[/^sathiya/, "saththiya"],
	[/^sathya(?=[a-z]{3})/, "saththiya"],
	[/^senthamar/, "senthAmar"],
	[/^subraman/, "suppiramaN"],
	[/^sundaram$/, "sundharam"],
	[/^sudalai/, "sudalai"],
	[/^sriniv/, "srIniv"],
	[/^seeniv/, "sIniv"],
	[/^annadurai/, "aNNAdhurai"],
	[/^annadhurai/, "aNNAdhurai"],
	[/^ashwin/, "aSvin"],
	[/^aditya/, "Adhithya"],
	[/^akash/, "AkAsh"],
	[/^balaji/, "bAlAji"],
	[/^chithira/, "siththira"],
	[/^chitra(?=v)/, "siththira"],
	[/^damodar/, "thAmOthar"],
	[/^dhinakar/, "dhinakar"],
	[/^dinakar/, "dhinakar"],
	[/^ganesh/, "gaNEs"],
	[/^harish$/, "harish"],
	[/^kamaraj/, "kAmarAj"],
	[/^kalaichel/, "kalaichchel"],
	[/^kolanji/, "kŏlanji"],
	[/^(kolanda|kulanda|kolantha|kulantha)(?=s)/, "kuzhandhai"],
	[/kolundu|kozhundu|kolunthu/, "kkozhundhu"],
	[/ganapath/, "gaNapath"],
	[/vinayag/, "vinAyag"],
	[/darsh/, "tharsh"],
	[/vidy/, "vithy"],
	[/esh(?=[kmpv])/, "Esh"],
	[/^pavadai/, "pAvAdai"],
	[/^marapp/, "mArapp"],
	[/^valli(?=[a-z])/, "vaLLi"],
	[/^lechum/, "latchum"],
	[/^letchum/, "latchum"],
	[/^manikand/, "maNikaNd"],
	[/^manimek/, "maNimEk"],
	[/^nithiya/, "nithya"],
	[/^nithish/, "nithish"],
	[/^prasanth/, "pirasAnth"],
	[/^suriya$/, "sUryA"],
	[/^sudhakar/, "suthAkar"],
	[/^kirubakar/, "kirupAkar"],
	[/^iyyanar|^iyanar/, "aiyanAr"],
	[/^ayyanar/, "ayyanAr"],
	[/^ayyav/, "ayyAv"],
	[/^(arunachal|arunaachal)/, "aruNAchal"],
	[/^chatram/, "saththiram"],
	[/^puduchatram/, "puthuchchaththiram"],
	[/^kaikol/, "kaikkOL"],
	[/^mook/, "mUkk"],
	[/^(nachi|natchi)muthu/, "nAchchimuthu"],
	[/^(picha|pitcha)muthu/, "pichchaimuthu"],
	[/^deivanai/, "theyvAnai"],
	[/^(karuppa|kuppa|kanna)thal/, "$1Athal"],
	[/^pavai/, "pAvai"],
	[/^pavayee/, "pAvAyi"],
	[/^thillaikk/, "thillaikk"],
	[/^(vishwa|viswa|vishva)/, "viSva"],
	[/^balamb/, "bAlAmb"],
	[/^vennai/, "veNNai"],
	[/^alavai/, "alavAy"],
	[/^andagal/, "ANdagaL"],
	[/^perumap/, "perumAp"],
	[/^puliy(?=[aA])/, "puLiy"],
	[/^muthukali/, "muththukkALi"],
	[/^thottak/, "thottakk"],
	[/^seerap/, "sIrapp"],
	[/^sowndarr/, "sowndharar"],
	[/^manik(?=[ak])/, "mANikk"],
	[/^manic/, "mANic"],
	[/^pelluku/, "pellukku"],
	[/^(podi|bodi)nay/, "pŏdinAy"],
	[/^(podi|bodi)naick/, "pŏdinAyakk"],
	[/^kuthich/, "kuththich"],
	[/^kakkav/, "kAkkAv"],
	[/^koner/, "kOnEr"],
	[/^thammanay/, "thammanAy"],
	[/^singal/, "singkAL"],
	[/^rasipur/, "irAsipur"],
	[/^namak/, "nAmak"],
	[/^pill(?=[aeiy])/, "piLL"],
	[/^venkat$/, "vengkat"],
	[/^kaver/, "kAvEr"],
	[/^papp/, "pApp"],
	[/^papathi$/, "pAppAththi"],
	[/^thay(?=[ae])/, "thAy"],
	[/^thamar/, "thAmar"],
	[/^(sh|s)anth(?=[ai])/, "sAnth"],
	[/^sAnthan/, "santhAn"],
	[/^(sh|s)enbag/, "seNbag"],
	[/^sujath/, "sujAth"],
	[/^su(sh|s)il/, "susIl"],
	[/^kanch/, "kAnch"],
	[/^karpag/, "kaRpag"],
	[/^por(?=[ks])/, "poR"],
	[/^unnam/, "uNNAm"],
	[/^ved(?=[aA])/, "vEdh"],
	[/^renu/, "rENu"],
	[/^gayath/, "gAyath"],
	[/^savith/, "sAviththi"],
	[/^(bhav|bav)ani/, "pavAni"],
	[/^(bhanu|banu)/, "pAnu"],
	[/^(bhag|bag)y/, "pAkkiy"],
	[/^abira/, "apirA"],
	[/^ammas/, "ammAs"],
	[/^malath/, "mAlath"],
	[/^parvath/, "pArvath"],
	[/^rajathi$/, "rAjAththi"],
	[/^rakk/, "rAkk"],
	[/^ramani$/, "ramaNi"],
	[/^sarad|^sarath(?=[aA]$)/, "sArath"],
	[/^sarala$/, "saraLA"],
	[/^komal/, "kOmaL"],
	[/^manjul/, "manjuL"],
	[/^parimal/, "parimaL"],
	[/^nalini/, "naLini"],
	[/^rukmin/, "rukmiN"],
	[/^suguna/, "suguNa"],
	[/^kannig|^kannik/, "kannik"],
	[/^kanniy/, "kanniy"],
	[/^kanniam/, "kanniyam"],
	[/^visal/, "visAlA"],
	[/^meena/, "mIna"],
	[/^mInal$/, "mInAL"],
	[/^lavany/, "lAvaNy"],
	[/^kavya/, "kAvya"],
	[/^kripa|^kirupa/, "kirupA"],
	[/^ammap/, "ammAp"],
	[/^attur/, "AththUr"],
	[/^athanur/, "Aththanur"],
	[/^alam(?=[bp])/, "Alam"],
	[/^anaip/, "Anaip"],
	[/^avinas/, "avinAs"],
	[/^bazar/, "bajAr"],
	[/^(mudali|mudaly)/, "muthali"],
	[/^naidu/, "nAyudu"],
	[/^nadar/, "nAdAr"],
	[/^nayak/, "nAyakk"],
	[/^iyeng/, "aiyangk"],
	[/^(antony|anthony)/, "anthONi"],
	[/^(arokia|arockia|arogya)/, "arOkkiya"],
	[/^(sebast)/, "sepAst"],
	[/^xavier/, "sEviyar"],
	[/^michael/, "maikkEl"],
	[/^peter/, "pIttar"],
	[/^james/, "jEmS"],
	[/^david/, "dEvid"],
	[/^daniel/, "dEniyal"],
	[/^(mohamed|mohammed|muhammad|mohammad|muhammed)/, "mukamathu"],
	[/^(ahamed|ahmed|ahamad)/, "akamathu"],
	[/^ibrahim/, "ipRAkim"],
	[/^ismail/, "iSmAyil"],
	[/^kadar/, "kAthar"],
	[/^basha/, "pAshA"],
	[/^(fathima|fatima)/, "pAththimA"],
	[/^ayesha/, "AyishA"],
	[/^sheik/, "shEk"],
	[/^rasool/, "rasUl"],
	[/^jainul/, "jainul"],
	[/^abdul/, "apthul"],
	[/^rahman/, "rakumAn"],
	[/^(jaga|jega)dee/, "jĕgathI"],
	[/^jegadee/, "jĕgathI"],
	[/^elizab/, "elisap"],
	[/^(elakk|ilakk)/, "ilakk"],
	[/^geeta$/, "gIthA"],
	[/^jenif/, "jenip"],
	[/^jansi|^jancy/, "jAnsi"],
	[/^hema(?=v)/, "hEmA"],
	[/^prema(?=v)/, "pirEmA"],
	[/^neela(?=v)/, "nIlA"],
	[/^padma(?=v)/, "pathmA"],
	[/^leela(?=v)/, "lIlA"],
	[/^kamalamb/, "kamalAmb"],
	[/^log(?=amb)/, "lOk"],
	[/^mohanamb/, "mOkanAmb"],
	[/^sundaramb/, "sundharAmb"],
	[/^selvamb/, "selvAmb"],
	[/^sarathamb/, "sArathAmb"],
	[/^kamatch|^kamach|^kamaksh/, "kAmATch"],
	[/^angayar/, "angkayaR"],
	[/^mangayar/, "mangkaiyaR"],
	[/^akiland/, "akilANd"],
	[/^archan/, "archchan"],
	[/^arukk/, "arukk"],
	[/^annak/, "annak"],
	[/^annal/, "annal"],
	[/^annam/, "annam"],
	[/^anbuk/, "anbukk"],
	[/^sangeet/, "sangkIth"],
	[/^dhanab|^dhanap/, "dhanap"]
];
function e2tTokenize(w) {
	const toks = [];
	const push = (t) => toks.push(t);
	const V = {
		A: "aa",
		I: "ii",
		U: "uu",
		E: "ee",
		O: "oo"
	};
	let i = 0;
	while (i < w.length) {
		const ch = w[i], nx = w[i + 1] || "", nx2 = w[i + 2] || "";
		if (e2tIsV(ch)) {
			let v, len = 1;
			if (V[ch]) v = V[ch];
			else if (ch === "ĕ") v = "e!";
			else if (ch === "ŏ") v = "o!";
			else {
				const two = ch + nx;
				if (two === "aa") {
					v = "aa";
					len = 2;
				} else if (two === "ai") {
					v = "ai";
					len = 2;
				} else if (two === "ay" && nx2 && !e2tIsV(nx2) && nx2 !== "y") {
					v = "ai";
					len = 2;
				} else if (two === "au" || two === "ou" || two === "ow" && nx2 && !e2tIsV(nx2)) {
					v = "au";
					len = 2;
				} else if (two === "ee" || two === "ii" || two === "ea") {
					v = "ii";
					len = 2;
				} else if (two === "ie") {
					v = i + 2 >= w.length ? "i" : "ii";
					len = 2;
				} else if (two === "oo" || two === "uu") {
					v = "uu";
					len = 2;
				} else if (two === "ae") {
					v = "ee";
					len = 2;
				} else if (two === "oa") {
					v = "oo";
					len = 2;
				} else if (two === "ei") {
					push({
						t: "V",
						v: "e"
					});
					push({
						t: "C",
						c: "y",
						dead: true
					});
					i += 2;
					continue;
				} else if (two === "eu") {
					push({
						t: "C",
						c: "y"
					});
					v = "uu";
					len = 2;
				} else v = ch;
			}
			push({
				t: "V",
				v
			});
			i += len;
			continue;
		}
		const rest = w.slice(i);
		let m;
		const C2 = (a, b, n) => {
			push({
				t: "C",
				c: a,
				dead: true
			});
			push({
				t: "C",
				c: b
			});
			i += n;
		};
		if (m = /^nh/.exec(rest)) {
			push({
				t: "C",
				c: "n"
			});
			i += 2;
			continue;
		}
		if (m = /^(ksh|x)/.exec(rest)) {
			C2("k", m[1] === "x" ? "S" : "sh", m[0].length);
			continue;
		}
		if (m = /^ks(?!h)/.exec(rest)) {
			C2("k", "S", 2);
			continue;
		}
		if (m = /^(chch|cch|tch)/.exec(rest)) {
			C2("ch", "ch", m[0].length);
			continue;
		}
		if (m = /^(nch|nj)/.exec(rest)) {
			C2("nj", "ch", m[0].length);
			continue;
		}
		if (m = /^(ndr|ndhr|nthr)/.exec(rest)) {
			push({
				t: "C",
				c: "n",
				dead: true
			});
			push({
				t: "C",
				c: "th"
			});
			push({
				t: "V",
				v: "i"
			});
			push({
				t: "C",
				c: "r"
			});
			i += m[0].length;
			continue;
		}
		if (m = /^(ndh|nth|nd|nt)/.exec(rest)) {
			C2("n", "th", m[0].length);
			continue;
		}
		if (m = /^Nd/.exec(rest)) {
			C2("N", "t", 2);
			continue;
		}
		if (m = /^(ngk|nkh|ngg|nk|ngh|ng)/.exec(rest)) {
			if (i + m[0].length >= w.length && (m[1] === "ng" || m[1] === "ngh")) {
				push({
					t: "C",
					c: "ng",
					dead: true
				});
				i += m[0].length;
				continue;
			}
			C2("ng", "k", m[0].length);
			continue;
		}
		if (m = /^Nm/.exec(rest)) {
			C2("N", "m", 2);
			continue;
		}
		if (m = /^NN/.exec(rest)) {
			C2("N", "N", 2);
			continue;
		}
		if (m = /^LL/.exec(rest)) {
			C2("L", "L", 2);
			continue;
		}
		if (m = /^(rth|rdh)/.exec(rest)) {
			push({
				t: "C",
				c: "r",
				dead: true
			});
			C2("th", "th", 3);
			continue;
		}
		if (m = /^rk(?=[aeiouAEIOU])/.exec(rest)) {
			push({
				t: "C",
				c: "r",
				dead: true
			});
			C2("k", "k", 2);
			continue;
		}
		if (m = /^rpp?(?=[aeiouAEIOU])/.exec(rest)) {
			push({
				t: "C",
				c: "r",
				dead: true
			});
			C2("p", "p", m[0].length);
			continue;
		}
		if (m = /^rn/.exec(rest)) {
			C2("r", "N", 2);
			continue;
		}
		if (m = /^(kth|kt)/.exec(rest)) {
			C2("k", "th", m[0].length);
			continue;
		}
		if (m = /^sth/.exec(rest)) {
			C2("S", "th", 3);
			continue;
		}
		if (m = /^st/.exec(rest)) {
			C2("S", i === 0 ? "t" : "th", 2);
			continue;
		}
		if (m = /^(sw|sv)/.exec(rest)) {
			C2("S", "v", 2);
			continue;
		}
		if (m = /^(shr|sr)/.exec(rest)) {
			C2("S", "r", m[0].length);
			continue;
		}
		if (m = /^(sm|sn|sk|sp|sl)/.exec(rest)) {
			C2("S", m[0][1], 2);
			continue;
		}
		if (m = /^(shm|shn|sht|shp|shk)/.exec(rest)) {
			C2("sh", m[0][2] === "n" ? "N" : m[0][2], 3);
			continue;
		}
		if (m = /^(pr|br)/.exec(rest)) {
			push({
				t: "C",
				c: "p"
			});
			push({
				t: "V",
				v: "i"
			});
			push({
				t: "C",
				c: "r"
			});
			i += 2;
			continue;
		}
		if (m = /^(kr|gr)/.exec(rest)) {
			push({
				t: "C",
				c: "k"
			});
			push({
				t: "V",
				v: "i"
			});
			push({
				t: "C",
				c: "r"
			});
			i += 2;
			continue;
		}
		if (m = /^(thr|dhr|tr|dr)/.exec(rest)) {
			C2("th", "r", m[0].length);
			continue;
		}
		if (m = /^(thy|dhy|ty|dy)(?=[aeiouAEIOU])/.exec(rest)) {
			C2("th", "y", m[0].length);
			continue;
		}
		if (m = /^(tth|thth|ddh|dhdh)/.exec(rest)) {
			C2("th", "th", m[0].length);
			continue;
		}
		if (m = /^(tm|dm|thm|dhm)/.exec(rest)) {
			C2("th", "m", m[0].length);
			continue;
		}
		if (m = /^(tn|dn|thn|dhn)/.exec(rest)) {
			C2("th", "n", m[0].length);
			continue;
		}
		if (m = /^(tv|dv|thv|dhv|tw|dw)/.exec(rest)) {
			C2("th", "v", m[0].length);
			continue;
		}
		if (m = /^(bd|bdh)/.exec(rest)) {
			C2("p", "th", m[0].length);
			continue;
		}
		if (m = /^(gn|jn)/.exec(rest)) {
			if (i === 0) push({
				t: "C",
				c: "nj"
			});
			else C2("k", "n", 0);
			i += 2;
			continue;
		}
		if (m = /^ny/.exec(rest)) {
			C2("N", "y", 2);
			continue;
		}
		if (m = /^(kk|ck|cc|gg|kg|tt|dd|pp|bb|mm|nn|ll|rr|ss|yy|vv|jj|zz)/.exec(rest)) {
			const map = {
				kk: "k",
				ck: "k",
				cc: "k",
				gg: "k",
				kg: "k",
				tt: "t",
				dd: "t",
				pp: "p",
				bb: "p",
				mm: "m",
				nn: "nn",
				ll: "l",
				rr: "r",
				ss: "S",
				yy: "y",
				vv: "v",
				jj: "j",
				zz: "j"
			};
			C2(map[m[0]], map[m[0]], 2);
			continue;
		}
		if (m = /^(th|dh|sh|ch|bh|kh|gh|ph|zh|jh|wh)/.exec(rest)) {
			const c = {
				th: "th",
				dh: "th",
				sh: "sh",
				ch: "ch",
				bh: "p",
				kh: "k",
				gh: "k",
				ph: "p",
				zh: "zh",
				jh: "j",
				wh: "v"
			}[m[0]];
			if (c === "ch" && i > 0 && e2tIsV(w[i - 1]) && e2tIsV(nx2) && !/[AIUEO]/.test(w[i - 1])) push({
				t: "C",
				c: "ch",
				dead: true
			});
			push({
				t: "C",
				c
			});
			i += 2;
			continue;
		}
		let c = ch;
		if (c === "c") c = /[eiy]/.test(nx) ? "ch" : "k";
		else if (c === "q") c = "k";
		else if (c === "g") c = "k";
		else if (c === "d") c = "t";
		else if (c === "b") c = "p";
		else if (c === "f") c = "p";
		else if (c === "w") c = "v";
		else if (c === "z") c = "j";
		else if (c === "J") c = "j";
		else if (c === "s") c = "ch";
		else if (c === "h") c = i === 0 ? "h" : "k";
		else if (c === "n") c = i === 0 || nx === "A" || nx + nx2 === "aa" ? "n" : "nn";
		else if (c === "y" && i > 0 && !e2tIsV(w[i - 1]) && !e2tIsV(nx)) {
			push({
				t: "V",
				v: "i"
			});
			i += 1;
			continue;
		}
		if (!TA_C[c]) {
			i += 1;
			continue;
		}
		push({
			t: "C",
			c
		});
		i += 1;
	}
	return toks;
}
function e2tRender(toks, mode) {
	let out = "", prevC = false, lastV = null;
	const n = toks.length;
	const openSyl = (idx) => {
		const c1 = toks[idx + 1], v2 = toks[idx + 2];
		return !!(c1 && c1.t === "C" && !c1.dead && v2 && v2.t === "V");
	};
	for (let k = 0; k < n; k++) {
		const tk = toks[k];
		if (tk.t === "C") {
			if (prevC) out += PULLI;
			out += TA_C[tk.c];
			prevC = true;
			lastV = null;
			if (tk.dead) {
				out += PULLI;
				prevC = false;
			}
			continue;
		}
		let v = tk.v;
		const atEnd = k === n - 1;
		if (v === "e!") v = "e";
		else if (v === "o!") v = "o";
		else {
			if (v === "a" && atEnd && mode === "word" && prevC) v = "aa";
			if (v === "e") {
				if (atEnd) {
					if (mode === "word" && prevC && k >= 3) {
						if (toks[k - 1].c === "t") v = "u";
						else continue;
					} else v = "ee";
				} else {
					const c1 = toks[k + 1];
					if (openSyl(k) && !/^(r|y|zh|L|R)$/.test(c1.c)) v = "ee";
				}
			}
			if (v === "o" && (atEnd || openSyl(k))) v = "oo";
		}
		if (prevC) out += TA_V_SIGN[v];
		else if (lastV !== null) out += (/^(i|ii|e|ee|ai)$/.test(lastV) ? "ய" : "வ") + TA_V_SIGN[v];
		else out += TA_V_IND[v];
		prevC = false;
		lastV = v;
	}
	if (prevC) out += PULLI;
	return out;
}
function e2tEngine(w, mode, isTail) {
	let x = w;
	E2T_PRE_RULES.forEach((r) => {
		x = x.replace(r[0], r[1]);
	});
	if (mode === "word") x = e2tApplySuffix(x, !!isTail);
	E2T_PREFIX_RULES.forEach((r) => {
		x = x.replace(r[0], r[1]);
	});
	x = x.replace(/aA/g, "A").replace(/eE/g, "I").replace(/iI/g, "I").replace(/oO/g, "O").replace(/uU/g, "U").replace(/eI/g, "I");
	if (mode === "prefix") x = x.replace(/ng$/, "ngk");
	return e2tRender(e2tTokenize(x), mode);
}
var E2T_KEEP_LONG = /^(ayya|aiya|amma|appa|akka|anna|maha|radha|seetha|sita|uma|karuna|sada|saha|thatha|kala|leela|nila|meena|durga|ganga|renuga|renuka|amsa|pooja|puja|ambika|usha|asha)$/;
var E2T_DOUBLE_AFTER_IU = /^(kumar|kumari|kumaran|kannan|kannu|kanni|priya|pandi|pandian|pandiyan|patti|patty|palayam|palaiyam|kulam|kovil|koil|kottai|kodi|thambi|thurai|durai|dhurai|selv|pillai|pillay|kutty|kutti|kuttan|ponnu|thai|thal|kili|pattinam|thottam|theru|kadai|kudi|chandran|chandiran|chettiar|chetty|kali|thevar|pettai|koundar|gounder|kounder)/;
var E2T_DOUBLE_AFTER_A = /^(durai|thurai|dhurai|thambi|kannu|kannan|kanni|patti|patty|pillai|pillay|priya|thai|thal|kutty|kutti|kodi|ponnu|chandran|chandiran|thevar|kottai|thottam)/;
function e2tDictPart(latin, mode, rLat) {
	let t = E2T_DICT[latin];
	if (t === void 0) return null;
	if (mode === "prefix" && t.endsWith("ா") && /a$/.test(latin) && !/aa$/.test(latin)) {
		if (!(E2T_KEEP_LONG.test(latin) || /^dev/.test(rLat || ""))) t = t.slice(0, -1);
	}
	return t;
}
function e2tJoin(a, b, lLat, rLat) {
	if (!a) return b;
	if (!b) return a;
	const IND = {
		"அ": "",
		"ஆ": "ா",
		"இ": "ி",
		"ஈ": "ீ",
		"உ": "ு",
		"ஊ": "ூ",
		"எ": "ெ",
		"ஏ": "ே",
		"ஐ": "ை",
		"ஒ": "ொ",
		"ஓ": "ோ",
		"ஔ": "ௌ"
	};
	if (a.endsWith("ன்") && /^(j|ch|c[ei])/.test(rLat)) a = a.slice(0, -2) + "ஞ்";
	else if (a.endsWith("ன்") && /^(th|dh|t|d)(?!r)/.test(rLat)) a = a.slice(0, -2) + "ந்";
	const first = b[0], last = a[a.length - 1];
	if (IND[first] !== void 0) {
		const sign = IND[first], rest = b.slice(1);
		if (a.endsWith(PULLI)) return a.slice(0, -1) + sign + rest;
		if (last === "ு") return a.slice(0, -1) + sign + rest;
		if (/[ிீெேை]/.test(last)) return a + "ய" + sign + rest;
		if (/[ூொோௌா]/.test(last)) return a + "வ" + sign + rest;
		if (/[\u0B95-\u0BB9]/.test(last)) return a + sign + rest;
		return a + b;
	}
	const dbl = {
		"க": "க்",
		"ச": "ச்",
		"த": "த்",
		"ப": "ப்"
	}[first];
	if (dbl && b[1] !== PULLI) {
		const afterShort = /[ிீுூைெே]/.test(last);
		const afterA = /[\u0B95-\u0BB9]/.test(last) || last === "ா";
		if (afterShort && E2T_DOUBLE_AFTER_IU.test(rLat)) return a + dbl + b;
		if (afterA && E2T_DOUBLE_AFTER_A.test(rLat)) return a + dbl + b;
	}
	return a + b;
}
var E2T_NO_SPLIT_VV = /^(ai|au|aa|ee|oo|ii|ei|ou|ea|ie|ae|oa|ay|ey|oy|uy)$/;
var E2T_SHORT_L_OK = /^(sri|ram|raj|vel|uma|pon|nag|sel|sen|nal|kal|mal|bal|pal)$/;
var E2T_SHORT_R_OK = /^(vel|das|pal|bal|mal|nar|ayi|dev|sri|mani|rani|vani)$/;
function e2tWord(wl) {
	if (E2T_DICT[wl]) return E2T_DICT[wl];
	let best = null;
	for (let i = 3; i <= wl.length - 3; i++) {
		const L = wl.slice(0, i), Rr = wl.slice(i);
		if (E2T_NO_SPLIT_VV.test(wl[i - 1] + wl[i])) continue;
		if (/^h/.test(Rr)) continue;
		let dl = e2tDictPart(L, "prefix", Rr), dr = e2tDictPart(Rr, "word");
		if (dl !== null && L.length <= 3 && !E2T_SHORT_L_OK.test(L)) dl = null;
		if (dr !== null && Rr.length <= 3 && !E2T_SHORT_R_OK.test(Rr)) dr = null;
		if (dl === null && dr === null) continue;
		if (dl === null && L.length < 4) continue;
		if (dr === null && Rr.length < 4) continue;
		const both = dl !== null && dr !== null;
		if (!both && (dr === null || Rr.length < 5 || L.length < 4)) continue;
		let score = both ? 100 + wl.length : Rr.length;
		const lEndsV = /[aeiou]$/.test(L), rStartsV = /^[aeiou]/.test(Rr);
		if (!lEndsV && rStartsV) score -= both ? 10 : 40;
		if (lEndsV && rStartsV) score -= both ? 5 : 15;
		if (/^(nn|ll|mm|pp|tt|kk|rr|ss|yy|vv|dd|bb|gg)/.test(Rr)) score -= 60;
		if (/^[^aeiou]{2}/.test(Rr) && !/^(th|dh|sh|ch|kr|pr|br|tr|dr|sr|sw|st|gn|kn|ks|ph|bh|kh|gh|zh|nj)/.test(Rr)) score -= 40;
		if (/^(y|w)/.test(Rr) && dr === null) score -= 5;
		if (dl === null && /e$/.test(L)) score -= 20;
		if (dr === null && dl !== null && dl.endsWith(PULLI) && /^[aeiou]/.test(Rr) === false && !/^(k|p|th|ch|s|m|n|v|r|l)/.test(Rr)) score -= 40;
		if (dr === null && dl !== null && /(sh|s|j|z)$/.test(L) && /^[wvy]/.test(Rr)) score -= 60;
		if (dl === null && dr !== null && /(sh|j)$/.test(L)) score -= 30;
		if (score <= 0) continue;
		if (!best || score > best.score) best = {
			score,
			L,
			R: Rr,
			dl,
			dr
		};
	}
	if (best) {
		const left = best.dl !== null ? best.dl : e2tEngine(best.L, "prefix");
		let right = best.dr !== null ? best.dr : e2tEngine(best.R, "word", true);
		if (best.dr !== null && /^e(?!e)/.test(best.R) && right.charAt(0) === "ஈ") right = "ஏ" + right.slice(1);
		return e2tJoin(left, right, best.L, best.R);
	}
	return e2tEngine(wl, "word", false);
}
var E2T_ACRONYMS = /^(SBI|KVB|IOB|UBI|BOB|BOI|HDFC|ICICI|IDBI|PNB|CUB|TMB|LVB|UCO|IFSC|NEFT|RTGS|UPI|UAN|ESI|EPF|PF|DN|DNO|HNO|PO|TK|DT|VIA|NH|SH|GH|PHC|LIG|MIG|EWS|TNHB|TNEB|EB|RS|BSNL|ATM|PIN|NGO|KVK|CSI|RC|LKG|UKG|MGR|DMK|ADMK|PMK|MDMK|VCK|DMDK|TVS|CBE|SLM|NMK)$/;
function englishToTamil(str) {
	if (!str) return "";
	let s = String(str).trim();
	if (typeof E2T_USER_PHRASES !== "undefined") E2T_USER_PHRASES.forEach((m) => {
		s = s.replace(m[0], m[1]);
	});
	E2T_PHRASES.forEach((m) => {
		s = s.replace(m[0], m[1]);
	});
	s = s.replace(/(\d+)\s*(st|nd|rd|th)\b/gi, "$1வது");
	s = s.replace(/\b(s|d)\s*\/\s*o\b\.?/gi, "த/பெ").replace(/\bw\s*\/\s*o\b\.?/gi, "க/பெ").replace(/\bc\s*\/\s*o\b\.?/gi, "C/o");
	s = s.replace(/\b(mr|thiru|sri|shri|tr)\.\s*(?=[A-Za-z])/gi, "திரு. ").replace(/\b(mrs|smt|tmt|thirumathi)\.\s*(?=[A-Za-z])/gi, "திருமதி. ").replace(/\bselvi\.\s*(?=[A-Za-z])/gi, "செல்வி. ").replace(/\bselvan\.\s*(?=[A-Za-z])/gi, "செல்வன். ").replace(/\blate\.?\s+(?=[A-Za-z])/gi, "மறைந்த ");
	s = s.replace(/\s*[\[\(]\s*H\s*[\]\)]/g, " (கணவர்)").replace(/\s*[\[\(]\s*F\s*[\]\)]/g, " (தந்தை)").replace(/\s*[\[\(]\s*W\s*[\]\)]/g, " (மனைவி)").replace(/\s*[\[\(]\s*M\s*[\]\)]/g, " (தாய்)");
	return s.replace(/[A-Za-z]+/g, function(match) {
		if (match.length === 1) return match.toUpperCase();
		const wl = match.toLowerCase();
		if (typeof E2T_USER !== "undefined" && E2T_USER[wl]) return E2T_USER[wl];
		if (E2T_DICT[wl]) return E2T_DICT[wl];
		if (E2T_ACRONYMS.test(match.toUpperCase()) && (match === match.toUpperCase() || match.length <= 3)) return match.toUpperCase();
		if (/^[A-Z]{2,3}$/.test(match)) return match;
		return e2tWord(wl);
	});
}
function fmt(n) {
	if (!n || parseFloat(n) === 0) return "0";
	return parseFloat(n).toLocaleString("en-IN");
}
function numToTamilWords(num) {
	if (!num || parseFloat(num) === 0) return "சுழியம்";
	const words1to99 = [
		"",
		"ஒன்று",
		"இரண்டு",
		"மூன்று",
		"நான்கு",
		"ஐந்து",
		"ஆறு",
		"ஏழு",
		"எட்டு",
		"ஒன்பது",
		"பத்து",
		"பதினொன்று",
		"பன்னிரண்டு",
		"பதிமூன்று",
		"பதினான்கு",
		"பதினைந்து",
		"பதினாறு",
		"பதினேழு",
		"பதினெட்டு",
		"பத்தொன்பது",
		"இருபது",
		"இருபத்தொன்று",
		"இருபத்திரண்டு",
		"இருபத்திமூன்று",
		"இருபத்தினான்கு",
		"இருபத்தைந்து",
		"இருபத்தாறு",
		"இருபத்தேழு",
		"இருபத்தெட்டு",
		"இருபத்தொன்பது",
		"முப்பது",
		"முப்பத்தொன்று",
		"முப்பத்திரண்டு",
		"முப்பத்திமூன்று",
		"முப்பத்தினான்கு",
		"முப்பத்தைந்து",
		"முப்பத்தாறு",
		"முப்பத்தேழு",
		"முப்பத்தெட்டு",
		"முப்பத்தொன்பது",
		"நாற்பது",
		"நாற்பத்தொன்று",
		"நாற்பத்திரண்டு",
		"நாற்பத்திமூன்று",
		"நாற்பத்தினான்கு",
		"நாற்பத்தைந்து",
		"நாற்பத்தாறு",
		"நாற்பத்தேழு",
		"நாற்பத்தெட்டு",
		"நாற்பத்தொன்பது",
		"ஐம்பது",
		"ஐம்பத்தொன்று",
		"ஐம்பத்திரண்டு",
		"ஐம்பத்திமூன்று",
		"ஐம்பத்தினான்கு",
		"ஐம்பத்தைந்து",
		"ஐம்பத்தாறு",
		"ஐம்பத்தேழு",
		"ஐம்பத்தெட்டு",
		"ஐம்பத்தொன்பது",
		"அறுபது",
		"அறுபத்தொன்று",
		"அறுபத்திரண்டு",
		"அறுபத்திமூன்று",
		"அறுபத்தினான்கு",
		"அறுபத்தைந்து",
		"அறுபத்தாறு",
		"அறுபத்தேழு",
		"அறுபத்தெட்டு",
		"அறுபத்தொன்பது",
		"எழுபது",
		"எழுபத்தொன்று",
		"எழுபத்திரண்டு",
		"எழுபத்திமூன்று",
		"எழுபத்தினான்கு",
		"எழுபத்தைந்து",
		"எழுபத்தாறு",
		"எழுபத்தேழு",
		"எழுபத்தெட்டு",
		"எழுபத்தொன்பது",
		"எண்பது",
		"எண்பத்தொன்று",
		"எண்பத்திரண்டு",
		"எண்பத்திமூன்று",
		"எண்பத்தினான்கு",
		"எண்பத்தைந்து",
		"எண்பத்தாறு",
		"எண்பத்தேழு",
		"எண்பத்தெட்டு",
		"எண்பத்தொன்பது",
		"தொண்ணூறு",
		"தொண்ணூத்தொன்று",
		"தொண்ணூத்திரண்டு",
		"தொண்ணூத்திமூன்று",
		"தொண்ணூத்தினான்கு",
		"தொண்ணூத்தைந்து",
		"தொண்ணூத்தாறு",
		"தொண்ணூத்தேழு",
		"தொண்ணூத்தெட்டு",
		"தொண்ணூத்தொன்பது"
	];
	const hundreds = [
		"",
		"நூறு",
		"இருநூறு",
		"முந்நூறு",
		"நானூறு",
		"ஐந்நூறு",
		"அறுநூறு",
		"எழுநூறு",
		"எண்ணூறு",
		"தொள்ளாயிரம்"
	];
	const hundredsPrefix = [
		"",
		"நூற்று",
		"இருநூற்று",
		"முந்நூற்று",
		"நானூற்று",
		"ஐந்நூற்று",
		"அறுநூற்று",
		"எழுநூற்று",
		"எண்ணூற்று",
		"தொள்ளாயிரத்து"
	];
	function get999(n) {
		if (n === 0) return "";
		if (n < 100) return words1to99[n];
		const h = Math.floor(n / 100);
		const rem = n % 100;
		if (rem === 0) return hundreds[h];
		else return hundredsPrefix[h] + " " + words1to99[rem];
	}
	function getPrefix999(n) {
		if (n === 1) return "ஒரு";
		return get999(n);
	}
	let parts = [];
	let n = Math.floor(parseFloat(num));
	if (n >= 1e7) {
		const crore = Math.floor(n / 1e7);
		parts.push(getPrefix999(crore) + " கோடி");
		n %= 1e7;
	}
	if (n >= 1e5) {
		const lakh = Math.floor(n / 1e5);
		n %= 1e5;
		parts.push(getPrefix999(lakh) + (n > 0 ? " லட்சத்து" : " லட்சம்"));
	}
	if (n >= 1e3) {
		const thou = Math.floor(n / 1e3);
		n %= 1e3;
		parts.push(getPrefix999(thou) + (n > 0 ? " ஆயிரத்து" : " ஆயிரம்"));
	}
	if (n > 0) parts.push(get999(n));
	return parts.join(" ") + " மட்டும்";
}
var TERM_DEFS = [
	{
		key: "bonus",
		rowId: "row_bonus",
		valId: "t_bonus",
		lblId: "lbl_bonus"
	},
	{
		key: "gratuity",
		rowId: "row_gratuity",
		valId: "t_gratuity",
		lblId: "lbl_gratuity"
	},
	{
		key: "compensation",
		rowId: "row_compensation",
		valId: "t_compensation",
		lblId: "lbl_compensation"
	},
	{
		key: "noticePay",
		rowId: "row_notice",
		valId: "t_notice",
		lblId: "lbl_notice"
	},
	{
		key: "elAmount",
		rowId: "row_el",
		valId: "t_el",
		lblId: "lbl_el"
	},
	{
		key: "exGratia",
		rowId: "row_exgratia",
		valId: "t_exgratia",
		lblId: "lbl_exgratia"
	}
];
var ALPHAS = [
	"a)",
	"b)",
	"c)",
	"d)",
	"e)",
	"f)"
];
function computeFill(w, common) {
	const tamName = englishToTamil(w.name);
	const dispName = w.tno && tamName ? `${w.tno} - ${tamName}` : tamName || w.tno || "";
	const agDate = w.agDate || common.agDate || "";
	const payDate = w.payDate || w.chequeDate || "-----------------";
	const taLines = (w.addressLines || []).map((a) => englishToTamil(String(a)).replace(/\s*,\s*/g, ", ").replace(/[,\s]+$/, "").trim()).filter((a) => a !== "");
	const lastPart = (l) => l.split(",").pop()?.trim() ?? "";
	const uniqLines = taLines.filter((l, i) => i === 0 || l !== taLines[i - 1] && l !== lastPart(taLines[i - 1]));
	const terms = [];
	let dispCount = 0;
	for (const t of TERM_DEFS) {
		const value = Number(w[t.key]) || 0;
		const visible = value !== 0;
		terms.push({
			...t,
			value,
			visible,
			letter: visible ? ALPHAS[dispCount++] ?? "" : ""
		});
	}
	const total = parseFloat(String(w.totalAmount)) || terms.reduce((s, t) => s + (t.value || 0), 0);
	const NB = "\xA0";
	let bankDisp = "________";
	if (w.bankAc && w.ifsc) bankDisp = `${w.bankAc} (IFSC${NB}:${NB}${w.ifsc})`;
	else if (w.bankAc) bankDisp = w.bankAc;
	else if (w.ifsc) bankDisp = `________ (IFSC${NB}:${NB}${w.ifsc})`;
	return {
		rep1: w.rep1 || common.rep1 || "",
		rep2: w.rep2 || common.rep2 || "",
		dispName,
		address: uniqLines.join(", "),
		phone: w.phone || "",
		terms,
		total,
		words: numToTamilWords(total),
		bankDisp,
		payDate,
		agDate,
		wit1: w.wit1 || common.wit1 || "",
		wit2: w.wit2 || common.wit2 || "",
		rcptDate: w.rcptDate || w.payDate || agDate || ""
	};
}
function setText(root, id, text) {
	const el = root.querySelector("#" + id);
	if (el) el.textContent = text;
}
function applyFill(root, fill) {
	if (!fill) return;
	setText(root, "rep1", fill.rep1);
	setText(root, "rep2", fill.rep2);
	setText(root, "w_name", fill.dispName);
	setText(root, "w_full_address", fill.address);
	setText(root, "w_phone_label", fill.phone ? "கைபேசி எண் :" : "");
	setText(root, "w_phone", fill.phone);
	for (const t of fill.terms) {
		const row = root.querySelector("#" + t.rowId);
		if (row) row.style.display = t.visible ? "" : "none";
		setText(root, t.lblId, t.letter);
		setText(root, t.valId, fmt(t.value));
	}
	setText(root, "t_total", fmt(fill.total));
	setText(root, "t_words", fill.words);
	setText(root, "t_total2", fmt(fill.total));
	setText(root, "t_total2_words", fill.words);
	setText(root, "bank_ac", fill.bankDisp);
	setText(root, "r_bank_ac", fill.bankDisp);
	setText(root, "pay_date", fill.payDate);
	setText(root, "r_pay_date", fill.payDate);
	setText(root, "ag_date", fill.agDate);
	setText(root, "wit1", fill.wit1);
	setText(root, "wit2", fill.wit2);
	setText(root, "r_name", fill.dispName);
	setText(root, "r_amount", fmt(fill.total));
	setText(root, "r_amount_words", fill.words);
	setText(root, "rcpt_date", fill.rcptDate);
}
var EDITABLE_TEMPLATE_SELECTOR = [
	".doc-title",
	".party-label-left",
	".party-mgmt",
	".company-address p",
	".rep-left p",
	".underline-text",
	".para",
	".para-no-indent",
	".terms-title",
	".terms-table td:first-child",
	".terms-table .total-row td:first-child",
	".amount-words-line",
	".sign-box p",
	".witness-section h4",
	".copies-section p",
	".receipt-title",
	".receipt-body p",
	".receipt-footer p"
].join(", ");
function templateElements(root) {
	return Array.from(root.querySelectorAll(EDITABLE_TEMPLATE_SELECTOR));
}
function snapshotTemplate(root) {
	return templateElements(root).map((el, i) => ({
		index: i,
		html: el.innerHTML
	}));
}
function restoreTemplate(root, data) {
	if (!data) return;
	const els = templateElements(root);
	data.forEach((item) => {
		if (els[item.index]) els[item.index].innerHTML = item.html;
	});
}
function setContentEdit(root, on) {
	templateElements(root).forEach((el, i) => {
		el.classList.add("template-editable");
		el.dataset.templateIndex = String(i);
		el.setAttribute("spellcheck", "false");
		el.setAttribute("contenteditable", on ? "true" : "false");
	});
}
var DOCX_FONT = "Latha";
var DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
var PAPER_SIZES = {
	A4: {
		css: "A4",
		w: "210mm",
		h: "297mm",
		margin: "15mm 12mm 20mm 15mm",
		label: "A4 (210 × 297 mm)"
	},
	Legal: {
		css: "legal",
		w: "215.9mm",
		h: "355.6mm",
		margin: "15mm 12mm 20mm 15mm",
		label: "Legal (8.5 × 14 in)"
	},
	Letter: {
		css: "letter",
		w: "215.9mm",
		h: "279.4mm",
		margin: "15mm 12mm 20mm 15mm",
		label: "Letter (8.5 × 11 in)"
	}
};
var DOCX_PAGE_MM = {
	A4: {
		w: 210,
		h: 297
	},
	Legal: {
		w: 215.9,
		h: 355.6
	},
	Letter: {
		w: 215.9,
		h: 279.4
	}
};
var DOCX_PRINT_PAD_MM = {
	top: 10,
	right: 10,
	bottom: 10,
	left: 12
};
var DOCX_NS = "xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\" xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\"";
function dxMm(mm) {
	return Math.round(mm / 25.4 * 1440);
}
function dxEsc(s) {
	return String(s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function dxHidden(el) {
	return el.nodeType === 1 && getComputedStyle(el).display === "none";
}
function dxIsBold(el) {
	const fw = getComputedStyle(el).fontWeight;
	return fw === "bold" || fw === "bolder" || parseInt(fw, 10) >= 600;
}
function dxIsUnder(el) {
	const cs = getComputedStyle(el);
	if ((cs.textDecorationLine || cs.textDecoration || "").indexOf("underline") >= 0) return true;
	if (/^(SPAN|B|STRONG|I|EM|U|A)$/.test(el.tagName) && cs.borderBottomStyle !== "none" && parseFloat(cs.borderBottomWidth) > 0) return true;
	return false;
}
function dxRunXml(text, f) {
	f = f || {};
	const rpr = "<w:rPr><w:rFonts w:ascii=\"Latha\" w:hAnsi=\"Latha\" w:eastAsia=\"Latha\" w:cs=\"Latha\"/>" + (f.b ? "<w:b/><w:bCs/>" : "") + (f.sz ? "<w:sz w:val=\"" + f.sz + "\"/><w:szCs w:val=\"" + f.sz + "\"/>" : "") + (f.u ? "<w:u w:val=\"single\"/>" : "") + "<w:lang w:val=\"en-IN\" w:bidi=\"ta-IN\"/></w:rPr>";
	if (f.br) return "<w:r>" + rpr + "<w:br/></w:r>";
	if (f.tab) return "<w:r>" + rpr + "<w:tab/></w:r>";
	return "<w:r>" + rpr + "<w:t xml:space=\"preserve\">" + dxEsc(text) + "</w:t></w:r>";
}
function dxPPr(p) {
	let ppr = "";
	if (p.keepNext) ppr += "<w:keepNext/>";
	if (p.keepLines) ppr += "<w:keepLines/>";
	if (p.pageBreakBefore) ppr += "<w:pageBreakBefore/>";
	if (p.tabs && p.tabs.length) ppr += "<w:tabs>" + p.tabs.map((t) => "<w:tab w:val=\"left\" w:pos=\"" + t + "\"/>").join("") + "</w:tabs>";
	ppr += "<w:spacing w:before=\"" + (p.before || 0) + "\" w:after=\"" + (p.after || 0) + "\" w:line=\"" + (p.line || 360) + "\" w:lineRule=\"" + (p.lineRule || "exact") + "\"/>";
	if (p.left || p.hanging || p.firstLine) ppr += "<w:ind" + (p.left ? " w:left=\"" + p.left + "\"" : "") + (p.hanging ? " w:hanging=\"" + p.hanging + "\"" : "") + (p.firstLine ? " w:firstLine=\"" + p.firstLine + "\"" : "") + "/>";
	if (p.jc && p.jc !== "left") ppr += "<w:jc w:val=\"" + p.jc + "\"/>";
	return "<w:pPr>" + ppr + "</w:pPr>";
}
function dxParaXml(runsXml, p) {
	return "<w:p>" + dxPPr(p || {}) + (runsXml || "") + "</w:p>";
}
function dxSpacerXml(twips, extra) {
	return "<w:p>" + dxPPr(Object.assign({
		line: Math.max(20, Math.round(twips)),
		lineRule: "exact"
	}, extra || {})) + "<w:r><w:rPr><w:sz w:val=\"2\"/><w:szCs w:val=\"2\"/></w:rPr></w:r></w:p>";
}
function dxInlineRuns(node, fmt, out) {
	node.childNodes.forEach((ch) => {
		if (ch.nodeType === 3) {
			out.push({
				t: ch.nodeValue,
				b: fmt.b,
				u: fmt.u
			});
			return;
		}
		if (ch.nodeType !== 1) return;
		if (ch.tagName === "BR") {
			out.push({ br: true });
			return;
		}
		if (dxHidden(ch)) return;
		dxInlineRuns(ch, {
			b: fmt.b || dxIsBold(ch),
			u: fmt.u || dxIsUnder(ch)
		}, out);
	});
	return out;
}
function dxNormalizeRuns(runs) {
	const res = [];
	let prevSpace = true;
	runs.forEach((r) => {
		if (r.br) {
			if (res.length) res.push(r);
			prevSpace = true;
			return;
		}
		let t = r.t.replace(/[ \t\r\n\f]+/g, " ");
		if (prevSpace) t = t.replace(/^ /, "");
		if (!t) return;
		res.push({
			t,
			b: r.b,
			u: r.u
		});
		prevSpace = / $/.test(t);
	});
	while (res.length) {
		const last = res[res.length - 1];
		if (last.br) {
			res.pop();
			continue;
		}
		last.t = last.t.replace(/ $/, "");
		if (!last.t) {
			res.pop();
			continue;
		}
		break;
	}
	return res;
}
function dxPx(ctx, v) {
	const n = parseFloat(v);
	return isNaN(n) ? 0 : Math.round(n * 15 * ctx.scale);
}
function dxParaItem(el, ctx, opts) {
	opts = opts || {};
	const cs = getComputedStyle(el);
	const fontPx = parseFloat(cs.fontSize) || 17.33;
	const sz = Math.max(2, Math.round(fontPx * 1.5 * ctx.scale));
	const lhPx = parseFloat(cs.lineHeight);
	const line = isNaN(lhPx) ? Math.round(fontPx * 1.7 * 15 * ctx.scale) : Math.round(lhPx * 15 * ctx.scale);
	const ta = cs.textAlign;
	const jc = opts.jc || (ta === "justify" ? "both" : ta === "center" ? "center" : ta === "right" || ta === "end" ? "right" : "left");
	let runs = dxNormalizeRuns(dxInlineRuns(el, {
		b: dxIsBold(el),
		u: dxIsUnder(el)
	}, []));
	const p = {
		jc,
		line,
		lineRule: "exact"
	};
	const num = el.getAttribute && el.getAttribute("data-num");
	if (num) {
		const padLeft = dxPx(ctx, cs.paddingLeft) || 457;
		p.left = dxPx(ctx, cs.marginLeft) + padLeft;
		p.hanging = padLeft;
		p.tabs = [p.left];
		runs = [{
			t: num,
			b: dxIsBold(el)
		}, { tab: true }].concat(runs);
	} else {
		const ti = dxPx(ctx, cs.textIndent);
		if (ti > 0) p.firstLine = ti;
		const ml = dxPx(ctx, cs.marginLeft) + dxPx(ctx, cs.paddingLeft);
		if (ml > 0) p.left = ml;
	}
	if (dxIsUnder(el) && dxIsBold(el)) p.keepNext = true;
	if (!runs.length && !opts.allowEmpty) return null;
	return {
		kind: "p",
		p,
		runs: runs.map((r) => r.tab ? dxRunXml("", {
			tab: true,
			sz
		}) : r.br ? dxRunXml("", {
			br: true,
			sz
		}) : dxRunXml(r.t, {
			b: r.b,
			u: r.u,
			sz
		})).join(""),
		mt: dxPx(ctx, cs.marginTop),
		mb: dxPx(ctx, cs.marginBottom)
	};
}
function dxCellXmlContent(el, ctx, jcOverride) {
	const sub = {
		scale: ctx.scale,
		contentW: ctx.contentW,
		items: []
	};
	if (Array.from(el.children).some((k) => /^(P|DIV|H[1-6]|TABLE)$/.test(k.tagName))) Array.from(el.children).forEach((k) => dxBlock(k, sub));
	else {
		const it = dxParaItem(el, sub, { allowEmpty: true });
		if (it) sub.items.push(it);
	}
	if (!sub.items.length) sub.items.push({
		kind: "p",
		p: {
			line: 240,
			lineRule: "exact"
		},
		runs: "",
		mt: 0,
		mb: 0
	});
	if (jcOverride) sub.items.forEach((it) => {
		if (it.kind === "p") it.p.jc = jcOverride;
	});
	sub.items[0].mt = 0;
	sub.items[sub.items.length - 1].mb = 0;
	return dxSerialize(sub.items);
}
function dxTableXml(colWidths, rowsXml, opts) {
	opts = opts || {};
	const total = colWidths.reduce((a, b) => a + b, 0);
	const m = opts.cellMar || {
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	};
	return "<w:tbl><w:tblPr><w:tblW w:w=\"" + total + "\" w:type=\"dxa\"/><w:tblInd w:w=\"0\" w:type=\"dxa\"/><w:tblBorders><w:top w:val=\"nil\"/><w:left w:val=\"nil\"/><w:bottom w:val=\"nil\"/><w:right w:val=\"nil\"/><w:insideH w:val=\"nil\"/><w:insideV w:val=\"nil\"/></w:tblBorders><w:tblLayout w:type=\"fixed\"/><w:tblCellMar><w:top w:w=\"" + m.top + "\" w:type=\"dxa\"/><w:left w:w=\"" + m.left + "\" w:type=\"dxa\"/><w:bottom w:w=\"" + m.bottom + "\" w:type=\"dxa\"/><w:right w:w=\"" + m.right + "\" w:type=\"dxa\"/></w:tblCellMar></w:tblPr><w:tblGrid>" + colWidths.map((w) => "<w:gridCol w:w=\"" + w + "\"/>").join("") + "</w:tblGrid>" + rowsXml + "</w:tbl>";
}
function dxTc(width, xml, o) {
	o = o || {};
	let tcpr = "<w:tcW w:w=\"" + width + "\" w:type=\"dxa\"/>";
	if (o.borderTop || o.borderBottom) tcpr += "<w:tcBorders>" + (o.borderTop ? "<w:top w:val=\"single\" w:sz=\"6\" w:space=\"0\" w:color=\"333333\"/>" : "") + (o.borderBottom ? "<w:bottom w:val=\"single\" w:sz=\"6\" w:space=\"0\" w:color=\"333333\"/>" : "") + "</w:tcBorders>";
	if (o.mar) tcpr += "<w:tcMar><w:top w:w=\"" + o.mar.top + "\" w:type=\"dxa\"/><w:left w:w=\"" + o.mar.left + "\" w:type=\"dxa\"/><w:bottom w:w=\"" + o.mar.bottom + "\" w:type=\"dxa\"/><w:right w:w=\"" + o.mar.right + "\" w:type=\"dxa\"/></w:tcMar>";
	tcpr += "<w:vAlign w:val=\"top\"/>";
	return "<w:tc><w:tcPr>" + tcpr + "</w:tcPr>" + xml + "</w:tc>";
}
function dxEmptyCellXml() {
	return dxSpacerXml(240);
}
function dxFlexRowItem(el, ctx) {
	const kids = Array.from(el.children).filter((k) => !dxHidden(k));
	if (!kids.length) return null;
	const pr = el.getBoundingClientRect(), pw = pr.width || 1, W = ctx.contentW;
	const spans = kids.map((k) => {
		const r = k.getBoundingClientRect();
		const ta = getComputedStyle(k).textAlign;
		return {
			k,
			s: Math.max(0, (r.left - pr.left) / pw),
			e: Math.min(1, (r.right - pr.left) / pw),
			jc: ta === "center" ? "center" : ta === "right" || ta === "end" ? "right" : null
		};
	});
	const cols = [], cells = [];
	let cursor = 0;
	spans.forEach((sp, i) => {
		const start = Math.max(sp.s, cursor);
		const gapBefore = Math.round((start - cursor) * W);
		if (gapBefore > 40) {
			cols.push(gapBefore);
			cells.push(dxTc(gapBefore, dxEmptyCellXml()));
		}
		let end = sp.e;
		if (!sp.jc) end = i + 1 < spans.length ? Math.max(sp.e, spans[i + 1].s) : 1;
		const w = Math.max(150, Math.round((end - start) * W));
		cols.push(w);
		cells.push(dxTc(w, dxCellXmlContent(sp.k, ctx, sp.jc)));
		cursor = start + w / W;
	});
	const used = cols.reduce((a, b) => a + b, 0);
	if (W - used > 40) {
		cols.push(W - used);
		cells.push(dxTc(W - used, dxEmptyCellXml()));
	} else if (used > W) cols[cols.length - 1] -= used - W;
	const cs = getComputedStyle(el);
	return {
		kind: "tbl",
		xml: dxTableXml(cols, "<w:tr><w:trPr><w:cantSplit/></w:trPr>" + cells.join("") + "</w:tr>"),
		mt: dxPx(ctx, cs.marginTop),
		mb: dxPx(ctx, cs.marginBottom)
	};
}
function dxHtmlTableItem(tbl, ctx) {
	const rows = Array.from(tbl.querySelectorAll("tr")).filter((r) => !dxHidden(r));
	if (!rows.length) return null;
	const tw = tbl.getBoundingClientRect().width || 1, W = ctx.contentW;
	const cols = Array.from(rows[0].children).map((td) => Math.round(td.getBoundingClientRect().width / tw * W));
	const diff = W - cols.reduce((a, b) => a + b, 0);
	if (cols.length) cols[cols.length - 1] += diff;
	const rowsXml = rows.map((r) => "<w:tr><w:trPr><w:cantSplit/></w:trPr>" + Array.from(r.children).map((td, i) => {
		const cs = getComputedStyle(td);
		return dxTc(cols[i] || 1e3, dxCellXmlContent(td, ctx), {
			mar: {
				top: dxPx(ctx, cs.paddingTop),
				left: dxPx(ctx, cs.paddingLeft),
				bottom: dxPx(ctx, cs.paddingBottom),
				right: dxPx(ctx, cs.paddingRight)
			},
			borderTop: cs.borderTopStyle !== "none" && parseFloat(cs.borderTopWidth) > 0,
			borderBottom: cs.borderBottomStyle !== "none" && parseFloat(cs.borderBottomWidth) > 0
		});
	}).join("") + "</w:tr>").join("");
	const cs = getComputedStyle(tbl);
	return {
		kind: "tbl",
		xml: dxTableXml(cols, rowsXml),
		mt: dxPx(ctx, cs.marginTop),
		mb: dxPx(ctx, cs.marginBottom)
	};
}
function dxPush(ctx, it) {
	if (it) ctx.items.push(it);
	return it;
}
function dxBlock(el, ctx) {
	if (el.nodeType !== 1 || dxHidden(el)) return;
	const tag = el.tagName;
	if (tag === "TABLE") {
		dxPush(ctx, dxHtmlTableItem(el, ctx));
		return;
	}
	if (tag === "P" || /^H[1-6]$/.test(tag)) {
		dxPush(ctx, dxParaItem(el, ctx));
		return;
	}
	if (tag === "DIV" || tag === "SECTION") {
		const cs = getComputedStyle(el);
		const kids = Array.from(el.children).filter((k) => !dxHidden(k));
		if (!kids.length) {
			if (el.textContent.trim() === "") {
				const h = dxPx(ctx, cs.height);
				if (h > 0) dxPush(ctx, {
					kind: "spacer",
					h,
					mt: dxPx(ctx, cs.marginTop),
					mb: dxPx(ctx, cs.marginBottom)
				});
				return;
			}
			dxPush(ctx, dxParaItem(el, ctx));
			return;
		}
		if (cs.display === "flex" && kids.length >= 2 && cs.flexDirection !== "column") {
			dxPush(ctx, dxFlexRowItem(el, ctx));
			return;
		}
		if (!kids.some((k) => /^(P|DIV|TABLE|H[1-6]|SECTION|UL|OL)$/.test(k.tagName))) {
			dxPush(ctx, dxParaItem(el, ctx));
			return;
		}
		const startLen = ctx.items.length;
		kids.forEach((k) => dxBlock(k, ctx));
		if (ctx.items.length > startLen) {
			const first = ctx.items[startLen], last = ctx.items[ctx.items.length - 1];
			first.mt = Math.max(first.mt || 0, dxPx(ctx, cs.marginTop));
			last.mb = Math.max(last.mb || 0, dxPx(ctx, cs.marginBottom));
		}
		return;
	}
	dxPush(ctx, dxParaItem(el, ctx));
}
function dxSerialize(items) {
	const out = [];
	for (let i = 0; i < items.length; i++) {
		const it = items[i], prev = items[i - 1], next = items[i + 1];
		const gapAfter = next ? Math.max(it.mb || 0, next.mt || 0) : 0;
		const gapBefore = prev && prev.kind === "tbl" ? Math.max(prev.mb || 0, it.mt || 0) : 0;
		if (it.kind === "p") {
			it.p.before = gapBefore;
			it.p.after = next && next.kind !== "tbl" ? gapAfter : next ? gapAfter : 0;
			out.push(dxParaXml(it.runs, it.p));
		} else if (it.kind === "spacer") out.push(dxSpacerXml(it.h, {
			before: gapBefore,
			after: gapAfter,
			pageBreakBefore: it.pageBreakBefore
		}));
		else {
			if (it.pageBreakBefore) out.push("<w:p>" + dxPPr({
				line: 20,
				lineRule: "exact"
			}) + "<w:r><w:br w:type=\"page\"/></w:r></w:p>");
			out.push(it.xml);
			if (next && next.kind === "tbl") out.push(dxSpacerXml(Math.max(gapAfter, 20)));
		}
	}
	return out.join("");
}
function dxFooterXml() {
	const f = {
		b: true,
		sz: 20
	};
	const fld = (instr) => "<w:fldSimple w:instr=\" " + instr + " \"><w:r><w:rPr><w:b/><w:bCs/><w:sz w:val=\"20\"/><w:szCs w:val=\"20\"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple>";
	return "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><w:ftr " + DOCX_NS + "><w:p><w:pPr><w:spacing w:before=\"0\" w:after=\"0\" w:line=\"276\" w:lineRule=\"auto\"/><w:jc w:val=\"center\"/></w:pPr>" + dxRunXml("பக்கம் ", f) + fld("PAGE") + dxRunXml(" / ", f) + fld("NUMPAGES") + "</w:p></w:ftr>";
}
function buildWorkerDocx(root, paperKey) {
	paperKey = paperKey || "A4";
	root = root || document;
	const pm = DOCX_PAGE_MM[paperKey] || DOCX_PAGE_MM.A4;
	const mParts = (typeof PAPER_SIZES !== "undefined" && PAPER_SIZES[paperKey] ? PAPER_SIZES[paperKey].margin : "15mm 12mm 20mm 15mm").split(/\s+/).map(parseFloat);
	const pageMar = {
		top: mParts[0],
		right: mParts[1],
		bottom: mParts[2],
		left: mParts[3]
	};
	const scale = (pm.w - pageMar.left - pageMar.right) / pm.w;
	const mar = {
		top: dxMm(pageMar.top + DOCX_PRINT_PAD_MM.top * scale),
		bottom: dxMm(pageMar.bottom + DOCX_PRINT_PAD_MM.bottom * scale),
		left: dxMm(pageMar.left + DOCX_PRINT_PAD_MM.left * scale),
		right: dxMm(pageMar.right + DOCX_PRINT_PAD_MM.right * scale),
		header: dxMm(8),
		footer: dxMm(pageMar.bottom / 2 + 2)
	};
	const pgW = dxMm(pm.w), pgH = dxMm(pm.h);
	const ctx = {
		scale,
		contentW: pgW - mar.left - mar.right,
		items: []
	};
	root.querySelectorAll(".a4-page").forEach((page, idx) => {
		const startLen = ctx.items.length;
		Array.from(page.children).forEach((k) => dxBlock(k, ctx));
		if (idx > 0 && ctx.items.length > startLen) {
			const first = ctx.items[startLen];
			if (first.kind === "p") first.p.pageBreakBefore = true;
			else first.pageBreakBefore = true;
			first.mt = 0;
		}
	});
	if (ctx.items.length) ctx.items[0].mt = 0;
	const bodyXml = dxSerialize(ctx.items);
	const sectPr = "<w:sectPr><w:footerReference w:type=\"default\" r:id=\"rId3\"/><w:pgSz w:w=\"" + pgW + "\" w:h=\"" + pgH + "\"/><w:pgMar w:top=\"" + mar.top + "\" w:right=\"" + mar.right + "\" w:bottom=\"" + mar.bottom + "\" w:left=\"" + mar.left + "\" w:header=\"" + mar.header + "\" w:footer=\"" + mar.footer + "\" w:gutter=\"0\"/><w:cols w:space=\"708\"/><w:docGrid w:linePitch=\"360\"/></w:sectPr>";
	const documentXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><w:document " + DOCX_NS + "><w:body>" + bodyXml + sectPr + "</w:body></w:document>";
	const defSz = Math.round(17.33 * 1.5 * scale);
	const stylesXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><w:styles " + DOCX_NS + "><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii=\"" + DOCX_FONT + "\" w:hAnsi=\"" + DOCX_FONT + "\" w:eastAsia=\"" + DOCX_FONT + "\" w:cs=\"" + DOCX_FONT + "\"/><w:sz w:val=\"" + defSz + "\"/><w:szCs w:val=\"" + defSz + "\"/><w:lang w:val=\"en-IN\" w:eastAsia=\"en-US\" w:bidi=\"ta-IN\"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after=\"0\" w:line=\"240\" w:lineRule=\"auto\"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type=\"paragraph\" w:default=\"1\" w:styleId=\"Normal\"><w:name w:val=\"Normal\"/><w:qFormat/></w:style><w:style w:type=\"table\" w:default=\"1\" w:styleId=\"TableNormal\"><w:name w:val=\"Normal Table\"/><w:uiPriority w:val=\"99\"/><w:semiHidden/><w:tblPr><w:tblInd w:w=\"0\" w:type=\"dxa\"/><w:tblCellMar><w:top w:w=\"0\" w:type=\"dxa\"/><w:left w:w=\"0\" w:type=\"dxa\"/><w:bottom w:w=\"0\" w:type=\"dxa\"/><w:right w:w=\"0\" w:type=\"dxa\"/></w:tblCellMar></w:tblPr></w:style><w:style w:type=\"paragraph\" w:styleId=\"Footer\"><w:name w:val=\"footer\"/><w:basedOn w:val=\"Normal\"/></w:style></w:styles>";
	const settingsXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><w:settings " + DOCX_NS + "><w:defaultTabStop w:val=\"720\"/><w:characterSpacingControl w:val=\"doNotCompress\"/><w:compat><w:compatSetting w:name=\"compatibilityMode\" w:uri=\"http://schemas.microsoft.com/office/word\" w:val=\"15\"/></w:compat></w:settings>";
	const contentTypes = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><Types xmlns=\"http://schemas.openxmlformats.org/package/2006/content-types\"><Default Extension=\"rels\" ContentType=\"application/vnd.openxmlformats-package.relationships+xml\"/><Default Extension=\"xml\" ContentType=\"application/xml\"/><Override PartName=\"/word/document.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\"/><Override PartName=\"/word/styles.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml\"/><Override PartName=\"/word/settings.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml\"/><Override PartName=\"/word/footer1.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml\"/><Override PartName=\"/docProps/core.xml\" ContentType=\"application/vnd.openxmlformats-package.core-properties+xml\"/></Types>";
	const rels = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\"><Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\" Target=\"word/document.xml\"/><Relationship Id=\"rId2\" Type=\"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties\" Target=\"docProps/core.xml\"/></Relationships>";
	const docRels = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\"><Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles\" Target=\"styles.xml\"/><Relationship Id=\"rId2\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings\" Target=\"settings.xml\"/><Relationship Id=\"rId3\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer\" Target=\"footer1.xml\"/></Relationships>";
	const wName = (root.querySelector("#w_name") || {}).textContent || "";
	const now = (/* @__PURE__ */ new Date()).toISOString().replace(/\.\d+Z$/, "Z");
	const coreXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><cp:coreProperties xmlns:cp=\"http://schemas.openxmlformats.org/package/2006/metadata/core-properties\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:dcterms=\"http://purl.org/dc/terms/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><dc:title>" + dxEsc("Settlement Agreement - " + wName) + "</dc:title><dc:creator>Worker Settlement Generator</dc:creator><dcterms:created xsi:type=\"dcterms:W3CDTF\">" + now + "</dcterms:created><dcterms:modified xsi:type=\"dcterms:W3CDTF\">" + now + "</dcterms:modified></cp:coreProperties>";
	return dxZip([
		{
			name: "[Content_Types].xml",
			data: contentTypes
		},
		{
			name: "_rels/.rels",
			data: rels
		},
		{
			name: "docProps/core.xml",
			data: coreXml
		},
		{
			name: "word/document.xml",
			data: documentXml
		},
		{
			name: "word/_rels/document.xml.rels",
			data: docRels
		},
		{
			name: "word/styles.xml",
			data: stylesXml
		},
		{
			name: "word/settings.xml",
			data: settingsXml
		},
		{
			name: "word/footer1.xml",
			data: dxFooterXml()
		}
	]);
}
var DX_CRC = (function() {
	const t = /* @__PURE__ */ new Uint32Array(256);
	for (let n = 0; n < 256; n++) {
		let c = n;
		for (let k = 0; k < 8; k++) c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
		t[n] = c >>> 0;
	}
	return t;
})();
function dxCrc32(u8) {
	let c = 4294967295;
	for (let i = 0; i < u8.length; i++) c = DX_CRC[(c ^ u8[i]) & 255] ^ c >>> 8;
	return (c ^ 4294967295) >>> 0;
}
function dxZip(files) {
	const enc = new TextEncoder();
	const u16 = (v) => [v & 255, v >>> 8 & 255], u32 = (v) => [
		v & 255,
		v >>> 8 & 255,
		v >>> 16 & 255,
		v >>> 24 & 255
	];
	const d = /* @__PURE__ */ new Date();
	const dosTime = d.getHours() << 11 | d.getMinutes() << 5 | d.getSeconds() >> 1;
	const dosDate = d.getFullYear() - 1980 << 9 | d.getMonth() + 1 << 5 | d.getDate();
	const parts = [], central = [];
	let offset = 0;
	files.forEach((f) => {
		const name = enc.encode(f.name);
		const data = typeof f.data === "string" ? enc.encode(f.data) : f.data;
		const crc = dxCrc32(data);
		const lh = new Uint8Array([].concat(u32(67324752), u16(20), u16(2048), u16(0), u16(dosTime), u16(dosDate), u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0)));
		parts.push(lh, name, data);
		central.push(new Uint8Array([].concat(u32(33639248), u16(20), u16(20), u16(2048), u16(0), u16(dosTime), u16(dosDate), u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset))), name);
		offset += lh.length + name.length + data.length;
	});
	const cdSize = central.reduce((s, a) => s + a.length, 0);
	const eocd = new Uint8Array([].concat(u32(101010256), u16(0), u16(0), u16(files.length), u16(files.length), u32(cdSize), u32(offset), u16(0)));
	const all = parts.concat(central, [eocd]);
	const out = new Uint8Array(all.reduce((s, a) => s + a.length, 0));
	let p = 0;
	all.forEach((a) => {
		out.set(a, p);
		p += a.length;
	});
	return out;
}
function dxDownload(u8, filename, mime) {
	const blob = new Blob([u8], { type: mime || "application/octet-stream" });
	const a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	setTimeout(() => {
		URL.revokeObjectURL(a.href);
		a.remove();
	}, 2e3);
}
function dxSafeName(s) {
	return String(s || "").trim().replace(/[^A-Za-z0-9._-]+/g, "_").replace(/^_+|_+$/g, "");
}
function dxFileNameFor(w) {
	if (!w) return "Worker_Settlement_Template.docx";
	const tno = dxSafeName(w.tno), nm = dxSafeName(w.name);
	return "Settlement_" + (tno ? tno + "_" : "") + (nm || "worker") + ".docx";
}
function DocumentPages({ fill, paperSize, contentEditMode, templateContent, onReady }) {
	const rootRef = (0, import_react.useRef)(null);
	const restored = (0, import_react.useRef)(false);
	const onReadyRef = (0, import_react.useRef)(onReady);
	onReadyRef.current = onReady;
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		if (!root) return;
		onReadyRef.current?.(root);
		if (!restored.current && templateContent?.length) {
			restoreTemplate(root, templateContent);
			restored.current = true;
		}
	}, [templateContent]);
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		if (!root) return;
		if (fill) applyFill(root, fill);
	}, [fill]);
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		if (!root) return;
		setContentEdit(root, contentEditMode);
	}, [contentEditMode]);
	(0, import_react.useEffect)(() => {
		const sz = PAPER_SIZES[paperSize] ?? PAPER_SIZES.A4;
		document.documentElement.style.setProperty("--paper-w", sz.w);
		document.documentElement.style.setProperty("--paper-h", sz.h);
		document.documentElement.setAttribute("data-paper", paperSize);
		let st = document.getElementById("pageSizeStyle");
		if (!st) {
			st = document.createElement("style");
			st.id = "pageSizeStyle";
			document.head.appendChild(st);
		}
		st.textContent = `@page { size: ${sz.css}; margin: ${sz.margin}; }`;
	}, [paperSize]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: (el) => {
			rootRef.current = el;
			if (el) onReadyRef.current?.(el);
		},
		id: "settlement-root",
		className: "settlement-doc",
		lang: "ta",
		dangerouslySetInnerHTML: { __html: DOCUMENT_HTML }
	});
}
function norm(c) {
	return String(c === void 0 || c === null ? "" : c).replace(/\s+/g, " ").trim().toLowerCase();
}
function isBlank(c) {
	return c === void 0 || c === null || String(c).trim() === "";
}
function isNumLike(c) {
	return !isBlank(c) && /^\d+(\.0+)?$/.test(String(c).trim());
}
var DISTRICTS = [
	"namakkal",
	"salem",
	"erode",
	"karur",
	"dharmapuri",
	"krishnagiri",
	"coimbatore",
	"tiruppur",
	"tirupur",
	"dindigul",
	"madurai",
	"thanjavur",
	"vellore",
	"perambalur",
	"ariyalur",
	"cuddalore",
	"villupuram",
	"kallakurichi",
	"tirupattur",
	"ranipet",
	"trichy",
	"tiruchirappalli",
	"tiruchirapalli",
	"theni",
	"tenkasi",
	"tirunelveli",
	"thoothukudi",
	"kanyakumari",
	"virudhunagar",
	"sivagangai",
	"ramanathapuram",
	"pudukkottai",
	"nagapattinam",
	"mayiladuthurai",
	"thiruvarur",
	"chengalpattu",
	"kancheepuram",
	"kanchipuram",
	"tiruvallur",
	"tiruvannamalai",
	"nilgiris",
	"chennai"
];
function looksLikeHeaderRow(cells) {
	return cells.some((c) => /^s\.?\s*no\.?$/.test(c) || /^(t|ticket|token)\.?\s*no\.?$/.test(c) || c === "name" || /^(emp(loyee)?|worker)\.?\s*(no|name|code)/.test(c));
}
function pd(v) {
	if (v === void 0 || v === null || v === 0 || v === "" || v === "0" || v === "-") return "";
	const fmtD = (d, utc) => {
		const dd = utc ? d.getUTCDate() : d.getDate();
		const mm = (utc ? d.getUTCMonth() : d.getMonth()) + 1;
		const yy = utc ? d.getUTCFullYear() : d.getFullYear();
		return String(dd).padStart(2, "0") + "." + String(mm).padStart(2, "0") + "." + yy;
	};
	if (typeof v === "number") {
		if (v < 2e4) return "";
		return fmtD(new Date(Math.round((v - 25569) * 86400 * 1e3)), true);
	}
	if (v instanceof Date) return fmtD(v, false);
	return String(v).trim();
}
function parseWorkbook(data) {
	const wb = readSync(data, { type: "array" });
	let sheetName = wb.SheetNames[0] ?? "";
	for (const sn of wb.SheetNames) if (utils.sheet_to_json(wb.Sheets[sn], { header: 1 }).slice(0, 25).some((rw) => looksLikeHeaderRow((rw || []).map((c) => norm(c))))) {
		sheetName = sn;
		break;
	}
	const sheet = wb.Sheets[sheetName];
	if (!sheet) throw new Error("Excel sheet காணப்படவில்லை");
	const rows = utils.sheet_to_json(sheet, { header: 1 });
	const range = utils.decode_range(sheet["!ref"] || "A1");
	const rowOffset = range.s.r;
	let headerIdx = -1;
	for (let h = 0; h < Math.min(rows.length, 25); h++) if (looksLikeHeaderRow((rows[h] || []).map((c) => norm(c)))) {
		headerIdx = h;
		break;
	}
	const hasHeader = headerIdx >= 0;
	let firstDataIdx = -1;
	for (let d = headerIdx + 1; d < rows.length; d++) {
		const r = rows[d] || [];
		if (isNumLike(r[0]) && (!isBlank(r[1]) || !isBlank(r[2]))) {
			firstDataIdx = d;
			break;
		}
	}
	if (firstDataIdx < 0) firstDataIdx = hasHeader ? headerIdx + 1 : 0;
	const hdrRows = hasHeader ? rows.slice(headerIdx, firstDataIdx) : [];
	const nCols = Math.max(range.e.c + 1, ...hdrRows.map((r) => (r || []).length), 1);
	const headers = [];
	for (let c = 0; c < nCols; c++) headers.push(hdrRows.map((r) => norm((r || [])[c])).filter(Boolean).join(" "));
	const findCol = (patterns, fallback) => {
		if (hasHeader) {
			for (const re of patterns) {
				const idx = headers.findIndex((h) => h && re.test(h));
				if (idx >= 0) return idx;
			}
			return -1;
		}
		return fallback;
	};
	const COL = {
		sno: findCol([
			/^s\.?\s*no\.?$/,
			/^s\.?\s*no/,
			/^sl\.?\s*no/
		], 0),
		tno: findCol([/^(t|ticket|token)\.?\s*no/, /^emp(loyee)?\.?\s*(no|code|id)/], 1),
		name: findCol([/^name$/, /^(emp(loyee)?|worker)\.?\s*name/], 2),
		fa: findCol([/father|husband|address/], 3),
		phone: findCol([/mobile|phone|cell\s*no/], -1),
		gratuity: findCol([/gratu/], 20),
		compensation: findCol([/compen/], 21),
		notice: findCol([/notice/], 22),
		bonus: findCol([/bonus/], 23),
		el: findCol([
			/^el\b/,
			/\bel\s*(amount|amt|encash)/,
			/earned\s*leave/,
			/leave\s*(amount|encash|salary|wages)/
		], 24),
		exgratia: findCol([/ex.?gratia/], 25),
		total: findCol([
			/net.*(amount|payable)/,
			/total.*settle/,
			/settle.*(amount|total)/,
			/grand\s*total/,
			/total\s*(amount|payable)/
		], 26),
		rep1: findCol([/(management|mgmt)\s*rep(resentative)?\s*-?\s*1/, /rep(resentative)?\s*-?\s*1\b/], 27),
		rep2: findCol([/(management|mgmt)\s*rep(resentative)?\s*-?\s*2/, /rep(resentative)?\s*-?\s*2\b/], 28),
		agDate: findCol([/agreement\s*date/, /settlement\s*date/], 29),
		chequeNo: findCol([/cheque\s*no/, /check\s*no/], 30),
		chequeDate: findCol([/cheque\s*date/, /check\s*date/], 31),
		wit1: findCol([/witness\s*-?\s*1/], 32),
		wit2: findCol([/witness\s*-?\s*2/], 33),
		rcptDate: findCol([/receipt\s*date/], 34),
		bank: findCol([
			/bank.*(a\/?c|acc(ount)?)/,
			/(a\/?c|account)\s*(no|number)/,
			/^bank\s*no/
		], 35),
		ifsc: findCol([/ifsc/], 36),
		payDate: findCol([
			/pay(ment)?\s*date/,
			/date\s*of\s*pay(ment)?/,
			/online.*date/,
			/(credit|transfer|neft|rtgs|upi).*date/
		], 37)
	};
	if (COL.sno < 0) COL.sno = 0;
	if (COL.tno < 0) COL.tno = 1;
	if (COL.name < 0) COL.name = 2;
	if (COL.fa < 0) COL.fa = 3;
	const missingCols = hasHeader ? [
		["gratuity", "Gratuity"],
		["compensation", "Compensation"],
		["notice", "Notice Pay"],
		["bonus", "Bonus"],
		["total", "Net/Total Amount"],
		["bank", "Bank A/c No"],
		["ifsc", "IFSC"],
		["payDate", "Payment Date"]
	].filter((e) => COL[e[0]] < 0).map((e) => e[1]) : [];
	const getVal = (r, c) => c === void 0 || c === null || c < 0 ? void 0 : r[c];
	const getStr = (r, c) => {
		const v = getVal(r, c);
		return isBlank(v) ? "" : String(v).trim();
	};
	const getNum = (r, c) => {
		const v = getVal(r, c);
		if (isBlank(v)) return 0;
		if (typeof v === "number") return v;
		const n = parseFloat(String(v).replace(/[^0-9.\-]/g, ""));
		return isNaN(n) ? 0 : n;
	};
	const cellText = (rIdx, cIdx) => {
		if (cIdx === void 0 || cIdx === null || cIdx < 0) return "";
		const cell = sheet[utils.encode_cell({
			r: rIdx + rowOffset,
			c: cIdx
		})];
		if (!cell || cell.v === void 0 || cell.v === null) return "";
		if (typeof cell.v === "number") {
			if (cell.w && /^[0-9 ]+$/.test(String(cell.w).trim())) return String(cell.w).trim();
			return cell.v.toLocaleString("fullwide", { useGrouping: false });
		}
		return String(cell.v).trim();
	};
	const mobileRe = /^mobile\s*(no|number)?\.?\s*:?\s*/i;
	const workers = [];
	for (let i = firstDataIdx; i < rows.length; i++) {
		const r = rows[i];
		if (!r) continue;
		if (isBlank(getVal(r, COL.sno))) continue;
		if (isBlank(getVal(r, COL.tno)) && isBlank(getVal(r, COL.name))) continue;
		if (typeof getVal(r, COL.name) === "number") continue;
		let father = "";
		let addressLines = [];
		let phoneFromExcel = "";
		const faRaw = getVal(r, COL.fa);
		const pushLine = (txt) => {
			let t = String(txt || "").trim();
			if (!t) return;
			if (mobileRe.test(t)) {
				phoneFromExcel = t.replace(mobileRe, "").replace(/[^0-9+ ,/]/g, "").trim();
				return;
			}
			addressLines.push(t);
		};
		if (typeof faRaw === "string" && /[\r\n]/.test(faRaw)) {
			const lines = faRaw.split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
			father = lines.shift() || "";
			lines.forEach(pushLine);
		} else {
			father = isBlank(faRaw) ? "" : String(faRaw).trim();
			for (let k = 1; k <= 8; k++) {
				const sub = rows[i + k];
				if (!sub) break;
				if (!isBlank(getVal(sub, COL.sno))) break;
				pushLine(getVal(sub, COL.fa));
			}
		}
		if (!phoneFromExcel && COL.phone >= 0) phoneFromExcel = getStr(r, COL.phone).replace(mobileRe, "");
		const cleaned = [];
		addressLines.forEach((l) => {
			const key = l.replace(/[,.\s]+$/, "").trim().toLowerCase();
			const prev = cleaned.length ? cleaned[cleaned.length - 1].replace(/[,.\s]+$/, "").trim().toLowerCase() : null;
			if (key && key !== prev) cleaned.push(l);
		});
		if (cleaned.length) {
			const lastKey = cleaned[cleaned.length - 1].replace(/[,.\s]+$/, "").trim().toLowerCase();
			if (DISTRICTS.includes(lastKey)) cleaned[cleaned.length - 1] = cleaned[cleaned.length - 1].replace(/[,.\s]+$/, "") + " District";
		}
		addressLines = cleaned;
		const rawName = getStr(r, COL.name).replace(/\s*\.\s*/g, " ").replace(/\s+/g, " ").trim();
		workers.push({
			sno: getStr(r, COL.sno),
			tno: getStr(r, COL.tno),
			name: rawName,
			father,
			addressLines,
			phone: phoneFromExcel,
			gratuity: getNum(r, COL.gratuity),
			compensation: getNum(r, COL.compensation),
			noticePay: getNum(r, COL.notice),
			bonus: getNum(r, COL.bonus),
			elAmount: getNum(r, COL.el),
			exGratia: getNum(r, COL.exgratia),
			totalAmount: getNum(r, COL.total),
			rep1: getStr(r, COL.rep1),
			rep2: getStr(r, COL.rep2),
			agDate: pd(getVal(r, COL.agDate)),
			chequeNo: getStr(r, COL.chequeNo),
			chequeDate: pd(getVal(r, COL.chequeDate)),
			wit1: getStr(r, COL.wit1),
			wit2: getStr(r, COL.wit2),
			rcptDate: pd(getVal(r, COL.rcptDate)),
			bankAc: cellText(i, COL.bank),
			ifsc: cellText(i, COL.ifsc).toUpperCase(),
			payDate: pd(getVal(r, COL.payDate))
		});
	}
	if (workers.length > 0) {
		const fw = workers[0];
		workers.forEach((w) => {
			w.rep1 = w.rep1 || fw.rep1 || "";
			w.rep2 = w.rep2 || fw.rep2 || "";
			w.agDate = w.agDate || fw.agDate || "";
			w.chequeNo = w.chequeNo || fw.chequeNo || "";
			w.chequeDate = w.chequeDate || fw.chequeDate || "";
			w.wit1 = w.wit1 || fw.wit1 || "";
			w.wit2 = w.wit2 || fw.wit2 || "";
			w.rcptDate = w.rcptDate || fw.rcptDate || "";
			w.payDate = w.payDate || fw.payDate || "";
		});
	}
	const cnt = (k) => workers.filter((w) => w[k]).length;
	return {
		workers,
		missingCols,
		sheetName,
		stats: {
			bank: cnt("bankAc"),
			ifsc: cnt("ifsc"),
			payDate: cnt("payDate")
		}
	};
}
function parseNameFixes(text) {
	const words = {};
	const phrases = [];
	String(text || "").split(/\r?\n/).forEach((line) => {
		const m = line.match(/^\s*([A-Za-z][A-Za-z .'-]*?)\s*(?:=|:|=>|->|→)\s*(.+?)\s*$/);
		if (!m) return;
		const en = m[1].replace(/\s+/g, " ").trim().toLowerCase();
		const ta = m[2].trim();
		if (!en || !ta) return;
		if (en.includes(" ")) phrases.push([new RegExp("\\b" + en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "gi"), ta]);
		else words[en] = ta;
	});
	return {
		words,
		phrases
	};
}
var EMPTY_COMMON = {
	rep1: "",
	rep2: "",
	agDate: "",
	wit1: "",
	wit2: ""
};
var useSettings = create()(persist((set, get) => ({
	common: { ...EMPTY_COMMON },
	nameFixes: "",
	paperSize: "A4",
	templateContent: null,
	setCommon: (patch) => set((s) => ({ common: {
		...s.common,
		...patch
	} })),
	setNameFixes: (text) => {
		set({ nameFixes: text });
		const maps = parseNameFixes(text);
		setUserNameFixes(maps.words, maps.phrases);
	},
	setPaperSize: (size) => set({ paperSize: size }),
	setTemplateContent: (data) => set({ templateContent: data }),
	applyNameFixesToEngine: () => {
		const maps = parseNameFixes(get().nameFixes);
		setUserNameFixes(maps.words, maps.phrases);
	},
	exportSettings: () => {
		const s = get();
		return JSON.stringify({
			version: 1,
			common: s.common,
			nameFixes: s.nameFixes,
			paperSize: s.paperSize,
			templateContent: s.templateContent
		}, null, 2);
	},
	importSettings: (json) => {
		const d = JSON.parse(json);
		set({
			common: {
				...EMPTY_COMMON,
				...d.common || {}
			},
			nameFixes: d.nameFixes || "",
			paperSize: d.paperSize || "A4",
			templateContent: d.templateContent ?? null
		});
		const maps = parseNameFixes(d.nameFixes || "");
		setUserNameFixes(maps.words, maps.phrases);
	},
	resetSettings: () => {
		set({
			common: { ...EMPTY_COMMON },
			nameFixes: "",
			paperSize: "A4",
			templateContent: null
		});
		setUserNameFixes({}, []);
	}
}), {
	name: "workerSettlementSettings_v1",
	partialize: (s) => ({
		common: s.common,
		nameFixes: s.nameFixes,
		paperSize: s.paperSize,
		templateContent: s.templateContent
	})
}));
var useWorkers = create()((set) => ({
	workers: [],
	currentIdx: 0,
	fileName: "",
	missingCols: [],
	stats: null,
	contentEditMode: false,
	setParsed: ({ workers, fileName, missingCols, stats }) => set({
		workers,
		fileName,
		missingCols,
		stats,
		currentIdx: 0
	}),
	setCurrentIdx: (idx) => set({ currentIdx: idx }),
	setContentEditMode: (on) => set({ contentEditMode: on }),
	clearWorkers: () => set({
		workers: [],
		currentIdx: 0,
		fileName: "",
		missingCols: [],
		stats: null
	})
}));
function Home() {
	const fileRef = (0, import_react.useRef)(null);
	const restoreRef = (0, import_react.useRef)(null);
	const docRootRef = (0, import_react.useRef)(null);
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const [searchQ, setSearchQ] = (0, import_react.useState)("");
	const [searchMsg, setSearchMsg] = (0, import_react.useState)(null);
	const [nameCheckOpen, setNameCheckOpen] = (0, import_react.useState)(false);
	const [pageWarn, setPageWarn] = (0, import_react.useState)(false);
	const workers = useWorkers((s) => s.workers);
	const currentIdx = useWorkers((s) => s.currentIdx);
	const fileName = useWorkers((s) => s.fileName);
	const missingCols = useWorkers((s) => s.missingCols);
	const stats = useWorkers((s) => s.stats);
	const contentEditMode = useWorkers((s) => s.contentEditMode);
	const setParsed = useWorkers((s) => s.setParsed);
	const setCurrentIdx = useWorkers((s) => s.setCurrentIdx);
	const setContentEditMode = useWorkers((s) => s.setContentEditMode);
	const common = useSettings((s) => s.common);
	const nameFixes = useSettings((s) => s.nameFixes);
	const paperSize = useSettings((s) => s.paperSize);
	const templateContent = useSettings((s) => s.templateContent);
	const setCommon = useSettings((s) => s.setCommon);
	const setNameFixes = useSettings((s) => s.setNameFixes);
	const setPaperSize = useSettings((s) => s.setPaperSize);
	const setTemplateContent = useSettings((s) => s.setTemplateContent);
	const applyNameFixesToEngine = useSettings((s) => s.applyNameFixesToEngine);
	const exportSettings = useSettings((s) => s.exportSettings);
	const importSettings = useSettings((s) => s.importSettings);
	(0, import_react.useEffect)(() => {
		applyNameFixesToEngine();
		const unsub = useSettings.persist.onFinishHydration(() => {
			useSettings.getState().applyNameFixesToEngine();
		});
		try {
			const st = document.createElement("style");
			st.textContent = "@page { @bottom-center { content: \"x\"; } }";
			document.head.appendChild(st);
			const rule = st.sheet?.cssRules[0];
			const ok = !!(rule && "cssRules" in rule && rule.cssRules.length > 0);
			st.remove();
			setPageWarn(!ok);
		} catch {
			setPageWarn(true);
		}
		return unsub;
	}, [applyNameFixesToEngine]);
	(0, import_react.useEffect)(() => {
		document.body.classList.toggle("content-edit-mode", contentEditMode);
		return () => document.body.classList.remove("content-edit-mode");
	}, [contentEditMode]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (!e.ctrlKey) return;
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
			}
			if (e.key === "ArrowRight") {
				e.preventDefault();
				if (currentIdx < workers.length - 1) setCurrentIdx(currentIdx + 1);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		currentIdx,
		workers.length,
		setCurrentIdx
	]);
	const current = workers[currentIdx] ?? null;
	const fill = (0, import_react.useMemo)(() => current ? computeFill(current, common) : null, [
		current,
		common,
		nameFixes
	]);
	async function ingestFile(file) {
		try {
			const result = parseWorkbook(await file.arrayBuffer());
			if (!result.workers.length) {
				toast.error("தொழிலாளர் தரவுகள் காணப்படவில்லை");
				return;
			}
			setParsed({
				workers: result.workers,
				fileName: file.name,
				missingCols: result.missingCols,
				stats: result.stats
			});
			const n = result.workers.length;
			toast.success(`${n} தொழிலாளர்கள் ஏற்றப்பட்டனர்`, { description: `Bank ${result.stats.bank}/${n} · IFSC ${result.stats.ifsc}/${n} · Payment date ${result.stats.payDate}/${n}` });
			if (result.missingCols.length) toast.warning("சில columns கிடைக்கவில்லை", { description: result.missingCols.join(", ") });
		} catch (err) {
			toast.error("Excel ஏற்ற முடியவில்லை", { description: err instanceof Error ? err.message : String(err) });
		}
	}
	function findWorker() {
		const q = searchQ.trim().toLowerCase();
		if (!q) {
			setSearchMsg({
				ok: false,
				text: "Employee No உள்ளிடவும்"
			});
			return;
		}
		if (!workers.length) {
			setSearchMsg({
				ok: false,
				text: "முதலில் Excel ஏற்றவும்"
			});
			return;
		}
		let idx = workers.findIndex((w) => String(w.tno).trim().toLowerCase() === q);
		if (idx < 0) idx = workers.findIndex((w) => String(w.sno).trim().toLowerCase() === q);
		if (idx < 0) idx = workers.findIndex((w) => String(w.tno).trim().toLowerCase().includes(q) || String(w.name).trim().toLowerCase().includes(q));
		if (idx < 0) {
			setSearchMsg({
				ok: false,
				text: `"${q}" — தொழிலாளர் கிடைக்கவில்லை`
			});
			return;
		}
		setCurrentIdx(idx);
		setSearchMsg({
			ok: true,
			text: `${workers[idx].tno} — ${workers[idx].name}`
		});
	}
	function downloadWordCurrent() {
		const root = docRootRef.current;
		if (!root) return;
		const w = current;
		dxDownload(buildWorkerDocx(root, paperSize), dxFileNameFor(w), DOCX_MIME);
	}
	function downloadWordAll() {
		const root = docRootRef.current;
		if (!root) return;
		if (!workers.length) {
			toast.error("முதலில் Excel ஏற்றவும்");
			return;
		}
		const files = [];
		const seen = {};
		const prev = currentIdx;
		for (let i = 0; i < workers.length; i++) {
			applyFill(root, computeFill(workers[i], common));
			let name = dxFileNameFor(workers[i]);
			if (seen[name]) name = name.replace(/\.docx$/, `_${i + 1}.docx`);
			seen[name] = true;
			files.push({
				name,
				data: buildWorkerDocx(root, paperSize)
			});
		}
		if (workers[prev]) applyFill(root, computeFill(workers[prev], common));
		dxDownload(dxZip(files), "Settlement_Word_All_Workers.zip", "application/zip");
		toast.success(`${workers.length} Word கோப்புகள் ZIP-ஆக தயாராகின`);
	}
	function saveContent() {
		const root = docRootRef.current;
		if (!root) return;
		setTemplateContent(snapshotTemplate(root));
		toast.success("மாற்றிய content சேமிக்கப்பட்டது");
	}
	function resetContent() {
		if (!confirm("Saved content-ஐ நீக்கி original-க்கு திரும்ப வேண்டுமா?")) return;
		setTemplateContent(null);
		const root = docRootRef.current;
		if (root) {
			root.innerHTML = "";
			window.location.reload();
		}
	}
	function backupSettings() {
		const blob = new Blob([exportSettings()], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = "worker-settlement-settings.json";
		a.click();
		URL.revokeObjectURL(a.href);
	}
	async function restoreSettings(file) {
		try {
			const text = await file.text();
			importSettings(text);
			const root = docRootRef.current;
			const parsed = JSON.parse(text);
			if (root && Array.isArray(parsed.templateContent)) restoreTemplate(root, parsed.templateContent);
			toast.success("Settings restore ஆனது");
		} catch {
			toast.error("Settings file படிக்க முடியவில்லை");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "light",
				position: "top-center",
				toastOptions: { className: "font-sans" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "app-chrome border-b border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MillMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
								children: "Rasipuram · Namakkal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl",
								children: "திருவள்ளுவர் டெக்ஸ்டைல்ஸ்"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 max-w-xl text-sm text-muted text-pretty",
								children: "Worker settlement desk — ID Act 1947, Sec 18(1) ஒப்பந்தம் + சர்வ அடக்க ரசீது. Excel உலாவியிலேயே படிக்கப்படும்; எங்கும் upload ஆகாது."
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [workers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							tone: "ink",
							children: [
								currentIdx + 1,
								" / ",
								workers.length
							]
						}), fileName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "muted",
							className: "max-w-48 truncate",
							children: fileName
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-6 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "app-chrome grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: cn("rounded-2xl", dragOver && "ring-2 ring-ring"),
							onDragOver: (e) => {
								e.preventDefault();
								setDragOver(true);
							},
							onDragLeave: () => setDragOver(false),
							onDrop: (e) => {
								e.preventDefault();
								setDragOver(false);
								const f = e.dataTransfer.files[0];
								if (f) ingestFile(f);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Excel ஏற்றுக" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Header பெயர் வைத்து columns கண்டுபிடிக்கும். Father/Husband & Address பல வரிகளாக இருந்தாலும் சரி." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "flex flex-col gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileRef,
										type: "file",
										accept: ".xlsx,.xls",
										className: "sr-only",
										suppressHydrationWarning: true,
										onChange: (e) => {
											const f = e.target.files?.[0];
											if (f) ingestFile(f);
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => fileRef.current?.click(),
										className: "flex min-h-28 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-raised/60 px-4 py-6 text-center transition-colors hover:bg-raised",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5 text-primary" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium",
												children: "Drop Excel here, or click to browse"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted",
												children: ".xlsx / .xls · stays on this device"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												onClick: () => fileRef.current?.click(),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, {}), " Excel ஏற்றுக"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "success",
												onClick: () => window.print(),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), " Print / PDF"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "secondary",
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "/sample-worker-settlement.xlsx",
													download: true,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), " Sample Excel"]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "word",
												onClick: downloadWordCurrent,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {}), " Word — இந்த தொழிலாளி"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "word",
												onClick: downloadWordAll,
												disabled: !workers.length,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, {}), " Word — எல்லோருக்கும்"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-3 rounded-lg bg-raised px-3 py-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "paperSize",
												className: "shrink-0",
												children: "Paper"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												id: "paperSize",
												value: paperSize,
												suppressHydrationWarning: true,
												onChange: (e) => setPaperSize(e.target.value),
												className: "h-11 rounded-md border border-border bg-surface px-3 text-sm",
												children: Object.keys(PAPER_SIZES).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: k,
													children: PAPER_SIZES[k].label
												}, k))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "flex-1 text-xs text-muted min-w-48",
												children: [
													"Print dialog-ல் paper size = ",
													PAPER_SIZES[paperSize].label,
													", margins = Default. Footer-ல் பக்கம் எண் தானாக வரும்."
												]
											})
										]
									}),
									pageWarn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-warn",
										children: "இந்த browser-ல் CSS page-number support இல்லை. Chrome அல்லது Edge 131+ பயன்படுத்தவும்."
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "பொது விவரங்கள்" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Excel-ல் column இல்லாதபோது எல்லா தொழிலாளர்களுக்கும் இதுவே. Auto-save." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "நிர்வாக பிரதிநிதி 1",
										value: common.rep1,
										onChange: (v) => setCommon({ rep1: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "நிர்வாக பிரதிநிதி 2",
										value: common.rep2,
										onChange: (v) => setCommon({ rep2: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										className: "sm:col-span-2",
										label: "ஒப்பந்த தேதி",
										placeholder: "17.09.2026",
										value: common.agDate,
										onChange: (v) => setCommon({ agDate: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "சாட்சி 1",
										value: common.wit1,
										onChange: (v) => setCommon({ wit1: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "சாட்சி 2",
										value: common.wit2,
										onChange: (v) => setCommon({ wit2: v })
									})
								]
							})]
						})]
					}),
					workers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "app-chrome mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "தொழிலாளர்" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Ctrl + ← / → முந்தைய / அடுத்தவர். Employee No அல்லது பெயர் தேடலாம்." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "flex flex-col gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3 sm:flex-row sm:items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-w-0 flex-1 gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: searchQ,
												onChange: (e) => setSearchQ(e.target.value),
												onKeyDown: (e) => {
													if (e.key === "Enter") findWorker();
												},
												placeholder: "Employee No அல்லது பெயர்"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "secondary",
												onClick: findWorker,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}), " தேடு"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "icon",
												disabled: currentIdx <= 0,
												onClick: () => setCurrentIdx(currentIdx - 1),
												"aria-label": "Previous worker",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "icon",
												disabled: currentIdx >= workers.length - 1,
												onClick: () => setCurrentIdx(currentIdx + 1),
												"aria-label": "Next worker",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
											})]
										})]
									}),
									searchMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("text-sm", searchMsg.ok ? "text-ok" : "text-danger"),
										children: searchMsg.text
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: currentIdx,
										suppressHydrationWarning: true,
										onChange: (e) => setCurrentIdx(Number(e.target.value)),
										className: "h-11 w-full rounded-md border border-border bg-surface px-3 text-sm",
										children: workers.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: i,
											children: [
												w.tno,
												" — ",
												w.name
											]
										}, w.tno + i))
									}),
									stats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [
											"Bank A/c ",
											stats.bank,
											"/",
											workers.length,
											" · IFSC ",
											stats.ifsc,
											"/",
											workers.length,
											" · Payment date ",
											stats.payDate,
											"/",
											workers.length,
											missingCols.length ? ` · Missing: ${missingCols.join(", ")}` : ""
										]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "app-chrome mt-4 grid gap-4 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "பெயர் திருத்தங்கள்" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "English → தமிழ். ஒரு வரிக்கு ஒன்று. Initials (D, K, R) அப்படியே இருக்கும்." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "flex flex-col gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: nameFixes,
										onChange: (e) => setNameFixes(e.target.value),
										placeholder: "Gobi = கோபி\nDuraisamy = துரைசாமி\nKoneripatty = கோனேரிப்பட்டி",
										rows: 5
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										size: "sm",
										className: "self-start",
										onClick: () => setNameCheckOpen((v) => !v),
										children: "எல்லா பெயர்களும் எப்படி மாறியுள்ளன"
									}),
									nameCheckOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameCheckTable, {})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "ஆவணம் & settings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Wording மாற்றி Save செய்க. வேறு கணினிக்கு Backup / Restore." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "flex flex-col gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: contentEditMode ? "default" : "secondary",
												onClick: () => setContentEditMode(!contentEditMode),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, {}), contentEditMode ? "Content Edit ON" : "Content Edit Mode"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "secondary",
												onClick: saveContent,
												children: "Content Save"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "outline",
												onClick: resetContent,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), " Reset Content"]
											})
										]
									}),
									contentEditMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "rounded-md bg-warn-soft px-3 py-2 text-sm text-warn",
										children: "ஆவண wording-ஐ நேரடியாகத் திருத்தலாம். நிலையாக வைக்க Content Save அழுத்தவும்."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												onClick: backupSettings,
												children: "Settings Backup"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												onClick: () => restoreRef.current?.click(),
												children: "Restore"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												ref: restoreRef,
												type: "file",
												accept: "application/json",
												className: "sr-only",
												suppressHydrationWarning: true,
												onChange: (e) => {
													const f = e.target.files?.[0];
													if (f) restoreSettings(f);
													e.target.value = "";
												}
											})
										]
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "app-chrome mb-4 flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-semibold tracking-tight",
								children: "ஆவண முன்னோட்டம்"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Print செய்தால் இந்த panels மறையும். இரண்டு தாள்கள் — ஒப்பந்தம், ரசீது."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "doc-viewport rounded-2xl bg-raised/50 px-2 py-6 sm:px-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPages, {
								fill,
								paperSize,
								contentEditMode,
								templateContent,
								onReady: (el) => {
									docRootRef.current = el;
								}
							})
						})]
					})
				]
			})
		]
	});
}
function Field({ label, value, onChange, placeholder, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("flex flex-col gap-1.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		})]
	});
}
function MillMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: "mt-1 size-12 shrink-0 text-primary",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				y: "1",
				width: "46",
				height: "46",
				rx: "10",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14 32V16h8.5c3.4 0 5.5 1.9 5.5 4.6 0 1.7-.8 3.1-2.2 3.9 1.7.7 2.8 2.2 2.8 4.2 0 3-2.3 5.3-6.3 5.3H14zm4.2-9.4h4c1.7 0 2.6-.8 2.6-2s-.9-2-2.6-2h-4v4zm0 7.1h4.6c1.9 0 3-.9 3-2.3s-1.1-2.3-3-2.3h-4.6v4.6z",
				fill: "#faf7f1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "36",
				cy: "14",
				r: "2.2",
				fill: "#faf7f1"
			})
		]
	});
}
function NameCheckTable() {
	const workers = useWorkers((s) => s.workers);
	const nameFixes = useSettings((s) => s.nameFixes);
	if (!workers.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "முதலில் Excel ஏற்றவும்."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-h-80 overflow-auto rounded-md border border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "sticky top-0 bg-raised text-left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2 font-medium",
						children: "T.No"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2 font-medium",
						children: "English"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2 font-medium",
						children: "தமிழ்"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: workers.map((w) => {
				const rows = [["பெயர்", w.name]];
				if (w.father) rows.push(["தந்தை/கணவர்", w.father]);
				(w.addressLines || []).forEach((a) => rows.push(["முகவரி", a]));
				return rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							rowSpan: rows.length,
							className: "px-3 py-2 align-top font-medium",
							children: w.tno || w.sno
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2 align-top text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mr-1 text-xs text-subtle",
								children: [r[0], ":"]
							}), r[1]]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 align-top",
							children: englishToTamil(String(r[1]))
						})
					]
				}, w.tno + i + r[0] + nameFixes));
			}) })]
		})
	});
}
//#endregion
export { Home as component };
