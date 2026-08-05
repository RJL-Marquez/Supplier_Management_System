param(
    [Parameter(Mandatory=$true)][string]$Path
)

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0

try {
    $doc = $word.Documents.Open($Path, $false, $true)
    $doc.Fields.Update() | Out-Null
    $doc.Repaginate()

    $wdActiveEndPageNumber = 3

    foreach ($para in $doc.Paragraphs) {
        $styleName = $para.Range.Style.NameLocal
        if ($styleName -eq "Heading 1" -or $styleName -eq "Heading 2") {
            $text = $para.Range.Text.Trim()
            if ($text -eq "") { continue }
            $page = $para.Range.Information($wdActiveEndPageNumber)
            $prefix = if ($styleName -eq "Heading 1") { "H1" } else { "H2" }
            Write-Output "$prefix`t$page`t$text"
        }
    }

    $doc.Close([ref]$false)
} finally {
    $word.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
}
