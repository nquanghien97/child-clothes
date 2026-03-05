export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('url', process.env.GOOGLE_SCRIPT_URL)
    await fetch(process.env.GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify(body)
    })

    return Response.json({
      success: true
    })
  } catch (error) {
    console.error("Error sending order:", error);
    return Response.json(
      { success: false, error: "Send order failed" },
      { status: 500 }
    )
  }
}